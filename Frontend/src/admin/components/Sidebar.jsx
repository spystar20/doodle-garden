import React from 'react'
import logo from '../../assets/logo.png'
import { MdDashboard } from 'react-icons/md'
import { FaCalendar, FaUtensils } from 'react-icons/fa6'
import { HiPlusCircle } from 'react-icons/hi'
import { MdOutlineShoppingBag } from 'react-icons/md'
import SidebarLink from './SidebarLink'
import { FaUsers } from 'react-icons/fa6'
const mainLinks = [
  { to: '/admin/dashboard', icon: MdDashboard, label: 'Dashboard' },
  { to: '/admin/orders', icon: MdOutlineShoppingBag, label: 'Orders' },
  { to: '/admin/manage-menu', icon: FaUtensils, label: 'Manage Menu' },
  { to: '/admin/add-item', icon: HiPlusCircle, label: 'Add Dish' },
]

const restaurantLinks = [
  { to: '/admin/reservation', icon: FaCalendar, label: 'Reservations' },
  { to: '/admin/customers', icon: FaUsers, label: 'Customers' },
]
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
  {mainLinks.map(link => (
    <SidebarLink key={link.to} {...link} />
  ))}
</ul>


    {/* Restaurant Section */}
    <p className="mb-3 mt-8 px-3 font-heading text-xs uppercase tracking-[0.2em] text-primary/50">
      Restaurant
    </p>
<ul className="space-y-2">
  {restaurantLinks.map(link => (
    <SidebarLink key={link.to} {...link} />
  ))}
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