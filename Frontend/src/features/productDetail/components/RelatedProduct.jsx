import React from 'react'
import { Link } from "react-router";

const RelatedProduct = () => {
  return (
   <section className="max-w-7xl mx-auto mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/45 mb-3">
              Explore more
            </p>
            <h2 className="font-[Imperial_Script] text-5xl sm:text-6xl">
              You may also like
            </h2>
          </div>

          <Link
            to="/Menu"
            className="text-xs uppercase tracking-[0.18em] border-b border-primary pb-2 w-fit hover:opacity-50 transition"
          >
            View full menu
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Related DishCards can go here */}
        </div>
      </section>  )
}

export default RelatedProduct