import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import { Parallax } from 'react-parallax'
import { useEffect } from 'react'
import Footer from '../Components/Footer'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Venu = () => {
      useEffect(()=>{
        Aos.init({duration:2000})
        },[])
  return (
    <div className='w-full bg-[#fffff0]  h-screen '>
        <Parallax bgImage='https://kendesign.vn/storage/app/media/uploaded-files/the-salt-chill-gardent-restaurant-13.png' bgImageSizes='cover' className='w-[100%] h-[34vh] md:h-[46vh] lg:h-[100vh]' strength={200}></Parallax>
        
<div className='lg:py-20 lg:px-10 px-5 py-7 grid-cols-1 grid gap-6 lg:gap-12 bg-[#fffff0] '>
<h1 data-aos="zoom-in" className='text-6xl lg:text-8xl text-black font-[Imperial_Script] text-center   '>gallery</h1>
    <div className='grid grid-cols-5 justify-center  gap-2 items-center md:flex lg:gap-8 '>
        <div data-aos="flip-up"   className='img-hover-zoom items-center'>
    <img className='w-[18vw] ' src="https://i.pinimg.com/474x/9c/67/4c/9c674c0ee480de7e58e910b3e0e66b2f.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/736x/51/52/2c/51522c72a5a8e2d28f81d9c3dd600822.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/474x/a0/97/2b/a0972b82ee45474f75a1d549e64349e1.jpg" alt="" />
    </div>
    <div data-aos="flip-up"  className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/474x/e5/16/25/e51625beb3506f22cfb5ca632bee2c4b.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/474x/de/03/11/de03114b62ba647edcd281c41a85809d.jpg" alt="" />
    </div>
    </div>
   
<div className='grid grid-cols-3 md:flex justify-center items-center md:gap-8'>
<div data-aos="flip-down" className='img-hover-zoom'>
    <img   className='w-[25vw] rounded-xl' src="https://i.pinimg.com/474x/5f/de/3e/5fde3ee3039b0105b1209491a97333a0.jpg" alt="" />
</div>
    <div data-aos="flip-down"  className='img-hover-zoom'  >
        <img className='w-[25vw] rounded-xl' src="https://i.pinimg.com/474x/e9/5a/02/e95a020b11e5fab670f38507cbdfd086.jpg" alt="" /></div>
<div data-aos="flip-down"  className='img-hover-zoom'>
    <img className='w-[25vw] rounded-xl' src="https://i.pinimg.com/474x/88/33/97/8833971a0f612b1effada71388739a1c.jpg" alt="" />
</div>
    </div>
    </div>
    <div className='bg-[#fffff0]'>
      
    <div className='grid gap-12 md:px-20 py-16 justify-center items-center '>
    <div className='grid grid-cols-3 md:grid-cols-3'>
    <div data-aos="fade-in"  className='img-hover-zoom'>       
    <img  src="https://i.pinimg.com/474x/bd/90/d5/bd90d57712ee8c4993a2b0045a781c5d.jpg"></img>
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/474x/92/69/4d/92694d260edefb5b6acf32fa15cd41f0.jpg" alt="" />
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img  src="https://i.pinimg.com/474x/e2/f5/a8/e2f5a88e84045815be7437555244c0b9.jpg" alt="" />
    </div>
    </div>
    <div className='grid grid-cols-3'>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/474x/df/49/bd/df49bd80dff5f6ff8fc524482af43a8b.jpg" alt="" />
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/736x/e7/7c/7b/e77c7b711dd01e518aa394e81fe99bcf.jpg" alt="" />
    </div>
    <div data-aos="fade-in"  className='img-hover-zoom'>
        <img    src="https://i.pinimg.com/736x/3f/7d/23/3f7d238abc424a4eaa6447a65072d775.jpg" alt="" />
    </div>
    </div>
    
    </div>
    <div className='bg-[#fffff0da] relative bottom-[19rem] md:bottom-[26rem] lg:bottom-[41.5rem] text-5xl font-[Imperial_Script] w-[100%] text-center'><h2>doodle's garden</h2></div>


    </div>
    {/* footer */}
       <Footer/>
    </div>
  )
}

export default Venu