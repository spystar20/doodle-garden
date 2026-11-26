
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaCheck,
  FaShoppingBag,
  FaRegClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaReceipt
} from 'react-icons/fa'
import { useOrderDetails } from '../hooks/orderConfirmationHooks'
import FunctionLoader from '../../../utils/FunctionLoader'

const OrderConfirmation = () => {
  const { orderId } = useParams()

const {data,isLoading,isError}=useOrderDetails(orderId)
const order = data?.order
console.log(order)
const subtotal = order?.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
)
if (isLoading) {
    return (
        <div className="min-h-screen bg-brand flex flex-col gap-3 items-center justify-center">
             <FunctionLoader/>
            <p className="font-body">Loading order details...</p>
           
        </div>
    )
}

if (isError || !order) {
    return (
        <div className="min-h-screen bg-brand flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-heading">Order not found</h2>
            <Link to="/Menu" className="bg-primary text-brand px-6 py-3 rounded-lg">
                Explore Menu
            </Link>
        </div>
    )
}
  return (
    <main className="min-h-screen bg-brand px-5 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Success section */}
        <section className="flex flex-col items-center text-center pt-8 pb-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-brand shadow-lg">
            <FaCheck className="text-3xl" />
          </div>

          <p className="mt-7 text-xs uppercase tracking-[0.3em] text-primary/50">
            Doodle's Garden
          </p>

          <h1 className="mt-3 font-heading text-4xl md:text-6xl text-primary">
            Order Confirmed!
          </h1>

          <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed text-primary/60">
            Thank you for choosing us. Your order has been successfully placed.
            We're excited to serve you!
          </p>

          <p className="mt-6 text-sm text-primary/60">
            Order ID: <span className="font-semibold text-primary">
              {order?._id || 'Your order ID will appear here'}
            </span>
          </p>
        </section>

        {/* Order details */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">

          <div className="rounded-2xl border border-primary/10 bg-white/60 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-primary/10 pb-5">
              <FaShoppingBag className="text-xl" />
              <h2 className="font-heading text-2xl text-primary">
                Your Order
              </h2>
            </div>

            {/* Items will be connected to the order data */}
      <div className="space-y-5 py-5">
    {order.items.map((item) => (
        <div key={item.productId} className="flex justify-between gap-4">
            <div>
                <img src={item.productId.image} className='w-[100px] rounded-2xl'  alt={item.title} />
                <p className="font-medium text-primary">
                    {item.title}
                </p>
                <p className="text-sm text-primary/50">
                    ₹{item.price} × {item.quantity}
                </p>
            </div>
            <p className="font-medium text-primary">
                ₹{item.price * item.quantity}
            </p>
        </div>
    ))}
</div>
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
            </div>
          </div>

          {/* Order information */}
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

          </div>
        </section>

        {/* Bottom actions */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/Menu"
            className="flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-brand transition hover:bg-primary/80"
          >
            Continue Shopping
            <FaArrowRight />
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-medium text-primary transition hover:bg-primary hover:text-brand"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  )
}

export default OrderConfirmation
