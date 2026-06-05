import React from 'react'
import logo from '../assets/logo.png'
const Sidebar = () => {
  return (
    <div className='bg-biege w-64 min-h-screen rounded-e-lg font-[Outfit]'>
      <div className='p-2'>
        <img src={logo} className='w-[240px] ' alt="" />
      </div>
      <ul className='bg-black text-biege rounded-lg flex flex-col gap-3 mx-1 py-6 '>
        <li className='text-lg font-medium hover:bg-biege  hover:text-black px-3  duration-300 transition-all ease-in cursor-pointer ' >Dashboard</li>
        <li className='text-lg font-medium hover:bg-biege  hover:text-black px-3  duration-300 transition-all ease-in cursor-pointer'>Menu Management
         </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Sidebar