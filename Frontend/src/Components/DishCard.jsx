import React from 'react'
import { IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating } from 'react-icons/md'
import { ImSpoonKnife } from "react-icons/im";

const DishCard = ({image , category,price,title,desc,rating,Isveg}) => {
  return (
    <div className="flex flex-col w-[300px] overflow-hidden rounded-xl border border-biege bg-white/10 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

  <div className="relative">
    <img
      src={image}
      className="h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105"
      alt={title}
    />

    <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm text-biege backdrop-blur-md">
      <ImSpoonKnife />
      {category}
    </span>

    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 font-semibold text-biege backdrop-blur-md">
{price}    </span>
  </div>

  <div className="flex flex-col gap-3 p-4">

    <div className="flex items-center justify-between">
      <h2 className="font-[Outfit] text-xl font-semibold text-biege">
{title}      </h2>

      <div className="flex items-center gap-1 rounded-full bg-yellow-500/20 px-2 py-1 text-sm">
        <IoStar />
{rating}      </div>
    </div>

    <p className="line-clamp-2 text-sm text-gray-300">
      
      {desc}
    </p>

    <div className="flex items-center justify-between">
     <div className="flex h-4 w-4 items-center justify-center border border-green-600">
  <div className="h-2 w-2 rounded-full bg-green-600"></div>
</div>

      <span className="text-xs text-gray-400">
        Available
      </span>
    </div>

    <div className="flex gap-2">
      <button className="flex-1 rounded-lg border border-biege py-2 text-sm">
        Edit
      </button>

      <button className="flex-1 rounded-lg bg-red-500/20 py-2 text-sm">
        Delete
      </button>
    </div>

  </div>
</div>
  )
}

export default DishCard