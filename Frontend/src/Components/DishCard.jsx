import React from 'react'
import { IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating } from 'react-icons/md'
import { ImSpoonKnife } from "react-icons/im";
import { FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const DishCard = ({image ,link, category,price,title,desc,rating,Isveg}) => {
  return (
    <div className="flex flex-col group w-[300px] overflow-hidden rounded-xl border bg-brand border-primary backdrop-blur-2xl p-1">
  <Link to={link}>
    <div className="relative">
      <img
        src={image}
        className="h-[280px] w-full object-cover transition-transform rounded-2xl duration-300 group-hover:scale-105"
        alt={title}
      />

      <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-primary/60 px-3 py-1 text-sm text-brand backdrop-blur-md">
        <ImSpoonKnife />
        {category}
      </span>

      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="flex items-center gap-2 rounded-full bg-primary/60 p-2 text-lg text-brand backdrop-blur-md">
          <FaRegHeart />
        </span>

        <span className="flex items-center gap-2 rounded-full bg-primary/60 p-2 text-sm text-brand backdrop-blur-md">
          <FaCartPlus />
        </span>
      </div>

      <span className="absolute right-3 top-3 rounded-full bg-primary/60 px-3 py-1 font-semibold text-brand backdrop-blur-md">
        $ {price}
      </span>
    </div>

    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-body text-xl font-semibold text-primary">
          {title}
        </h2>
      </div>

      <p className="line-clamp-2 text-sm text-primary/80">
        {desc}
      </p>

      <div className="flex items-center justify-between">
        {Isveg ? (
          <div className="flex h-4 w-4 items-center justify-center border border-green-600">
            <div className="h-2 w-2 rounded-full bg-green-600"></div>
          </div>
        ) : (
          <div className="flex h-4 w-4 items-center justify-center border border-red-600">
            <div className="h-2 w-2 rounded-full bg-red-600"></div>
          </div>
        )}

        <div className="flex items-center gap-1 rounded-full bg-yellow-500/20 text-primary px-3 py-0.5 text-sm">
          <IoStar />
          {rating}
        </div>
      </div>

      <div>
        <button className="w-full cursor-pointer border-primary text-brand rounded-full bg-primary py-2 text-sm font-medium font-body">
          Buy Now
        </button>
      </div>
    </div>
  </Link>
</div>
  )
}

export default DishCard