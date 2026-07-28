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
import { AnimatePresence, motion } from 'motion/react'
import { Slider } from '@mui/material'
import DropDown from '../utils/DropDown';
import { useCategories, usefilteredMenu } from '../hooks/menuHooks';
const menuData = {
  salads: [
    { name: "Bistro Salad", price: "$12", description: "Candied walnuts mixed greens, goat cheese, craisins, white balsamic dressing" },
    { name: "Bookers Salad", price: "$14", description: "roasted corn, and jumbo shrimp tossed with white balsamic vinaigrette on the side" },
    { name: "Strawberry Fields Salad", price: "$12", description: "candied walnuts, and fresh strawberries with a white balsamic vinaigrette" },
    { name: "Arugula Salad", price: "$12", description: "Fresh arugula, tangy goat cheese, mandarin oranges, red onions, and cherry tomatoes" },

  ],
  burger: [
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
  sweets: [
    { name: "Chocolate Cake", price: "$10", description: "Layered fudge chocolate cake" },
    { name: "Carrot Cake", price: "$6", description: "Triple layered with cream cheese, sliced walnuts, and golden raisins" },
    { name: "Limoncello Cake", price: "$10", description: "Lemon mascarpone, layered sponge cake topped with vanilla shavings" },
    { name: "Bread Pudding", price: "$6", description: "Smooth, slow-steeped iced coffee" },
  ]
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("salads");
  const { data: categories } = useCategories()
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 })

  const [filter, setFilter] = useState({ category: '', isVeg: null, sort: '', minPrice: 0, maxPrice: 0 })

  const params = {}
  if (filter.category) {
    params.category = filter.category
  }
  if (filter.isVeg !== null) {
    params.isVeg = filter.isVeg;
  }
  if (filter.sort) {
    params.sort = filter.sort
  }
  if (
    filter.minPrice !== priceRange.min ||
    filter.maxPrice !== priceRange.max
  ) {
    params.minPrice = filter.minPrice;
    params.maxPrice = filter.maxPrice;
  }

  const { isLoading, isError, data } = usefilteredMenu(params)
useEffect(() => {
  const range = data?.priceRange?.[0]

  if (!range) return

  setPriceRange({
    min: range.minPrice,
    max: range.maxPrice,
  })

  setFilter((prev) => {
    if (prev.minPrice === 0 && prev.maxPrice === 0) {
      return {
        ...prev,
        minPrice: range.minPrice,
        maxPrice: range.maxPrice,
      }
    }

    return prev
  })
}, [data])

  return (
    <div className="bg-brand mt-20">

      <div className="md:py-14 py-7 px-6 md:px-20 flex flex-col gap-6">

        <div className="flex justify-center items-center gap-5">
          <p className="w-2 h-2 bg-primary rounded-full"></p>

          <h1 className="text-4xl md:text-6xl font-brand text-center">
            The Menu
          </h1>

          <p className="w-2 h-2 bg-primary rounded-full"></p>
        </div>

        <div className="space-y-4 mb-6">

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories?.map((category) => (
              <button
                key={category}
                onClick={(e) => {
                  setSelectedCategory(category),
                    setFilter((prev) => ({
                      ...prev,
                      category: category
                    }))
                }}
                className={`px-4 py-1.5 text-sm font-body rounded-full transition-all duration-300 ${selectedCategory === category
                    ? "bg-primary text-brand"
                    : "border border-primary/20 hover:bg-primary hover:text-brand"
                  }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-y border-primary/10 py-3">

            {/* Left */}
            <div className="flex flex-wrap gap-2">

              <button
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    isVeg: null
                  }))
                }
                className="px-3 py-1.5 text-sm font-body rounded-full border border-primary/20 hover:bg-primary hover:text-brand transition"
              >
                All
              </button>

              <button
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    isVeg: true
                  }))
                }
                className="px-3 py-1.5 text-sm font-body rounded-full border border-primary/20 hover:bg-primary hover:text-brand transition flex gap-2 items-center"
              >
                <div className="flex h-4 w-4 items-center justify-center border border-green-600">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>

                Veg
              </button>

              <button
                onClick={() =>
                  setFilter((prev) => ({
                    ...prev,
                    isVeg: false
                  }))
                }
                className="px-3 py-1.5 text-sm font-body rounded-full border border-primary/20 hover:bg-primary hover:text-brand transition flex gap-2 items-center"
              >
                <div className="flex h-4 w-4 items-center justify-center border border-red-600">
                  <div className="h-2 w-2 rounded-full bg-red-600"></div>
                </div>

                Non Veg
              </button>

              <DropDown
                title="sort by"
                setState={setFilter}
                FilterKey="sort"
                className="w-[120px]"
                array={["Popular", "Newest", "Oldest", "Price-high", "Price-low"]}
              />

              <DropDown
                title="Rating"
                className="w-[120px]"
                array={["4★ & Above", "4.5★ & Above"]}
              />

            </div>

            {/* Price Slider */}
            <div className="min-w-[300px] max-w-[380px] flex-1">

              <div className="flex justify-between items-center mb-1">

                <h3 className="text-sm font-display font-semibold uppercase tracking-wide">
                  Price Range
                </h3>

                <span className="text-xs font-body bg-primary text-brand px-3 py-1 rounded-full">
                  ₹{filter.minPrice} - ₹{filter.maxPrice}
                </span>

              </div>

              {priceRange.max > 0 && (
                <Slider
                  value={[filter.minPrice, filter.maxPrice]}
                  min={priceRange.min}
                  max={priceRange.max}
                  step={50}
                  onChange={(e, value) => {
                    setFilter((prev) => ({
                      ...prev,
                      minPrice: value[0],
                      maxPrice: value[1],
                    }));
                  }}
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
              )}

            </div>
          </div>

        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-4 gap-3">

          <AnimatePresence mode="popLayout">

            {data?.menu?.map((i) => (

              <motion.div
                key={i._id}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)"
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.5
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }}
              >
                <DishCard
                  key={i._id}
                  rating={4}
                  category={i.category}
                  image={i.image}
                  title={i.title}
                  desc={i.desc}
                  price={i.price}
                  Isveg={i.isVeg}
                  link={`/menu/product/${i._id}`}
                />
              </motion.div>

            ))}

          </AnimatePresence>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center items-center gap-5">

          <Link to="/Booking">
            <div>
              <button
                data-aos="zoom-in"
                data-aos-delay="100"
                className="border-primary border bg-transparent hover:bg-primary hover:text-brand text-xl uppercase font-display text-primary px-3 py-2 rounded-xl"
              >
                reserve a table
              </button>
            </div>
          </Link>

          <Link to="/Order">
            <div>
              <button
                data-aos="zoom-in"
                data-aos-delay="100"
                className="border-primary border bg-transparent hover:bg-primary hover:text-brand text-xl uppercase font-display text-primary px-3 py-2 rounded-xl"
              >
                order online
              </button>
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Menu