import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import { IoMenu } from "react-icons/io5";
import { MdMenu, MdOutlineRestaurantMenu } from "react-icons/md";
const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div data-aos="fade-in" className='w-full bg-[#FFFFF0] shadow-lg md:px-4 p-2 md:py-5 fixed top-0  z-[999] capitalize '>

      <div className=' hidden lg:grid grid-cols-3  items-start justify-between lg:items-center py-6 px-4 lg:py-0 md:px-20 '>
        <ul className='lg:flex grid grid-cols-2 justify-between gap-5 lg:gap-10 capitalize text-base  font-[Outfit] md:hidden'>
          <Link to="/"><li className='text-black cursor-pointer hover-underline-animation   left'>home</li></Link>
          <Link to="/Menu"><li className='text-black cursor-pointer hover-underline-animation left'>menu</li></Link>
          <Link to="/Venue"><li className='cursor-pointer hover-underline-animation left'>venue</li></Link>
          <Link to="/Contact"><li className='cursor-pointer hover-underline-animation left '>contact us</li></Link>
          <Link to="/About"><li className='cursor-pointer hover-underline-animation left'>about us</li></Link>
        </ul>
        <div className='items-center justify-center flex'><img className='hidden md:block md:w-[12vw] lg:w-[255px] ' src={logo} alt="" /></div>
        {/* <div> <Link to="/Booking"><button className='button-1 rounded-2xl font-[Outfit] text-base'>book a table</button></Link></div> */}
        
        <div className='flex items-center justify-end gap-4 text-lg'>
          <div><Link to='/login' className='rounded-xl border-2 shadow-2xl hover:bg-black hover:text-white py-2 px-10  border-black hover:scale-75 scale-100 font-[Outfit] text-base' ><button>Login</button></Link></div>
          <div>
            <Link to='/sign'><button className='rounded-xl border-2 shadow-2xl bg-black text-white py-2 px-10 hover:scale-95 scale-100 font-[Outfit] text-base'>Signup</button></Link></div></div>
      </div>
      
      {/* navbar in mobile */}

      <div className=' lg:hidden md:py-5 sticky top-0 z-50 flex flex-col items-start justify-between  '>
        <div className='flex  justify-between items-center w-full'>
          <div><img className=' block w-[150px] md:w-[15vw] ' src={logo} alt="" /></div>
          <div className='flex flex-row justify-center items-center gap-2'> <span><Link to="/Booking"><button className='bg-black md:py-4  md:text-2xl   text-[#fffff0] p-2 rounded-lg font-[Outfit] text-sm'>book a table</button></Link></span><span><IoMenu onClick={toggleMenu} className={`text-xl transition-all ease-in cursor-pointer md:text-6xl ${showMenu ? 'hidden' : 'block'}`} /></span><span><MdOutlineRestaurantMenu onClick={toggleMenu} className={`text-xl transition-all ease-in  cursor-pointer md:text-6xl ${showMenu ? 'block' : 'hidden'}`} /></span></div>
        </div>
      </div>
      {showMenu && (
        <div className={`flex justify-center  shadow-2xl items-center py-4 md:py-10 left-0  rounded-2xl w-full top-12 md:top-[10rem] z-[999] bg-black text-[#fffff0] fixed `}>
          <ul className=' flex w-full font-medium flex-col justify-center items-center md:gap-10 gap-5 text-lg  capitalize  font-[Outfit] '>
            <Link to="/"><li onClick={toggleMenu} className=' hover:text-black hover:bg-[#fffff0] cursor-pointer hover-underline-animation   left'>home</li></Link>
            <Link to="/Menu"><li onClick={toggleMenu} className=' hover:text-black hover:bg-[#fffff0] cursor-pointer hover-underline-animation left'>menu</li></Link>
            <Link to="/Venue"><li onClick={toggleMenu} className='cursor-pointer  hover:text-black hover:bg-[#fffff0]  hover-underline-animation left'>venue</li></Link>
            <Link to="/Contact"><li onClick={toggleMenu} className='cursor-pointer  hover:text-black hover:bg-[#fffff0]  hover-underline-animation left '>contact us</li></Link>
            <Link to="/About"><li onClick={toggleMenu} className='cursor-pointer  hover:text-black hover:bg-[#fffff0]  hover-underline-animation left'>about us</li></Link>
          </ul>

        </div>
      )}
    </div>
  )
}

export default Navbar
