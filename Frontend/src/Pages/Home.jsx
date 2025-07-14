import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MdOutlinePhonePaused } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Footer from '../Components/Footer';
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect } from 'react';
import { Link, Links } from 'react-router'
import Aos from 'aos'

const images = [{
  index: 1,
  img: "https://i.pinimg.com/736x/bd/6f/2b/bd6f2b46c588799618ef3053fbe1fe4e.jpg"
}, {
  index: 2,
  img: 'https://i.pinimg.com/736x/28/a6/1b/28a61bd7d68143c518d71de1c4570935.jpg'
},
{
  index: 3,
  img: 'https://i.pinimg.com/736x/47/dd/ed/47dded0cb3b367dd7d9b95f103c7d54a.jpg'
}, {
  index: 4,
  img: 'https://i.pinimg.com/736x/13/d0/39/13d039ee54747ced62cad64b9d53a306.jpg'
}, {
  index: 5,
  img: 'https://i.pinimg.com/736x/9d/64/fe/9d64fe0a023da6bf904e21a3127b6a84.jpg'
}
]
const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
   useEffect(()=>{
      Aos.init({duration:1500})
      },[])
  return (

    <div className='overflow-x-hidden max-w-[100vw]'>
     
      <div  className="embla  w-full " ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">   <div className="embla__slide_1"></div></div>
          <div className="embla__slide">   <div className="embla__slide_2"></div></div>
          <div className="embla__slide">   <div className="embla__slide_3"></div></div>
          <div className="embla__slide">   <div className="embla__slide_4"></div></div>
          <div className="embla__slide">   <div className="embla__slide_5"></div></div>
        </div>
      </div>

      <div  className='absolute top-[4rem]   flex justify-center opacity-35 h-[91vh]  items-center  md:top-[0.4rem] lg:top-[7.3rem] md:opacity-20 bg-white w-full md:h-[100vh]'>
        <div data-aos="fade-up" className='text-center '>
          <h2 className='font-[Imperial_Script] md:text-8xl text-6xl '>Doodle’s Garden</h2>
          <ul className='flex justify-center items-center py-7 gap-10 list-disc  text-pretty  uppercase md:text-2xl'>
            <li >drink</li>
            <li >drool</li>
            <li>dine</li>
          </ul>
          <div className='flex justify-center items-center gap-5'>
         <Link to='/Booking'><div><button className=' border-black border-2 bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>reserve a table</button></div></Link>
          <div><button className=' border-black border-2  bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>order online</button></div>
          </div>
        </div>
      </div>
       {/* INTRO */}
      <div  className='bg-black p-10  md:p-20'>
        <div data-aos="fade-down" className='text-center py-20 '>
          <h2 className='text-[rgb(255,255,240)] text-2xl uppercase font-[Outfit] font-bold'>Spend the Perfect Time with your Loved-Ones</h2>
          <p className='text-[#fffff0eb] font-thin pt-4 lg:px-24 text-base'>Welcome to Doodle’s Garden, where every meal is a family affair! Situated in the heart of our community, Doodle’s Garden is more than just a diner – it’s a gathering place for friends, families along with their pets to come together and create lasting memories over delicious food and warm hospitality.</p></div>
        <ul className='grid grid-cols-2 lg:grid-cols-4 justify-center polaroid  items-center gap-12'>
          <li data-aos="fade-up" data-aos-delay="100" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/736x/e6/eb/b9/e6ebb9412c5fd5a5f7c6def60fc346d5.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="300" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh] lg:w-[18vw] lg:h-[56vh] rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/736x/5c/16/f4/5c16f441f7405cfbcc6e1824c21a60d5.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="600" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/736x/d9/01/e4/d901e4f085ce51739c03c9198ec8b6b8.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="900" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/474x/d2/3e/5e/d23e5e0b68e5247ac7bc538e61422c61.jpg" alt='' /></li></ul>
      </div>

        {/* MENU */}
      <div className=' bg-[#FFFFF0] px-5 lg:py-10 lg:pt-4 lg:px-20'>
      <div className='flex justify-center items-center gap-3 '> <div className='w-[88vw] bg-black h-2' data-aos="fade-right"></div>  <h2 data-aos="fade-left" className='text-center font-antonio font-bold text-4xl uppercase py-6'>menu</h2> </div>
        <div className='flex justify-between items-center flex-col gap-4 py-7 lg:flex-row lg:px-24'>
          <div><img data-aos="zoom-out"  className='w-[45vw] lg:w-[25vw] rounded-full' src="https://i.pinimg.com/736x/a1/9a/ac/a19aac9048cae3f00e47324f1b691fea.jpg"  alt="" /></div>
        
          <div data-aos="zoom-out" data-aos-delay="100" className=' bg-black text-[#FFFFF0] px-7 py-6 lg:py-12 w-[85vw] lg:w-[45vw]   rounded-tl-3xl rounded-br-3xl'>
            <ul className='flex flex-col gap-4'><li className='flex justify-between  gap-10 '>
              <div><div className='font-semibold font-[Outfit] text-xl'>Mackossa Mango</div>
              <div className='text-[#fffff0dc]'>Raw mango, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-[Outfit] text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between  gap-10'>
              <div><div className='font-semibold font-[Outfit] text-xl'>Mackossa Mango</div>
              <div className='text-[#fffff0dc]'>Raw mango, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-[Outfit] text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between  gap-10'>
              <div><div className='font-semibold font-[Outfit] text-xl'>Pina Colada
              </div>
              <div className='text-[#fffff0dc]'>Pineapple and coconut with vanilla overtones</div></div>
              <div className='font-semibold font-[Outfit] text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between gap-10 '>
              <div><div className='font-semibold font-[Outfit] text-xl'>Kiwi Slider
              </div>
              <div className='text-[#fffff0dc]'>Fresh Kiwi, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-[Outfit] text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between gap-10'>
              <div><div className='font-semibold font-[Outfit] text-xl'>Irish Peach</div>
              <div className='text-[#fffff0dc]'>Peach with notes of creamy, citrus and spice</div></div>
              <div className='font-semibold font-[Outfit] text-xl'>
              ₹325</div>
              </li>
              </ul>
          </div>
        </div>
      </div>

        {/* PET-SECTION */}
