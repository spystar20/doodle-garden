import React from 'react'

const ProductAbout = ({product}) => {
  return (
  <section className="max-w-7xl mx-auto mt-28 pt-16 border-t border-primary/15">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/45 mb-4">
          Made with care
        </p>
        <h2 className="font-[Imperial_Script] text-5xl sm:text-6xl mb-7">
          A little more about the dish
        </h2>
        <p className="max-w-3xl text-primary/65 leading-8 text-[15px]">
          {product.desc}
        </p>
      </section>  )
}

export default ProductAbout