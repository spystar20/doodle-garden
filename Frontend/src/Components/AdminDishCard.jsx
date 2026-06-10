import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router'

const AdminDishCard = ({image , category,price,title,desc,rating,Isveg,link_edit,setOpenModal}) => {
  return (
    <div className="grid grid-cols-2 w-full group overflow-hidden rounded-xl border bg-biege border-black backdrop-blur-2xl p-1 ">
  
    <div className="relative">
      <img
        src={image}
        className="w-full h-[200px]  object-cover transition-transform rounded-xl duration-300 group-hover:scale-105"
        alt={title}
      />
  
      <span className="absolute bottom-1 left-1 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm text-biege backdrop-blur-md">
        <ImSpoonKnife />
        {category}
      </span>
 <div className=" absolute right-2 bottom-3">
       { Isveg ? ( <div className="flex h-4 w-4 items-center  justify-center border border-green-600">
    <div className="h-2 w-2 rounded-full bg-green-600"></div>
  </div>):( <div className="flex h-4 w-4 items-center justify-center border border-red-600">
    <div className="h-2 w-2 rounded-full bg-red-600"></div>
  </div>)}
      
      </div>
  
    <span className="absolute right-2 top-2 rounded-full bg-black px-4 py-1 text-sm font-semibold text-biege">

  $ {price}    </span>
    </div>
   
  <div className='flex flex-col justify-between p-2'>
    <div className="flex flex-col gap-3 ">
  
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-[Outfit] text-xl font-semibold text-black">
  {title}      </h2>
  
   <p className="line-clamp-2 min-h-[40px] text-sm text-gray-800">
        
        {desc}
      </p>
      </div>
  
     
   
</div>
 <div className='flex gap-2 '>
<Link to={link_edit} className="w-full text-center cursor-pointer border-black  text-biege rounded-full bg-black py-2 text-sm font-medium font-[Outfit]">
Edit   </Link>  
<button onClick={setOpenModal} className="w-full cursor-pointer border-red-400  text-biege rounded-full bg-red-400 py-2 text-sm font-medium font-[Outfit]">
Delete    </button>
  </div>

  </div>
    
  </div>
  )
}

export default AdminDishCard