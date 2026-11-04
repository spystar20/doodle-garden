import React from 'react'

const CartHeader = () => {
  return (
  <div className="mb-10 md:mb-14">
          <p className="font-brand text-2xl text-primary mb-2">
            Doodle's Garden
          </p>

          <h1 className="font-heading text-4xl md:text-5xl text-primary">
            Your Cart
          </h1>

          <p className="font-body text-gray-500 mt-3 text-sm">
            A little happiness is just a few steps away.
          </p>
        </div>
  )
}

export default CartHeader