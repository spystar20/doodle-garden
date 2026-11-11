
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import DropDown from "../../../utils/DropDown";
import { useCategories, useFilteredMenu } from "../hooks/menuHooks";
import FilterButton from "../components/FilterButton";
import MenuHeader from "../components/MenuHeader";
import Categories from "../components/Categories";
import PriceRange from "../components/PriceRange";
import MenuGrid from "../components/MenuGrid";
import { useAddToCart } from "../../cart/hooks/cartHooks";

const Menu = () => {
  const { data: categories = [] } = useCategories();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

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
const {mutate:addToCart,isPending,variables} = useAddToCart()
const handleCart = ({ product, quantity = 1 }) => {
    addToCart({ product, quantity })
}
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

  return (
    <div className="min-h-screen bg-brand text-primary font-body mt-20">

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-16 py-12 md:py-16">

        {/* Header */}
   <MenuHeader/>
        {/* Categories */}
      <Categories categories={categories} setFilter={setFilter} filter={filter}/>
        {/* Filter bar */}
        <div className="border-y border-primary/15 py-6 mb-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-7">

          {/* Dietary and sorting filters */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-primary/50 mr-1">
              Filter:
            </span>
         <FilterButton label='All' value={null} active={filter.isVeg === null} setFilter={setFilter} />
         <FilterButton label='Veg' value={true} active={filter.isVeg === true} setFilter={setFilter} />
         <FilterButton label='Non Veg' value={false} active={filter.isVeg === false} setFilter={setFilter} />

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
       <PriceRange setFilter={setFilter} filter={filter} priceRange={priceRange}/>
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
  <MenuGrid isLoading={isLoading} isError={isError} menu={menu} setFilter={setFilter} priceRange={priceRange} addToCart={handleCart} isPending={isPending} variables={variables}/>

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
