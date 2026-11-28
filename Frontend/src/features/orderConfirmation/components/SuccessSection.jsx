import React from 'react'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const SuccessSection = ({orderId}) => {
  return (
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
              {orderId || 'Your order ID will appear here'}
            </span>
          </p>
        </section>  )
}

export default SuccessSection