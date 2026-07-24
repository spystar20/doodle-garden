import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import { IoMenu } from "react-icons/io5";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";
import { useContext } from 'react'
import { Authorized } from '../AuthContext/AuthContext'
import { FaUserCircle ,FaCalendarAlt,FaHeart,
} from "react-icons/fa";
import {FaUserPen} from 'react-icons/fa6'
import { BsBoxSeamFill } from "react-icons/bs";
import {ImExit} from 'react-icons/im'
const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
const [showOptions , setShowOptions]=useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const {user} = useContext(Authorized)
  console.log(user)
  const toggleOptions=()=>{
    setShowOptions(!showOptions)
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
 <div
  data-aos="fade-in"
  className="w-full font-body bg-brand shadow-lg md:px-4 p-2 md:py-5 fixed top-0 z-[999] capitalize"
>
  <div className="hidden lg:grid grid-cols-3 items-start justify-between lg:items-center py-6 px-4 lg:py-0 md:px-20">

    <ul className="lg:flex grid grid-cols-2 justify-between gap-5 lg:gap-10 capitalize text-base font-body md:hidden">
      <Link to="/">
        <li className="text-primary cursor-pointer hover-underline-animation left">
          home
        </li>
      </Link>

      <Link to="/Menu">
        <li className="text-primary cursor-pointer hover-underline-animation left">
          menu
        </li>
      </Link>

      <Link to="/Venue">
        <li className="text-primary cursor-pointer hover-underline-animation left">
          venue
        </li>
      </Link>

      <Link to="/Contact">
        <li className="text-primary cursor-pointer hover-underline-animation left">
          contact us
        </li>
      </Link>

      <Link to="/About">
        <li className="text-primary cursor-pointer hover-underline-animation left">
          about us
        </li>
      </Link>
    </ul>

    <div className="items-center justify-center flex">
      <img
        className="hidden md:block md:w-[12vw] lg:w-[255px]"
        src={logo}
        alt=""
      />
    </div>

    {user ? (
      <div className="flex justify-end relative">
        <div className="flex items-center gap-2">

          <span className="relative">
            <FaUserCircle
              className="text-3xl text-primary/80 cursor-pointer"
              onClick={toggleOptions}
            />

            <span
              className={`absolute top-12 -translate-x-1/2 w-64 px-4 py-5 border border-primary/10 shadow-lg rounded-lg bg-brand z-[99] duration-300 ease-in transition-all ${
                showOptions
                  ? "opacity-100 translate-y-1"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="flex flex-col text-base border-b border-primary/20 pb-3">
                <h5 className="font-medium">
                  Hello {user?.name}
                </h5>

                <span className="lowercase text-primary/70">
                  {user?.email}
                </span>
              </span>

              <ul className="text-base py-3 gap-1.5 flex flex-col border-primary/20 border-b">
                <li className="flex gap-x-1.5 items-center hover:translate-x-1 duration-200 ease-in transition-all cursor-pointer hover:font-medium">
                  <BsBoxSeamFill />
                  <span>Orders</span>
                </li>

                <li className="flex gap-x-1.5 items-center hover:translate-x-1 duration-200 ease-in transition-all cursor-pointer hover:font-medium">
                  <FaCalendarAlt />
                  <span>Reservations</span>
                </li>

                <li className="flex gap-x-1.5 items-center hover:translate-x-1 duration-200 ease-in transition-all cursor-pointer hover:font-medium">
                  <FaHeart />
                  <span>Favorites</span>
                </li>
              </ul>

              <ul className="text-base py-3 gap-1.5 flex flex-col">
                <li className="flex gap-x-1.5 items-center hover:translate-x-1 duration-200 ease-in transition-all cursor-pointer hover:font-medium">
                  <FaUserPen />
                  <span>Edit Profile</span>
                </li>

                <li className="flex gap-x-1.5 items-center hover:translate-x-1 duration-200 ease-in transition-all cursor-pointer hover:font-medium">
                  <ImExit />
                  <span>Logout</span>
                </li>
              </ul>
            </span>
          </span>

          <Link to="/Booking">
            <button className="rounded-xl border-2 border-primary shadow-2xl bg-primary text-brand py-1 px-6 hover:scale-95 scale-100 font-body text-base">
              book a table
            </button>
          </Link>

        </div>
      </div>
    ) : (
      <div className="flex items-center justify-end gap-4 text-lg">

        <div>
          <Link
            to="/login"
            className="rounded-xl border-2 shadow-2xl hover:bg-primary hover:text-brand py-2 px-10 border-primary hover:scale-75 scale-100 font-body text-base"
          >
            <button>Login</button>
          </Link>
        </div>

        <div>
          <Link to="/sign-in">
            <button className="rounded-xl border-2 shadow-2xl bg-primary text-brand py-2 px-10 hover:scale-95 scale-100 font-body text-base">
              Signup
            </button>
          </Link>
        </div>

      </div>
    )}
  </div>

  {/* navbar in mobile */}

  <div className="lg:hidden md:py-5 sticky top-0 z-50 flex flex-col items-start justify-between">
    <div className="flex justify-between items-center w-full">

      <div>
        <img
          className="block w-[150px] md:w-[15vw]"
          src={logo}
          alt=""
        />
      </div>

      <div className="flex flex-row justify-center items-center gap-2">

        <span>
          <Link to="/Booking">
            <button className="bg-primary md:py-4 md:text-2xl text-brand p-2 rounded-lg font-body text-sm">
              book a table
            </button>
          </Link>
        </span>

        <span>
          <IoMenu
            onClick={toggleMenu}
            className={`text-xl transition-all ease-in cursor-pointer md:text-6xl ${
              showMenu ? "hidden" : "block"
            }`}
          />
        </span>

        <span>
          <MdOutlineRestaurantMenu
            onClick={toggleMenu}
            className={`text-xl transition-all ease-in cursor-pointer md:text-6xl ${
              showMenu ? "block" : "hidden"
            }`}
          />
        </span>

      </div>
    </div>
  </div>

  {showMenu && (
    <div className="flex justify-center shadow-2xl items-center py-4 md:py-10 left-0 rounded-2xl w-full top-12 md:top-[10rem] z-[999] bg-primary text-brand fixed">
      <ul className="flex w-full font-medium flex-col justify-center items-center md:gap-10 gap-5 text-lg capitalize font-body">

        <Link to="/">
          <li
            onClick={toggleMenu}
            className="hover:text-primary hover:bg-brand cursor-pointer hover-underline-animation left"
          >
            home
          </li>
        </Link>

        <Link to="/Menu">
          <li
            onClick={toggleMenu}
            className="hover:text-primary hover:bg-brand cursor-pointer hover-underline-animation left"
          >
            menu
          </li>
        </Link>

        <Link to="/Venue">
          <li
            onClick={toggleMenu}
            className="cursor-pointer hover:text-primary hover:bg-brand hover-underline-animation left"
          >
            venue
          </li>
        </Link>

        <Link to="/Contact">
          <li
            onClick={toggleMenu}
            className="cursor-pointer hover:text-primary hover:bg-brand hover-underline-animation left"
          >
            contact us
          </li>
        </Link>

        <Link to="/About">
          <li
            onClick={toggleMenu}
            className="cursor-pointer hover:text-primary hover:bg-brand hover-underline-animation left"
          >
            about us
          </li>
        </Link>

      </ul>
    </div>
  )}
</div>
  )
}

export default Navbar
