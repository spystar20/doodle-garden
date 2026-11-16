import {asyncHandler} from '../../Middleware/asyncHandler.js'
import userModel from '../../Model/UserSchema.js'
import menuModel from '../../Model/MenuSchema.js'
import cartSchema from '../../Model/cartSchema.js'
import orderSchema from '../../Model/orderSchema.js'
import razorpay from '../../config/razorpay.js'
import crypto from 'crypto'
export const createOrder = asyncHandler(async (req, res) => {
    const { orderSource, customerDetails, orderType, paymentType, pickupDate, pickupTimeSlot, } = req.body
    const { name, phone, address, city, pincode } = customerDetails || {}
    const userId = req.user.userId
    if (!userId) {
        return res.status(403).json({ message: 'please login to continue' })
    }
    const existingUser = await userModel.findById(userId)
    if (!existingUser) {
        return res.status(404).json({ message: 'user not found' })
    }
    if (!orderSource || !orderType || !paymentType || !name || !phone) {
        return res.status(400).json({ message: 'valid details are required' })
    }
    if (!/^[6-9]\d{9}$/.test(String(phone))) {
    return res.status(400).json({
        message: 'Please provide a valid phone number'
    })
}
    if (!['delivery', 'pickup'].includes(orderType)) {
    return res.status(400).json({ message: 'Invalid order type' })
}

if (!['cod', 'online'].includes(paymentType)) {
    return res.status(400).json({ message: 'Invalid payment method' })
}
    let orderItem = []
    let deliveryFee=0
    let codFee=0
    if (orderSource == 'direct') {
        const { productId, quantity } = req.body
        if (!productId || !Number.isInteger(quantity) || quantity < 1) {
            return res.status(400).json({ message: 'valid product and quantity details are required' })
        }
        const product = await menuModel.findById(productId)
        if (!product) {
            return res.status(404).json({ message: 'item not found' })
        }
        orderItem = [{ productId: product._id, title: product.title, price: product.price, quantity }]
    }
    else if (orderSource == 'cart') {
       
        const userCart = await cartSchema.findOne({ userId }).populate('items.product')
        if (!userCart) {
            return res.status(404).json({ message: 'cart not found' })
        }
        if (!userCart.items.length) {
            return res.status(400).json({ message: 'your cart is empty' })
        }
            if (userCart.items.some(item => !item.product)) {
        return res.status(400).json({ message: 'Some products in your cart are no longer available' })
    }
        orderItem= userCart.items.map((item)=>{
            return {productId:item.product._id,title:item.product.title,price:item.product.price,quantity:item.quantity}
        })

    }else {
    return res.status(400).json({ message: 'Invalid order source' })
}
const subtotal = orderItem.reduce((acc,curr)=>{
 return   acc+curr.price*curr.quantity
},0)
if(orderType==='delivery'&& paymentType==='online'){
deliveryFee=30 
codFee=0
}else if(orderType==='delivery' && paymentType==='cod'){
deliveryFee=30
}
const total = subtotal+deliveryFee+codFee
if(orderType==='delivery'){
    if(!address||!pincode||!city){
        return res.status(400).json({message:'valid location details are required'})
    }
}else if(orderType==='pickup'){
      if(!pickupDate||!pickupTimeSlot){
        return res.status(400).json({message:'provide valid date and time '})
    }
    const selectedDate = new Date(pickupDate)
    if(Number.isNaN(selectedDate.getTime()) || selectedDate<new Date()){
           return res.status(400).json({
        message: 'Please provide a valid pickup date'
    })

    }
}
const order = await orderSchema.create({
    userId,
    items: orderItem,
    customerDetails,
    amount: total,
    orderType,
    orderStatus: 'placed',
    paymentType,
    deliveryFee,
    codFee,
    pickupDate: orderType === 'pickup' ? pickupDate : undefined,
    pickupTimeSlot: orderType === 'pickup' ? pickupTimeSlot : undefined,
    orderSource
})
let razorpayOrder=null
if(paymentType==='online'){
 razorpayOrder =await razorpay.orders.create({
    amount:total*100,currency:'INR',receipt:order._id.toString()
})
order.razorpayOrderID=razorpayOrder.id
await order.save()
}
if(orderSource==='cart'&& paymentType==='cod'){
    await cartSchema.findOneAndUpdate({userId},{$set:{items:[]}})
}
return res.status(201).json({message:'order created successfully',success:true,order,...(paymentType==='online' &&{
razorpayKey:process.env.RAZORPAY_API_KEY,razorpayOrder
})})
})

export const verifyPayment = asyncHandler(async(req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body
    if(!razorpay_order_id||!razorpay_payment_id||!razorpay_signature){
        return res.status(400).json({message:'valid credentials are required'})
    }
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const signature = crypto.createHmac('sha256',process.env.RAZORPAY_SECRET_KEY).update(body).digest('hex')
    const isAuthenticated = signature === razorpay_signature
    if(!isAuthenticated){
        return res.status(403).json({message:'signature did not matched'})
    }
    const order = await orderSchema.findOne({
    razorpayOrderID: razorpay_order_id,
    userId: req.user.userId
})
if (!order) {
    return res.status(404).json({
        message: 'Order not found'
    })
}
if (order.paymentStatus === 'paid') {
    return res.status(400).json({
        message: 'Payment already verified'
    })
}
if(order.paymentType !=='online'||order.paymentStatus!=='pending'){
return res.status(400).json({
message:'Invalid payment verification'
})
}
const payment = await razorpay.payments.fetch(razorpay_payment_id)
if(!payment){
    return res.status(404).json({message:'payment not found'})
}
if(payment.order_id !== order.razorpayOrderID || payment.amount !==order.amount*100||payment.status!=='captured'){
return res.status(400).json({message:'Payment verfication failed'})
}
order.razorpayPaymentId=razorpay_payment_id
order.paymentStatus='paid'
await order.save()
if (order.orderSource === 'cart') {
    await cartSchema.findOneAndUpdate(
        { userId: order.userId },
        { $set: { items: [] } }
    )
}
return res.status(201).json({message:'payment verified',order,success:true})
})
