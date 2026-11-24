import {asyncHandler} from '../../Middleware/asyncHandler.js'
import userModel from '../../Model/UserSchema.js'
import menuModel from '../../Model/MenuSchema.js'
import cartSchema from '../../Model/cartSchema.js'
import orderSchema from '../../Model/orderSchema.js'
import razorpay from '../../config/razorpay.js'
import crypto from 'crypto'
import { type } from 'os'
export const createOrder = asyncHandler(async (req, res) => {
    const { orderSource, customerDetails, orderType, paymentType, pickupDate, pickupTimeSlot, } = req.body
    const { name, phone, address, city, pincode } = customerDetails || {}
    const userId = req.user.userId
    const getIndianDate = ()=>{
        const parts = new Intl.DateTimeFormat('en-GB',{
            timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'
        }).formatToParts(new Date())
        const value = Object.fromEntries(
            parts.map(({type,value})=>[type,value])
        )
        return `${value.year}-${value.month}-${value.day}`
    }
    const getIndianTime = ()=>{
        const parts = new Intl.DateTimeFormat('en-Gb',{
            timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hourCycle:'h23'
        }).formatToParts(new Date())
        const value = Object.fromEntries(
            parts.map(({type,value})=>[type,value])
        )
        return Number(value.hour)*60+Number(value.minute)
    }
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
    const [year,month,date]=pickupDate.split('-').map(Number)
    const validDate = new Date(Date.UTC(year,month-1,date))
    if(validDate.getUTCFullYear() !==year || validDate.getUTCMonth() !==month-1 || validDate.getUTCDate() !== date){
        return res.status(400).json({message:'invalid date'})
    }
    const today = getIndianDate()
    if(pickupDate< today){
                return res.status(400).json({message:'pickup date can not be in past '})

    }
    const timeMatch = String(pickupTimeSlot).match(
        /^(0?[1-9]|1[0-2]):(00|30)\s?(AM|PM)$/i
    )
    if(!timeMatch){
        return res.status(400).json({message:'please pick valid time '})
    }
    let hours = Number(timeMatch[1])%12
    let minutes = Number(timeMatch[2])
    let period = timeMatch[3].toUpperCase()
    if(period==='PM'){
 hours+=12
    }
    const selectedTime = hours*60+minutes
    const openingTime = 10*60
    const closingTime = 21*60+30
    if(selectedTime>closingTime||selectedTime<openingTime){
        return res.status(400).json({message:'please select the time from the given time slot'})
    }
    if(pickupDate===today){
        const currentTime = getIndianTime()
        if(selectedTime<=currentTime){
                  return res.status(400).json({
            message: 'Please select a future pickup time'
        })
        }
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
