import { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';
import React from 'react';
import Footer from '../Components/Footer';
import { Parallax } from 'react-parallax';
import { useState } from "react";
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlinePhonePaused } from 'react-icons/md';
import { Link } from 'react-router';
import { api } from '../../axios/api';
import DishCard from '../Components/DishCard';
import {AnimatePresence, motion} from 'motion/react'
import {Slider} from '@mui/material'
const menuData = {
  salads: [
    { name: "Bistro Salad", price: "$12", description: "Candied walnuts mixed greens, goat cheese, craisins, white balsamic dressing" },
    { name: "Bookers Salad", price: "$14", description: "roasted corn, and jumbo shrimp tossed with white balsamic vinaigrette on the side" },
    { name: "Strawberry Fields Salad", price: "$12", description: "candied walnuts, and fresh strawberries with a white balsamic vinaigrette" },
    { name: "Arugula Salad", price: "$12", description: "Fresh arugula, tangy goat cheese, mandarin oranges, red onions, and cherry tomatoes" },

  ],
  burger:[
    { name: "Black Bean Veggie Burger", price: "$12", description: "Candied walnuts mixed greens, goat cheese, craisins, white balsamic dressing" },
    { name: "Turkey Burger", price: "$14", description: "roasted corn, and jumbo shrimp tossed with white balsamic vinaigrette on the side" },
    { name: "Booker’s Burger", price: "$12", description: "candied walnuts, and fresh strawberries with a white balsamic vinaigrette" },
    { name: "Salmon Burger", price: "$12", description: "Fresh arugula, tangy goat cheese, mandarin oranges, red onions, and cherry tomatoes" },
  ],
  dinner: [
    { name: "Creole Vegan Jambalaya", price: "$28", description: "Creole spiced yellow rice, black beans, sweet peppers and onions, spicy mushroom tarragon red sauce (v, gfo)" },
    { name: "Basket of Fried Shrimp", price: "$25", description: "6 pieces of breaded shrimp served with sweet and spicy Thai sauce with hand-cut fries" },
    { name: "Southern Fried Chicken Filet", price: "$28", description: "skinless, crispy hand breaded breast strips with garlic butter mashed potatoes, collard greens with smoked turkey" },
    { name: "Fish & Chips", price: "$25", description: "Golden crisp white fish and hand-cut fries with house-made tartar sauce" },
    { name: "Blackened Catfish", price: "$28", description: "Topped with sriracha aioli, collard greens with smoked turkey, garlic butter mashed potatoes" },
    { name: "Short Ribs", price: "$25", description: "8 oz of tender, boneless, braised short ribs served with a  jus on a bed of mashed potatoes and a side of sautéed haricot vert" },
  ],
  drinks: [
    { name: "Mimosa", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "Cold Brew", price: "$6", description: "Smooth, slow-steeped iced coffee" },
    { name: "Mango Cart", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "Pony Boi Lager", price: "$6", description: "Smooth, slow-steeped iced coffee" },
    { name: "Sycamore Lane", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "sprite", price: "$6", description: "Smooth, slow-steeped iced coffee" },
  ],
  sweets:[
    { name: "Chocolate Cake", price: "$10", description: "Layered fudge chocolate cake" },
    { name: "Carrot Cake", price: "$6", description: "Triple layered with cream cheese, sliced walnuts, and golden raisins" },
    { name: "Limoncello Cake", price: "$10", description: "Lemon mascarpone, layered sponge cake topped with vanilla shavings" },
    { name: "Bread Pudding", price: "$6", description: "Smooth, slow-steeped iced coffee" },
  ]
};

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("salads");
    const [menu,setMenu] = useState([])
    const [ categories,setCategories]=useState([])
    const [priceRange, setPriceRange] = useState([200, 1500]);
    const [filter,setFilter]=useState({category:'',isVeg:Boolean})

    const params = {}
    if(filter.category){
      params.category = filter.category
    }
    if(filter.isVeg=== false){
      params.isVeg= false
    }else{
params.isVeg =true
    }

    useEffect(()=>{
        Aos.init({duration:1500})
        },[])