<div className='bg-black py-9'>
  <div className='grid grid-cols-3 justify-center items-center '>
  <img data-aos="fade-right" className=' w-full rounded-r-full' src="https://i.pinimg.com/736x/66/2b/1e/662b1ebfa89964f71cf536675e71891c.jpg" alt="" />
  
  <h2 data-aos="zoom-in" className='text-[#FFFFF0] text-xl md:text-4xl font-bold text-center  font-[Antonio]'>A Pet-Friendly Family Diner Experience</h2>
  
  <img data-aos="fade-left" className='w-full rounded-s-full' src="https://i.pinimg.com/474x/eb/0f/20/eb0f20e41e87a24755cdb8bc9f83851d.jpg" alt="" />

  </div>




</div>

        {/* ABOUT-SECTION */}

<div className='bg-[#FFFFF0]  py-8 px-6 lg:px-20'>
  <div  >
<h2 className='text-center  font-[Antonio] font-bold text-3xl underline md:text-4xl uppercase py-6'>about us</h2>
<div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-8 lg:gap-14 items-center justify-center'>
  <div data-aos="fade-in" className='text-center flex flex-col gap-6 '>
    <h2 className='text-2xl font-medium font-[Imperial_Script] md:text-4xl'>Truly Relaxing and Authentic Environment</h2>
  <p className='text-sm  font-[Outfit] md:text-xl'>Welcome to Doodle’s Garden, where every meal is a family affair! Situated in the heart of our community, Doodle’s Garden is more than just a diner – it’s a gathering place for friends, families along with their pets to come together and create lasting memories over delicious food and warm hospitality.</p>
  <div><button data-aos="zoom-out" className=' border-black border-2 text-xl uppercase hover:bg-black hover:text-[#FFFFF0] font-[Antonio] text-black px-3 py-2 rounded-xl'>reserve a table</button></div>
  </div>
 <div className='flex justify-center items-center'> <img data-aos="fade-in" className='rounded-t-full w-[19rem]   outline-black outline-2 outline  outline-offset-8' src="https://i.pinimg.com/474x/b0/db/97/b0db97aa653821549856f7444b9d8c65.jpg" alt="" /></div>
</div>
</div>

</div>
        {/* FOOTER */}
      <Footer/>
    </div>
  )
}

export default Home