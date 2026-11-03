import React from 'react'
import { motion } from "motion/react";
import { FaStar ,FaMinus,FaPlus} from 'react-icons/fa6';
const ProductInformation = ({title,rating,reviews,price,desc,isVeg,quantity,setQuantity}) => {
  return (
  <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col justify-center py-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary/50 mb-5">
            A taste worth remembering
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <FaStar className="text-amber-500" size={14} />
              <span className="font-medium">{rating || "4.8"}</span>
            </div>
            <span className="text-primary/30">|</span>
            <span className="text-primary/50">
              {reviews || 124} Reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-8 pb-8 border-b border-primary/15">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/50 mb-2">
              Price
            </p>
            <p className="font-heading text-4xl">₹{price}</p>
          </div>

          {/* Description */}
          <div className="mt-7">
            <h2 className="font-heading text-lg uppercase tracking-wider mb-3">
              Description
            </h2>
            <p className="text-primary/65 leading-8 text-[15px]">
              {desc}
            </p>
          </div>

          {/* Food type */}
          <div className="mt-7">
            <div className="inline-flex items-center gap-3 border border-primary/15 rounded-full px-4 py-2.5">
              <div className={`w-4 h-4 border-2 flex items-center justify-center ${isVeg? "border-green-700" : "border-red-600"}`}>
                <div className={`w-2 h-2 rounded-full ${isVeg ? "bg-green-700" : "bg-red-600"}`} />
              </div>
              <span className="text-xs uppercase tracking-wider">
                {isVeg ? "Vegetarian" : "Non Vegetarian"}
              </span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] mb-4">
              Select quantity
            </p>

            <div className="flex items-center border border-primary/25 rounded-full w-fit">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity === 1}
                className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-brand rounded-l-full transition disabled:opacity-30"
                aria-label="Decrease quantity"
              >
                <FaMinus size={11} />
              </button>

              <span className="w-12 text-center text-sm font-medium">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-brand rounded-r-full transition"
                aria-label="Increase quantity"
              >
                <FaPlus size={11} />
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-9">
            <button className="py-4 px-6 border border-primary text-primary text-xs uppercase tracking-[0.18em] rounded-full hover:bg-primary hover:text-brand transition duration-300">
              Add to cart
            </button>

            <button className="py-4 px-6 bg-primary text-brand text-xs uppercase tracking-[0.18em] rounded-full hover:bg-primary/85 transition duration-300">
              Buy now
            </button>
          </div>
        </motion.div>  )
}

export default ProductInformation