const fetchCategories = async()=>{
    try{
const res = await api.get('user/menu/categories')
console.log(res)
setCategories(res?.data?.categories)
    }catch(err){
        console.log(err)
    }
}
        const fetchMenu = async()=>{
    try{
const res = await api.get('user/menu',{params})
setMenu(res.data.menu)
    }catch(err){
console.log(err)
    }
}
useEffect(()=>{
    fetchMenu()
    fetchCategories()
},[filter])

    return (
<div className='bg-[#fffff0] mt-20'>
             {/* <Parallax  className='w-[100%] h-[40vh] md:h-[46vh] lg:h-[100vh]' bgImageSizes='cover'  bgImage='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg' strength={300} >     
             </Parallax> */}
             
            <div className='md:py-14 py-7 px-6 md:px-20 flex flex-col gap-6'>
                <div className='flex justify-center items-center gap-5'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <h1 className='text-4xl md:text-6xl font-[Imperial_Script] text-center'>The Menu</h1>
                    <p className=' w-2 h-2 bg-black rounded-full'></p>
                </div>
                <div className="space-y-4 mb-6">

  {/* Categories */}
  <div className="flex flex-wrap justify-center gap-2">
    {categories?.map((category) => (
      <button
        key={category}
        onClick={(e) => {setSelectedCategory(category),setFilter((prev)=>({...prev,category:category}))}}
        className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
          selectedCategory === category
            ? "bg-black text-[#FFFFF0]"
            : "border border-black/20 hover:bg-black hover:text-[#FFFFF0]"
        }`}
      >
        {category.toUpperCase()}
      </button>
    ))}
  </div>

  {/* Filters */}
  <div className="flex flex-wrap items-center justify-between gap-3 border-y border-black/10 py-3">

    {/* Left */}
    <div className="flex flex-wrap gap-2">

      <button className="px-3 py-1.5 text-sm rounded-full border border-black/20 hover:bg-black hover:text-[#FFFFF0] transition">
        All
      </button>

      <button onClick={()=>(setFilter((prev)=>({...prev,isVeg:true})))} className="px-3 py-1.5 text-sm rounded-full border border-black/20 hover:bg-black hover:text-[#FFFFF0] transition">
        🌱 Veg
      </button>

      <button onClick={()=>(setFilter((prev)=>({...prev,isVeg:false})))} className="px-3 py-1.5 text-sm rounded-full border border-black/20 hover:bg-black hover:text-[#FFFFF0] transition">
        🍗 Non Veg
      </button>

      <select className="rounded-full border border-black/20 px-3 py-1.5 text-sm bg-transparent outline-none">
        <option>Rating</option>
        <option>4★ & Above</option>
        <option>4.5★ & Above</option>
      </select>

      <select className="rounded-full border border-black/20 px-3 py-1.5 text-sm bg-transparent outline-none">
        <option>Sort By</option>
        <option>Popular</option>
        <option>Newest</option>
        <option>Price ↑</option>
        <option>Price ↓</option>
      </select>
    </div>
 {/* Price Slider */}
  <div className="  min-w-[300px] max-w-[380px] flex-1">

    <div className="flex justify-between items-center mb-1">

      <h3 className="text-sm font-semibold uppercase tracking-wide">
        Price Range
      </h3>

      <span className="text-xs bg-black text-[#FFFFF0] px-3 py-1 rounded-full">
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </span>

    </div>

    <Slider
      value={priceRange}
      onChange={(e, value) => setPriceRange(value)}
      min={0}
      max={2000}
      step={50}
      valueLabelDisplay="off"
      sx={{
        color: "#000",

        height: 3,

        "& .MuiSlider-track": {
          border: "none",
          height: 3,
        },

        "& .MuiSlider-rail": {
          backgroundColor: "#000",
          opacity: 0.2,
          height: 3,
        },

        "& .MuiSlider-thumb": {
          width: 14,
          height: 14,
          backgroundColor: "#FFFFF0",
          border: "2px solid black",

          "&:hover": {
            boxShadow: "0 0 0 6px rgba(0,0,0,.08)",
          },

          "&.Mui-active": {
            boxShadow: "0 0 0 8px rgba(0,0,0,.12)",
          },
        },
      }}
    />


  </div>
  </div>

 

</div>
                <div className='grid grid-cols-4 gap-3'>
{menu?.map((i)=>(

<DishCard key={i._id} rating={4} category={i.category} image={i.image} title={i.title} desc={i.desc} price={i.price} Isveg={i.isVeg}/>
))}
                    {/* <div className='py-8'>
                        <h1 className='md:text-3xl text-2xl font-[Imperial_Script] underline text-center capitalize underline-offset-3 px-8 pb-6 md:py-3'>shisha menu</h1>
                        <div data-aos="fade-down" data-aos-delay="100" className='border border-black rounded-xl md:p-10 grid-cols-1 grid md:grid-cols-2'>
                            <ul>
                            <li  className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col  '>
                                    <div>Irish Peach</div>
                                    <div className='text-base text-[#000000e4]'>Peach with notes of creamy, citrus and spice</div>
                                    </div>
                                <div>$22.00</div>
                            </li>
                            <li  className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Pina Colada
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Pineapple and coconut with vanilla overtones</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Geisha
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Smooth notes of peach with a hint of minty “mist”</div>
                                    </div>
                                <div>$24.00</div>
                            </li>
                            </ul>
                            <ul>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Irish Peach</div>
                                    <div className='text-base text-[#000000e4]'>Peach with notes of creamy, citrus and spice</div>
                                    </div>
                                <div>$22.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Pina Colada
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Pineapple and coconut with vanilla overtones</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-[Outfit] bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Geisha
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Smooth notes of peach with a hint of minty “mist”</div>
                                    </div>
                                <div>$24.00</div>
                            </li>
                        </ul>
                        </div>
                    </div> */}
                </div>
                <div className="max-w-3xl mx-auto p-6">
      {/* Navigation Buttons */}
     

      {/* Display Selected Menu */}
      {/* <AnimatePresence mode='wait'>
      <motion.div key={selectedCategory} initial={{opacity:0,y:20,filter:'blur(10px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}}  
          transition={{ duration: 0.5 }}>
      <div className="space-y-6 border border-black md:px-10 py-14 rounded-xl">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="flex justify-between rounded-xl hover:bg-[#fff8c944] px-5  pb-2">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      </motion.div>
      </AnimatePresence> */}
      </div>
      <div className='flex justify-center items-center gap-5'>
         <Link to="/Booking"><div><button data-aos="zoom-in" data-aos-delay="100" className=' border-black border bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>reserve a table</button></div></Link>
          <Link to="/Order"><div><button data-aos="zoom-in" data-aos-delay="100" className=' border-black border  bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>order online</button></div></Link>
      </div>
      </div>
   
        </div>
    )
}

export default Menu