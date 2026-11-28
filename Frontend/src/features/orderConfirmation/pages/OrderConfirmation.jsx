
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {  FaShoppingBag,} from 'react-icons/fa'
import { useOrderDetails } from '../hooks/orderConfirmationHooks'
import FunctionLoader from '../../../utils/FunctionLoader'
import SuccessSection from '../components/SuccessSection'
import OrderInformation from '../components/OrderInformation'
import NavigationButton from '../components/NavigationButton'
import PriceSummary from '../components/PriceSummary'

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
        <SuccessSection orderId={order?._id}/>

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
           <PriceSummary order={order} subtotal={subtotal}/>
          </div>

          {/* Order information */}
        <OrderInformation order={order}/>
        </section>

        {/* Bottom actions */}
       <NavigationButton/>

      </div>
    </main>
  )
}

export default OrderConfirmation
