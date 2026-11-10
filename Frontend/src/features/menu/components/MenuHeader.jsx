import React from 'react'
import { AnimatePresence, motion } from "motion/react";
const MenuHeader = () => {
  return (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary/50 mb-5">
            Freshly prepared, thoughtfully served
          </p>

          <div className="flex items-center justify-center gap-5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl">
              The Menu
            </h1>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <p className="text-primary/55 text-sm mt-5 max-w-lg mx-auto leading-7">
            Explore our collection of carefully crafted dishes, made to
            bring a little something special to your table.
          </p>
        </motion.div>
  )
}

export default MenuHeader