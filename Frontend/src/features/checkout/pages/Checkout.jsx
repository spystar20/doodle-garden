import React, { useState } from 'react'
import OrderType from '../component/OrderType'
import DeliveryForm from '../component/DeliveryForm'
import OrderSummary from '../component/OrderSummary'
import PaymentMethod from '../component/PaymentMethod'
import { useCart } from '../../cart/hooks/cartHooks'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { usePlaceOrder, useVerifyPayment } from '../hooks/checkoutHooks'

const Checkout = () => {
    const [orderType, setOrderType] = useState('delivery')
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const [pickupDate,setPickupDate]=useState(null)
    const [pickupTimeSlot,setPickupTimeSlot]=useState(null)
    
    const navigate = useNavigate()
        const location = useLocation()
    const orderSource = location?.state?.orderSource || 'cart'
const product = location?.state?.product
const quantity = location?.state?.quantity||1
    const { data: cartData, isLoading } = useCart()
    const {mutateAsync:placeOrder,isPending}=usePlaceOrder()
    const {mutateAsync:verifyPayment}=useVerifyPayment()
const cartItems = cartData?.existingCart?.items || []
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
})
const formatDate = (date)=>{
    const Year = date.getFullYear()
    const month = String(date.getMonth()+1).padStart(2,'0')
    const day = String(date.getDate()).padStart(2,'0')
    return `${Year}-${month}-${day}`
}
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
const handleOnlinePayment = async(res)=>{
    const options = {
        amount:res.razorpayOrder.amount,
        key:res.razorpayKey,
        order_id:res.razorpayOrder.id,
        currency:res.razorpayOrder.currency,
        name:"Doodle's garden",
        description:'Food Order Payment',
        handler:async(response)=>{
            try{
                const result = await verifyPayment({
                    razorpay_order_id:response.razorpay_order_id,razorpay_payment_id:response.razorpay_payment_id,razorpay_signature:response.razorpay_signature
                })
                console.log('Verification result:', result)
                if(result.success){
                        navigate(`/orderConfirmation/${res.order._id}`)
                }

            }catch(err){
console.log(err)
            }
        }
    }
 const razorpay = new  window.Razorpay(options)
 razorpay.open()

}
const handlePlaceOrder = async(e) => {
    e.preventDefault()
const orderDetails = {
    orderSource,
    paymentType:paymentMethod,
    orderType,
    customerDetails:formData,
    pickupDate:pickupDate ? formatDate(pickupDate):undefined,
    pickupTimeSlot:pickupTimeSlot?.toLocaleTimeString('en-US',{
        hour:'2-digit',minute:'2-digit',hour12:true
    }),
    ...(orderSource==='direct' &&{
        productId:product._id,quantity
    })
}
try{
const res = await placeOrder(orderDetails)
console.log(res)
if(res.success && paymentMethod==='cod'){
 navigate(`/orderConfirmation/${res.order._id}`)
}else if (res.success && paymentMethod==='online'){
    handleOnlinePayment(res)
}
}catch(err){
console.log(err)
}
}

if (orderSource==='cart'&& isLoading) {
    return <div className="min-h-screen bg-brand flex items-center justify-center">
        <p className="font-body">Loading checkout...</p>
    </div>
}

if (orderSource==='cart'&& !cartItems.length) {
    return (
        <div className="min-h-screen bg-brand flex flex-col items-center justify-center gap-4 px-4">
            <h2 className="text-2xl font-heading font-semibold">
                Your cart is empty!
            </h2>
            <p className="text-primary/60 font-body">
                Add some delicious dishes before checking out.
            </p>
            <Link to="/Menu" className="bg-primary text-brand px-6 py-3 rounded-lg">
                Explore Menu
            </Link>
        </div>
    )
}
    return (
        
        <div className="min-h-screen bg-brand px-4 py-8 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-heading font-semibold">
                    Checkout
                </h1>
                <p className="text-primary/60 font-body mt-2">
                    Just a few more steps until your order is ready!
                </p>
            </div>
<form onSubmit={handlePlaceOrder}>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
            <OrderType
                orderType={orderType}
                setOrderType={setOrderType}
                pickupDate={pickupDate}
                pickupTimeSlot={pickupTimeSlot}
                setPickupDate={setPickupDate}
                setPickupTimeSlot={setPickupTimeSlot}
            />

            <DeliveryForm
                formData={formData}
                handleChange={handleChange}
                orderType={orderType}
            />

            <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
            />
        </div>

        <div>
            <OrderSummary orderType={orderType} orderSource={orderSource} product={product} quantity={quantity} />
        </div>
    </div>

    <div className="mt-8 flex justify-end">
        <button
        disabled={isPending}
        
            type="submit"
            className="bg-primary text-brand px-8 py-3 rounded-lg font-body hover:bg-primary/80 transition"
        >
    {isPending ? 'Placing Order...' : 'Continue to Place Order'}
        </button>
    </div>
</form>  

  </div>
    )
}

export default Checkout