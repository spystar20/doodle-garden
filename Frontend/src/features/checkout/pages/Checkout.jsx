import React, { useState } from 'react'
import OrderType from '../component/OrderType'

const Checkout = () => {
    const [orderType, setOrderType] = useState('delivery')
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
<OrderType orderType={orderType} setOrderType={setOrderType} />
        </div>
    )
}

export default Checkout