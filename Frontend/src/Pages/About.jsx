import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import Footer from '../Components/Footer'
import Aos from 'aos'
import { useEffect } from 'react'
import  'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
    },[])
  return (
    <div>
        <div  className='grid grid-cols-1  lg:grid-cols-2 md:py-48  justify-center  bg-black gap-10 py-20  p-10 '>
            <div className='text-white text-center flex flex-col gap-4 '>
                <h2 className='text-6xl underline underline-offset-8 capitalize py-6 font-imperial'>our chef</h2>
                <p className='text-sm font-[Outfit] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sapiente praesentium eius laboriosam totam? Voluptatum quod in dolor praesentium quia optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta. Voluptate nihil aliquid perspiciatis similique accusantium animi iure minus officiis tempore ullam dolor suscipit nobis odit minima, saepe, deleniti hic eveniet mollitia nam assumenda illo, debitis est. Minus ut deleniti ducimus porro dolor. Vel, eius! placeat fugit exercitationem tenetur labore soluta ullam qui, nobis ab. Veniam, dolore ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis error accusamus excepturi culpa beatae suscipit, quis incidunt nesciunt numquam tempora saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, assumenda! Eius, similique! ad..</p>
            </div>
            <div  className='flex justify-center items-center'>
            <div data-aos="fade-in" className='bg-[#fffff0] p-3 rounded-md'>
                <img  className='w-[20rem]' src="https://i.pinimg.com/474x/39/f5/87/39f587dcf9b1cd667039fd1d738452c3.jpg" alt="" />
            </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center  bg-[#fffff0] gap-10  py-20 px-14 '>
        <div className='flex justify-center items-center'>
            <div data-aos="fade-in" className='bg-black p-3 rounded-md'>
                <img className='w-[20rem]' src="https://i.pinimg.com/474x/57/8b/4e/578b4e5f5c49cb7c91de06349721ba82.jpg" alt="" />
            </div>
            </div>
            <div className='text-black text-center flex flex-col gap-4 '>
                <h2 className='text-6xl underline underline-offset-8 capitalize py-6 font-imperial'>our restaurant</h2>
                <p className='text-sm font-[Outfit] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sapiente praesentium eius laboriosam totam? Voluptatum quod in dolor praesentium quia optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta. Voluptate nihil aliquid perspiciatis similique accusantium animi iure minus officiis tempore ullam dolor suscipit nobis odit minima, saepe, deleniti hic eveniet mollitia nam assumenda illo, debitis est. Minus ut deleniti ducimus porro dolor. Vel, eius! placeat fugit exercitationem tenetur labore soluta ullam qui, nobis ab. Veniam, dolore ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis error accusamus excepturi culpa beatae suscipit, quis incidunt nesciunt numquam tempora saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, assumenda! Eius, similique! ad..</p>
            </div>
           
        </div>
         {/* footer */}
  <Footer/>
    </div>
  )
}

export default About