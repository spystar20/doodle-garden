
import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'

const Footer = ({ className }) => {
  return (
   <div className={className}>
  <div className="bg-primary py-10">
    <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-0">

      <div className="flex flex-col gap-5 justify-center items-center">

        <p className="text-6xl text-center font-brand text-brand">
          doodle's garden
        </p>

        <ul className="flex justify-center items-center text-brand gap-16 list-disc text-pretty uppercase md:text-base">
          <li>drink</li>
          <li>drool</li>
          <li>dine</li>
        </ul>

        <ul className="flex text-2xl gap-5 text-brand">
          <li><FaInstagram /></li>
          <li><FaFacebook /></li>
          <li><FaSquareXTwitter /></li>
        </ul>

      </div>

      <div className="flex flex-col justify-center items-center gap-5 mx-0.5">

        <div className="border-brand hidden border w-full flex-col md:flex-row md:w-3/5 pl-4 rounded-full justify-between md:flex">

          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-brand placeholder:text-brand text-lg outline-none bg-transparent"
          />

          <button className="bg-brand hover:bg-brand/90 md:px-[2.32rem] px-3 text-lg font-medium font-body py-1 rounded-full text-primary">
            subscribe now!
          </button>

        </div>

        <div className="flex flex-col md:hidden gap-3 w-full md:w-3/5">

          <input
            type="text"
            placeholder="Enter Your Email"
            className="border border-brand rounded-full px-5 py-3 bg-transparent text-brand placeholder:text-brand outline-none w-full"
          />

          <button className="bg-brand hover:bg-brand/90 px-6 py-3 rounded-full text-primary font-medium font-body transition duration-300">
            Subscribe Now!
          </button>

        </div>

        <div className="text-brand flex gap-3 justify-center items-center text-xl">
          <MdOutlinePhonePaused className="text-brand" />
          <p>798245050</p>
        </div>

        <div className="text-brand flex gap-3 justify-center items-center text-xl">
          <HiLocationMarker />
          <p>DELHI</p>
        </div>

      </div>

    </div>

    <div>
      <div className="h-[.1rem] my-8 bg-brand/80 w-full"></div>

      <p className="text-sm font-accent text-center text-brand/80">
        © {new Date().getFullYear()} created by SANTOSHI. All rights reserved.
      </p>

    </div>
  </div>
</div>
  )
}

export default Footer