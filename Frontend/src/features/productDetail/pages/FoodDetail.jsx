
import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { FaArrowLeft, FaStar, FaMinus, FaPlus } from "react-icons/fa6";
import Loader from "../../../utils/Loader";
import { useMenuById } from "../../../hooks/menuHooks";
import ProductImage from "../components/ProductImage";
import ProductInformation from "../components/ProductInformation";

const FoodDetail = () => {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { isLoading, isError, data: product } = useMenuById(itemId);

  if (isLoading) return <Loader />;

  if (isError || !product) {
    return (
      <div className="min-h-screen bg-brand flex flex-col items-center justify-center px-5 text-center font-body">
        <p className="font-heading text-2xl text-primary">Dish not found</p>
        <p className="text-primary/60 mt-2">Sorry, we couldn't find this dish.</p>
        <Link to="/Menu" className="mt-6 border border-primary px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-primary hover:text-brand transition">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand text-primary font-body pt-28 pb-20 px-5 md:px-10 lg:px-20">

      {/* Back navigation */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          to="/Menu"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to menu
        </Link>
      </div>

      {/* Main dish section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Dish image */}
      <ProductImage image={product.image} title={product.title} category={product.title}/>

        {/* Dish information */}
     <ProductInformation desc={product.desc} title={product.title} price={product.price} reviews={product?.reviews?.length} setQuantity={setQuantity} isVeg={product.isVeg} rating={product.rating} quantity={quantity}/>
      </div>

      {/* About section */}
      <section className="max-w-7xl mx-auto mt-28 pt-16 border-t border-primary/15">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/45 mb-4">
          Made with care
        </p>
        <h2 className="font-[Imperial_Script] text-5xl sm:text-6xl mb-7">
          A little more about the dish
        </h2>
        <p className="max-w-3xl text-primary/65 leading-8 text-[15px]">
          {product.desc}
        </p>
      </section>

      {/* Related dishes */}
      <section className="max-w-7xl mx-auto mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary/45 mb-3">
              Explore more
            </p>
            <h2 className="font-[Imperial_Script] text-5xl sm:text-6xl">
              You may also like
            </h2>
          </div>

          <Link
            to="/Menu"
            className="text-xs uppercase tracking-[0.18em] border-b border-primary pb-2 w-fit hover:opacity-50 transition"
          >
            View full menu
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Related DishCards can go here */}
        </div>
      </section>
    </div>
  );
};

export default FoodDetail;
