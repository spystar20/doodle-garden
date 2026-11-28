import React from 'react'

const PriceSummary = ({subtotal,order}) => {
  return (
   <div className="border-t border-primary/10 pt-5">
              <div className="flex justify-between text-sm text-primary/60">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>

              <div className="mt-4 flex justify-between text-sm text-primary/60">
                <span>Delivery Fee</span>
                <span>₹ {order.deliveryFee || 0}</span>
              </div>
{order.codFee > 0 && (
    <div className="mt-4 flex justify-between text-sm text-primary/60">
        <span>COD Fee</span>
        <span>₹ {order.codFee}</span>
    </div>
)}
              <div className="mt-5 flex justify-between border-t border-primary/10 pt-5">
                <span className="font-heading text-xl">Total Paid</span>
                <span className="font-heading text-2xl">₹ {order.amount}</span>
              </div>
            </div>  )
}

export default PriceSummary