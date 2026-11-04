import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
 <section className="min-h-screen bg-brand flex items-center justify-center px-5 py-20 ">
        <div className="max-w-md text-center flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-black/5 flex items-center justify-center mb-6">
            <FiShoppingBag className="text-4xl text-primary" />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl text-primary mb-3">
            Your Cart is Empty
          </h1>

          <p className="font-body text-gray-500 text-sm leading-relaxed mb-8">
            Looks like you haven't added anything to your cart yet.
            Explore our menu and find something delicious.
          </p>

          <Link
            to="/Menu"
            className="bg-primary text-white px-8 py-3 rounded-full font-body text-sm hover:bg-black/80 transition"
          >
            Explore Menu
          </Link>
        </div>
      </section>  )
}

export default EmptyCart