
import React from 'react'
import { FaMoneyBillWave, FaCreditCard } from 'react-icons/fa6'

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-heading font-semibold">
                Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-5 rounded-xl border flex items-center gap-4 text-left transition ${
                        paymentMethod === 'cod'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaMoneyBillWave className="text-2xl" />
                    <div>
                        <h3 className="font-semibold">Cash on Delivery</h3>
                        <p className="text-sm text-primary/60">Pay when your order arrives</p>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={() => setPaymentMethod('online')}
                    className={`p-5 rounded-xl border flex items-center gap-4 text-left transition ${
                        paymentMethod === 'online'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaCreditCard className="text-2xl" />
                    <div>
                        <h3 className="font-semibold">Online Payment</h3>
                        <p className="text-sm text-primary/60">Pay securely online</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default PaymentMethod
