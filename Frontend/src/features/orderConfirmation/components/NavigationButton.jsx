import React from 'react'
import { Link } from 'react-router-dom'

const NavigationButton = () => {
  return (
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
        </div>  )
}

export default NavigationButton