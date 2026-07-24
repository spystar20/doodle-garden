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
  <aside className="w-72 min-h-screen rounded-2xl bg-brand p-4 font-body">

  {/* Logo */}
  <div className="border-b border-primary/10 pb-4">
    <img
      src={logo}
      className="mx-auto w-[220px]"
      alt="Doodle Garden"
    />
  </div>

  {/* Navigation */}
  <div className="mt-6">

    {/* Main Section */}
    <p className="mb-3 px-3 font-heading text-xs uppercase tracking-[0.2em] text-primary/50">
      Main
    </p>

    <ul className="space-y-2">

      {/* Dashboard */}
      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer
          transition-all duration-300
          ${
            isActive
              ? "bg-primary text-brand shadow-md"
              : "text-primary hover:bg-primary/10"
          }`
        }
      >
        <MdDashboard size={20} />
        <span>Dashboard</span>
      </NavLink>

      {/* Manage Menu */}
      <NavLink
        to="/admin/manage-menu"
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer
          transition-all duration-300
          ${
            isActive
              ? "bg-primary text-brand shadow-md"
              : "text-primary hover:bg-primary/10"
          }`
        }
      >
        <FaUtensils size={20} />
        <span>Manage Menu</span>
      </NavLink>

      {/* Add Dish */}
      <NavLink
        to="/admin/add-item"
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer
          transition-all duration-300
          ${
            isActive
              ? "bg-primary text-brand shadow-md"
              : "text-primary hover:bg-primary/10"
          }`
        }
      >
        <HiPlusCircle size={20} />
        <span>Add Dish</span>
      </NavLink>

    </ul>


    {/* Restaurant Section */}
    <p className="mb-3 mt-8 px-3 font-heading text-xs uppercase tracking-[0.2em] text-primary/50">
      Restaurant
    </p>

    <ul className="space-y-2">

      {/* Reservations */}
      <NavLink
        to="/admin/reservation"
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer
          transition-all duration-300
          ${
            isActive
              ? "bg-primary text-brand shadow-md"
              : "text-primary hover:bg-primary/10"
          }`
        }
      >
        <FaCalendar size={20} />
        <span>Reservations</span>
      </NavLink>

      {/* Settings */}
      <li className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer text-primary transition-all duration-300 hover:bg-primary/10">
        <IoSettings size={20} />
        <span>Settings</span>
      </li>

    </ul>

  </div>


  {/* Bottom Card */}
  <div className="mt-10">
    <div className="rounded-2xl bg-primary p-4 text-brand">

      <h3 className="font-heading text-lg font-semibold">
        Doodle Garden
      </h3>

      <p className="mt-1 font-body text-sm text-brand/70">
        Restaurant Admin Dashboard
      </p>

    </div>
  </div>

</aside>
  )
}

export default Sidebar