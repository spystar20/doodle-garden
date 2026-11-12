
import React from 'react'
import { FaTruck, FaStore } from 'react-icons/fa6'

const OrderType = ({ orderType, setOrderType }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-heading font-semibold">
                How would you like your order?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-5 rounded-xl border text-left flex items-center gap-4 duration-200 ${
                        orderType === 'delivery'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaTruck className="text-2xl" />
                    <div>
                        <h3 className="font-heading font-semibold">Delivery</h3>
                        <p className="text-sm text-primary/60">Get it delivered to you</p>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-5 rounded-xl border text-left flex items-center gap-4 duration-200 ${
                        orderType === 'pickup'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaStore className="text-2xl" />
                    <div>
                        <h3 className="font-heading font-semibold">Pickup</h3>
                        <p className="text-sm text-primary/60">Free restaurant pickup</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default OrderType
