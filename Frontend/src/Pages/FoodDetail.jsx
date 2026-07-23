import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { FaArrowLeft, FaStar, FaMinus, FaPlus } from "react-icons/fa6";
import { api } from "../../axios/api";
import Loader from '../utils/Loader'
const FoodDetail = () => {
  const { itemId } = useParams();

  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchDish = async () => {
    try {
      const res = await api.get(`/user/get-menu/${itemId}`);
      setDish(res?.data?.menu);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDish();
  }, [itemId]);

  if (loading) {
    return (
  <Loader/>
    );
  }

  // if (!dish) {
  //   return (
  //     <div className="min-h-screen bg-[#fffff0] flex flex-col items-center justify-center gap-4">
  //       <h1 className="text-3xl font-[Imperial_Script]">
  //         Dish not found
  //       </h1>

  //       <Link
  //         to="/Menu"
  //         className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
  //       >
  //         Back to Menu
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-[#fffff0] pt-24 pb-16 px-5 md:px-10 lg:px-20">

      {/* Back */}
      <Link
        to="/Menu"
        className="inline-flex items-center gap-2 mb-8 text-sm uppercase tracking-wide hover:opacity-60 transition"
      >
        <FaArrowLeft size={14} />
        Back to Menu
      </Link>


      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-2xl"
        >
          <img
            src={dish?.image}
            alt={dish?.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>


        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >

          {/* Category */}
          <p className="text-sm uppercase tracking-[0.25em] text-black/50 mb-4">
            {dish?.category}
          </p>


          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Imperial_Script] leading-tight">
            {dish?.title}
          </h1>


          {/* Rating */}
          <div className="flex items-center gap-3 mt-5">

            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" size={15} />
              <span className="font-medium">
                {dish?.rating || "4.8"}
              </span>
            </div>

            <span className="text-black/40">
              •
            </span>

            <span className="text-sm text-black/60">
              {dish?.reviews?.length || 124} Reviews
            </span>

          </div>


          {/* Price */}
          <div className="text-3xl font-semibold mt-7">
            ₹{dish?.price}
          </div>


          {/* Description */}
          <p className="text-black/60 leading-7 mt-6 max-w-xl">
            {dish?.desc}
          </p>


          {/* Veg / Non Veg */}
          <div className="mt-6">

            <div className="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-2">

              <div
                className={`w-4 h-4 border-2 flex items-center justify-center ${
                  dish?.isVeg
                    ? "border-green-600"
                    : "border-red-600"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    dish?.isVeg
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                />
              </div>

              <span className="text-sm">
                {dish?.isVeg ? "Vegetarian" : "Non Vegetarian"}
              </span>

            </div>

          </div>


          {/* Quantity */}
          <div className="mt-8">

            <p className="text-sm uppercase tracking-wider mb-3">
              Quantity
            </p>

            <div className="flex items-center border border-black rounded-full w-fit overflow-hidden">

              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaMinus size={12} />
              </button>

              <span className="w-12 text-center">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaPlus size={12} />
              </button>

            </div>

          </div>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
              className="flex-1 border border-black py-4 rounded-xl uppercase tracking-wide hover:bg-black hover:text-white transition"
            >
              Add to Cart
            </button>

            <button
              className="flex-1 bg-black text-white py-4 rounded-xl uppercase tracking-wide hover:bg-black/80 transition"
            >
              Buy Now
            </button>

          </div>

        </motion.div>

      </div>


      {/* About Dish */}
      <section className="max-w-5xl mx-auto mt-24 border-t border-black/10 pt-16">

        <h2 className="text-4xl md:text-5xl font-[Imperial_Script] mb-8">
          About this dish
        </h2>

        <p className="text-black/60 leading-8 max-w-3xl">
          {dish?.desc}
        </p>

      </section>


      {/* You May Also Like */}
      <section className="max-w-7xl mx-auto mt-24">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl md:text-5xl font-[Imperial_Script]">
            You may also like
          </h2>

          <Link
            to="/Menu"
            className="text-sm uppercase underline underline-offset-4"
          >
            View Menu
          </Link>

        </div>


        {/* Later put related DishCards here */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* 
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
          */}

        </div>

      </section>

    </div>
  );
};

export default FoodDetail;