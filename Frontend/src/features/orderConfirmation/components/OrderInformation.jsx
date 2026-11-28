import React from 'react'
import { FaReceipt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa'

const OrderInformation = ({order}) => {
  return (
  <div className="flex flex-col gap-6">

            <div className="rounded-2xl bg-primary p-6 text-brand md:p-8">
              <div className="flex items-center gap-3">
                <FaReceipt className="text-xl" />
                <h2 className="font-heading text-2xl">
                  Order Information
                </h2>
              </div>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand/50">
                    Order Type
                  </p>
                  <p className="mt-2 text-lg capitalize">
                    {order?.orderType || '—'}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-brand/50">
                    Payment Method
                  </p>
                  <p className="mt-2 text-lg capitalize">
                    {order?.paymentType || '—'}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-brand/50">
                    Payment Status
                  </p>
                  <p className="mt-2 text-lg capitalize">
                    {order?.paymentStatus || '—'}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white/60 p-6 md:p-8">
              <div className="flex items-center gap-3">
                {order?.orderType === 'pickup'
                  ? <FaRegClock className="text-xl" />
                  : <FaMapMarkerAlt className="text-xl" />
                }

                <h2 className="font-heading text-2xl">
                  {order?.orderType === 'pickup'
                    ? 'Pickup Details'
                    : 'Delivery Details'}
                </h2>
              </div>

              {order?.orderType === 'pickup' ? (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary/50">
                      Pickup Date
                    </p>
                    <p className="mt-2 font-medium">{ new Date(order.pickupDate).toLocaleDateString('en-IN',{
                        day:'numeric',month:'long',year:'numeric'
                    })}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary/50">
                      Pickup Time
                    </p>
                    <p className="mt-2 font-medium">{order?.pickupTimeSlot}</p>
                  </div>
                </div>
              ) : (
             <div className="mt-6 text-sm leading-relaxed text-primary/60">
    <p className="font-semibold text-primary">
        {order.customerDetails.name}
    </p>
    <p>{order.customerDetails.phone}</p>
    <p>{order.customerDetails.address}</p>
    <p>
        {order.customerDetails.city} - {order.customerDetails.pincode}
    </p>
</div>
              )}
            </div>

          </div>  )
}

export default OrderInformation