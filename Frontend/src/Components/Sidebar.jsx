import React from 'react'
import logo from '../assets/logo.png'
import { MdDashboard } from 'react-icons/md'
import { FaCalendar, FaUtensils } from 'react-icons/fa6'
import { HiPlusCircle } from 'react-icons/hi'
import { IoSettings } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { isDragActive } from 'motion/react'


const Sidebar = () => {
  return (
    <aside className='w-72 min-h-screen bg-biege rounded-2xl p-4 font-[Outfit]'>

      {/* Logo */}
      <div className='border-b border-black/10 pb-4'>
        <img
          src={logo}
          className='w-[220px] mx-auto'
          alt="Doodle Garden"
        />
      </div>

      {/* Navigation */}
      <div className='mt-6'>

        <p className='text-xs uppercase tracking-widest text-black/50 px-3 mb-3'>
          Main
        </p>

        <ul className='space-y-2'>

      <NavLink to='/admin/dashboard' className={ ({isActive})=>{return `flex items-center gap-3 hover:bg-black/60 hover:text-biege rounded-xl px-4 py-3 cursor-pointer duration-300 ${isActive?'bg-black text-biege':''}`}}> 
            <FaUtensils size={20} />
            <MdDashboard size={20} />

            Dashboard
          </NavLink>

  <NavLink to='/admin/manage-menu' className={ ({isActive})=>{return `flex items-center gap-3 hover:bg-black/60 hover:text-biege rounded-xl px-4 py-3 cursor-pointer duration-300 ${isActive?'bg-black text-biege':''}`}}> 
            <FaUtensils size={20} />
            Manage Menu
</NavLink>
           <NavLink to='/admin/add-item' className={ ({isActive})=>{return `flex items-center gap-3 hover:bg-black/60 hover:text-biege rounded-xl px-4 py-3 cursor-pointer duration-300 ${isActive?'bg-black text-biege':''}`}}> <HiPlusCircle size={20} />
            Add Dish
          </NavLink>

        </ul>

        <p className='text-xs uppercase tracking-widest text-black/50 px-3 mt-8 mb-3'>
          Restaurant
        </p>

        <ul className='space-y-2'>

          <li className='flex items-center gap-3 hover:bg-black hover:text-biege rounded-xl px-4 py-3 cursor-pointer duration-300'>
            <FaCalendar size={20} />
            Reservations
          </li>

          <li className='flex items-center gap-3 hover:bg-black hover:text-biege rounded-xl px-4 py-3 cursor-pointer duration-300'>
            <IoSettings size={20} />
            Settings
          </li>

        </ul>

      </div>

      {/* Bottom Card */}
      <div className='mt-auto pt-10'>
        <div className='bg-black text-biege rounded-2xl p-4'>
          <h3 className='font-semibold text-lg'>
            Doodle Garden
          </h3>

          <p className='text-sm text-biege/70 mt-1'>
            Restaurant Admin Dashboard
          </p>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar