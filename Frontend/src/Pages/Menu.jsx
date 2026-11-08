
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Slider } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import DishCard from "../Components/DishCard";
import DropDown from "../utils/DropDown";
import Loader from "../utils/Loader";
import { useCategories, useFilteredMenu } from "../hooks/menuHooks";
import { useCartStore } from "../features/cart/store/useCartStore";

const Menu = () => {
  const { data: categories = [] } = useCategories();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
const addToCart = useCartStore((state)=>state.addToCart)
  const [filter, setFilter] = useState({
    category: "",
    isVeg: null,
    sort: "",
    minPrice: 0,
    maxPrice: 0
  });

  const params = {};

  if (filter.category) params.category = filter.category;
  if (filter.isVeg !== null) params.isVeg = filter.isVeg;
  if (filter.sort) params.sort = filter.sort;

  if (
    filter.minPrice !== priceRange.min ||
    filter.maxPrice !== priceRange.max
  ) {
    params.minPrice = filter.minPrice;
    params.maxPrice = filter.maxPrice;
  }

  const { isLoading, isError, data } = useFilteredMenu(params);

  const menu = data?.menu ?? [];
  const range = data?.priceRange?.[0];

  useEffect(() => {
    if (!range) return;

    setPriceRange({
      min: range.minPrice,
      max: range.maxPrice
    });

    setFilter(prev => {
      if (prev.minPrice === 0 && prev.maxPrice === 0) {
        return {
          ...prev,
          minPrice: range.minPrice,
          maxPrice: range.maxPrice
        };
      }
      return prev;
    });
  }, [range?.minPrice, range?.maxPrice]);

  const filterButton = (label, value, active) => (
    <button
      onClick={() => setFilter(prev => ({ ...prev, isVeg: value }))}
      className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
        active
          ? "bg-primary text-brand"
          : "border border-primary/20 text-primary hover:bg-primary hover:text-brand"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-brand text-primary font-body mt-20">

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 py-12 md:py-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary/50 mb-5">
            Freshly prepared, thoughtfully served
          </p>

          <div className="flex items-center justify-center gap-5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl">
              The Menu
            </h1>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <p className="text-primary/55 text-sm mt-5 max-w-lg mx-auto leading-7">
            Explore our collection of carefully crafted dishes, made to
            bring a little something special to your table.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter(prev => ({ ...prev, category: "" }))}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition ${
                !filter.category
                  ? "bg-primary text-brand"
                  : "border border-primary/20 hover:bg-primary hover:text-brand"
              }`}
            >
              All dishes
            </button>

            {categories.map(category => (
              <button
                key={category}
                onClick={() =>
                  setFilter(prev => ({ ...prev, category }))
                }
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition ${
                  filter.category === category
                    ? "bg-primary text-brand"
                    : "border border-primary/20 hover:bg-primary hover:text-brand"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filter bar */}
        <div className="border-y border-primary/15 py-6 mb-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-7">

          {/* Dietary and sorting filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-primary/50 mr-1">
              Filter:
            </span>

            {filterButton("All", null, filter.isVeg === null)}
            {filterButton("Veg", true, filter.isVeg === true)}
            {filterButton("Non Veg", false, filter.isVeg === false)}

            <div className="w-[150px]">
              <DropDown
                title="Sort by"
                setState={setFilter}
                FilterKey="sort"
                className="w-full"
                array={["Popular", "Newest", "Oldest", "Price-high", "Price-low"]}
              />
            </div>
          </div>

          {/* Price range */}
          <div className="w-full xl:max-w-[350px]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-heading">
                Price range
              </h3>

              <span className="text-xs font-medium">
                ₹{filter.minPrice} — ₹{filter.maxPrice}
              </span>
            </div>

            {priceRange.max > 0 && (
              <Slider
                value={[filter.minPrice, filter.maxPrice]}
                min={priceRange.min}
                max={priceRange.max}
                step={50}
                onChange={(e, value) =>
                  setFilter(prev => ({
                    ...prev,
                    minPrice: value[0],
                    maxPrice: value[1]
                  }))
                }
                valueLabelDisplay="auto"
                sx={{
                  color: "#000",
                  height: 3,
                  "& .MuiSlider-track": {
                    border: "none",
                    height: 3
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#000",
                    opacity: 0.2,
                    height: 3
                  },
                  "& .MuiSlider-thumb": {
                    width: 14,
                    height: 14,
                    backgroundColor: "#FFFFF0",
                    border: "2px solid black",
                    "&:hover": {
                      boxShadow: "0 0 0 6px rgba(0,0,0,.08)"
                    }
                  }
                }}
              />
            )}
          </div>
        </div>

        {/* Result count */}
        {!isLoading && !isError && (
          <div className="flex justify-between items-center mb-7">
            <p className="text-xs uppercase tracking-[0.18em] text-primary/50">
              Our selection
            </p>
            <p className="text-xs text-primary/50">
              {menu.length} {menu.length === 1 ? "dish" : "dishes"}
            </p>
          </div>
        )}

        {/* Menu grid */}
        {isLoading ? (
          <div className="py-20 flex justify-center">
            <Loader  />
          </div>
        ) : isError ? (
          <div className="py-20 text-center">
            <h2 className="font-heading text-2xl">Something went wrong</h2>
            <p className="text-primary/55 mt-3 text-sm">
              We couldn't load the menu. Please try again.
            </p>
          </div>
        ) : menu.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
     <AnimatePresence mode="popLayout">
  {menu.map((i) => (
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
        rating={4}
        category={i.category}
        image={i.image}
        title={i.title}
        desc={i.desc}
        price={i.price}
        Isveg={i.isVeg}
        link={`/menu/product/${i._id}`}
        addTocart={()=>addToCart(i)}
      />
    </motion.div>
  ))}
</AnimatePresence>
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="font-[Imperial_Script] text-5xl sm:text-6xl">
              Nothing on the menu just yet
            </h2>
            <p className="text-primary/55 text-sm mt-4">
              Try changing your filters to discover more dishes.
            </p>
            <button
              onClick={() => setFilter({
                category: "",
                isVeg: null,
                sort: "",
                minPrice: priceRange.min,
                maxPrice: priceRange.max
              })}
              className="mt-7 px-6 py-3 bg-primary text-brand rounded-full text-xs uppercase tracking-wider"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom actions */}
        <div className="mt-24 pt-12 border-t border-primary/15 flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link
            to="/Booking"
            className="group flex items-center justify-center gap-3 border border-primary px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-brand transition duration-300"
          >
            Reserve a table
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/Order"
            className="group flex items-center justify-center gap-3 bg-primary text-brand px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-primary/85 transition duration-300"
          >
            Order online
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Menu;
