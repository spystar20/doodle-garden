
import React, { useState, useEffect, useContext } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoMenu } from 'react-icons/io5'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Authorized } from '../AuthContext/AuthContext'
import {
  FaUserCircle,
  FaCalendarAlt,
  FaHeart,
  FaShoppingCart
} from 'react-icons/fa'
import { FaUserPen } from 'react-icons/fa6'
import { BsBoxSeamFill } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'
import { useCart } from '../features/cart/hooks/cartHooks'

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { user } = useContext(Authorized)
const {data:cartData}=useCart()
const cartCount = cartData?.existingCart?.items?.reduce((total,item)=>total+item.quantity,0)??0

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const toggleOptions = () => setShowOptions(!showOptions)
  const toggleMenu = () => setShowMenu(!showMenu)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/Menu' },
    { name: 'Venue', path: '/Venue' },
    { name: 'Contact Us', path: '/Contact' },
    { name: 'About Us', path: '/About' }
  ]

  return (
    <header
      data-aos="fade-in"
      className="sticky left-0 top-0 z-[999] w-full bg-brand/95 backdrop-blur-md shadow-md border-b border-primary/10 font-body "
    >
      {/* Desktop Navbar */}
      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 xl:px-16 py-4">

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-5 xl:gap-8 text-sm xl:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="relative text-primary/80 hover:text-primary transition-colors duration-300 hover-underline-animation left"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logo */}
        <Link to="/" className="flex justify-center">
          <img
            src={logo}
            alt="Doodle's Garden"
            className="w-[210px] xl:w-[245px] object-contain"
          />
        </Link>

        {/* Actions */}
        <div className="flex items-center justify-end gap-5">
<Link
  to="/cart"
  aria-label={`Shopping cart, ${cartCount} items`}
  className="relative flex items-center justify-center text-primary hover:scale-110 transition-transform duration-200"
>
  <FaShoppingCart className="text-2xl" />

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-brand">
      {cartCount}
    </span>
  )}
</Link>
          {user ? (
            <div className="relative flex items-center gap-4">

              <button
                type="button"
                onClick={toggleOptions}
                aria-label="Open profile menu"
                className="text-primary/80 hover:text-primary transition-colors"
              >
                <FaUserCircle className="text-3xl" />
              </button>

              {showOptions && (
                <div className="absolute right-0 top-12 w-64 rounded-xl border border-primary/10 bg-brand p-4 shadow-xl animate-in fade-in slide-in-from-top-2">

                  <div className="border-b border-primary/15 pb-3">
                    <h5 className="font-semibold text-primary">
                      Hello {user?.name}
                    </h5>
                    <p className="text-sm text-primary/60 lowercase break-all">
                      {user?.email}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-1 border-b border-primary/15 py-3 text-sm">
                    <li className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-primary/5 cursor-pointer transition">
                      <BsBoxSeamFill />
                      Orders
                    </li>
                    <li className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-primary/5 cursor-pointer transition">
                      <FaCalendarAlt />
                      Reservations
                    </li>
                    <li className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-primary/5 cursor-pointer transition">
                      <FaHeart />
                      Favorites
                    </li>
                  </ul>

                  <ul className="flex flex-col gap-1 pt-3 text-sm">
                    <li className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-primary/5 cursor-pointer transition">
                      <FaUserPen />
                      Edit Profile
                    </li>
                    <li className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-primary/5 cursor-pointer transition">
                      <ImExit />
                      Logout
                    </li>
                  </ul>
                </div>
              )}

              <Link
                to="/Booking"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-brand shadow-md hover:bg-primary/85 hover:-translate-y-0.5 transition-all duration-200"
              >
                Book a Table
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="rounded-lg border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-brand transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/sign-in"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-brand shadow-md hover:bg-primary/85 hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 md:px-8 md:py-4">

        <Link to="/" onClick={() => setShowMenu(false)}>
          <img
            src={logo}
            alt="Doodle's Garden"
            className="w-[135px] md:w-[190px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
<Link
  to="/cart"
  aria-label={`Shopping cart, ${cartCount} items`}
  className="relative text-primary text-xl md:text-2xl hover:scale-110 transition-transform"
>
  <FaShoppingCart />

  {cartCount > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-brand">
      {cartCount}
    </span>
  )}
</Link>
          <Link
            to="/Booking"
            className="rounded-lg bg-primary px-3 py-2 md:px-5 md:py-3 text-xs md:text-base font-medium text-brand shadow-md hover:bg-primary/85 transition"
          >
            Book a Table
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={showMenu ? 'Close menu' : 'Open menu'}
            className="text-primary text-2xl md:text-4xl"
          >
            {showMenu ? <MdOutlineRestaurantMenu /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full overflow-hidden bg-primary text-brand shadow-xl transition-all duration-300 ease-in-out ${
          showMenu
            ? 'max-h-[600px] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="px-6 py-6 md:py-8">
          <ul className="flex flex-col items-center gap-5 md:gap-7 text-base md:text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className="hover:text-brand/60 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-brand/20 pt-5">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm text-brand/70">
                  Hello, {user?.name}
                </span>
                <span className="text-sm">My Account</span>
                <span className="text-sm">Orders</span>
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="rounded-lg border border-brand px-6 py-2 hover:bg-brand hover:text-primary transition"
                >
                  Login
                </Link>
                <Link
                  to="/sign-in"
                  onClick={toggleMenu}
                  className="rounded-lg bg-brand px-6 py-2 text-primary hover:bg-brand/80 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
