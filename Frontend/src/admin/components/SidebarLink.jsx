
import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLink = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
          isActive
            ? 'bg-primary text-brand shadow-md'
            : 'text-primary hover:bg-primary/10'
        }`
      }
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  )
}

export default SidebarLink