import React from 'react'
import { motion } from "motion/react";

const ProductImage = ({image,title,category}) => {
  return (
    
  <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[380px] sm:h-[480px] lg:h-[650px] overflow-hidden rounded-2xl bg-primary/5"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-5 left-5 bg-brand/90 backdrop-blur-sm px-5 py-3 rounded-full">
            <span className="text-xs uppercase tracking-[0.2em]">
              {category}
            </span>
          </div>
        </motion.div>  )
}

export default ProductImage