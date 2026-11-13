import React, { useState } from 'react'
import OrderType from '../component/OrderType'
import DeliveryForm from '../component/DeliveryForm'
import OrderSummary from '../component/OrderSummary'
import PaymentMethod from '../component/PaymentMethod'
import { useCart } from '../../cart/hooks/cartHooks'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [orderType, setOrderType] = useState('delivery')
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const { data: cartData, isLoading } = useCart()
const cartItems = cartData?.existingCart?.items || []
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
})
const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}
const handlePlaceOrder = (e) => {
    e.preventDefault()

    const orderDetails = {
        orderType,
        paymentMethod,
        customerDetails: formData,
        items: cartItems
    }

    console.log(orderDetails)
}
if (isLoading) {
    return <div className="min-h-screen bg-brand flex items-center justify-center">
        <p className="font-body">Loading checkout...</p>
    </div>
}

if (!cartItems.length) {
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
            <OrderSummary orderType={orderType} />
        </div>
    </div>

    <div className="mt-8 flex justify-end">
        <button
            type="submit"
            className="bg-primary text-brand px-8 py-3 rounded-lg font-body hover:bg-primary/80 transition"
        >
            Continue to Place Order
        </button>
    </div>
</form>  

  </div>
    )
}

export default Checkout