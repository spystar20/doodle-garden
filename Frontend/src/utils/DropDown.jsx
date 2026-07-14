import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const DropDown = ({title,width,className,array}) => {
const    [open,setOpen]=useState(false)
const handleToggle = ()=>{
    setOpen(!open)
}
  return (
    <div className='flex flex-col gap-1 relative'>
        <div onClick={handleToggle} className={`rounded-full border flex items-center justify-center  border-black/20 px-3 py-1.5 text-sm bg-transparent outline-none capitalize gap-1 ${className}`}>{title}<FaAngleDown className='mt-1'/></div>
        {open &&(
        <ul className={`bg-black absolute top-10 ${className} z-[5666666] text-biege  p-2 items-center flex flex-col gap-2 justify-center font-medium text-sm  rounded-lg`}> 
            {array?.map((option,index)=>(
         <li key={index} className=' hover:text-biege/80 cursor-pointer  '>{option}</li>
         ))}
        </ul>
        )}
    </div>
  )
}

export default DropDown