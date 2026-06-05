import React from 'react'
import { IoPulse, IoPulseSharp, IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating, MdOutline6kPlus } from 'react-icons/md'
import { ImPlus, ImSpoonKnife } from "react-icons/im";
import DishCard from '../Components/DishCard';

const ManageMenu = () => {
  return (
    <div className='w-full min-h-screen mx-4 rounded-lg text-biege px-10 py-5 flex flex-col gap-4 '>
      <div className='flex flex-col gap-1 '>
      <h2 className='text-3xl font-semibold font-[Outfit]'>Menu Management</h2>
      <p>Manage dishes, prices and availability</p>
      </div>
     <button className='self-start flex items-center justify-center gap-2 bg-dashboard p-2 rounded-lg text-white border-2 border-biege hover:bg-dashboard/90 transition-discrete cursor-pointer'><ImPlus className='text-xs'/>Add Item</button>
      <div className='grid grid-cols-4'>
   <DishCard/>
      </div>
      
    </div>
  )
}

export default ManageMenu