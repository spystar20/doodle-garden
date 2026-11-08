
import React, { useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import Loader from "../../../utils/Loader";
import { useMenuById } from "../../../hooks/menuHooks";
import ProductImage from "../components/ProductImage";
import ProductInformation from "../components/ProductInformation";
import ProductAbout from "../components/ProductAbout";
import RelatedProduct from "../components/RelatedProduct";
import { useCartStore } from "../../cart/store/useCartStore";

const FoodDetail = () => {
  const { itemId } = useParams();
  const addTocart = useCartStore((state)=>state.addToCart)
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
     <ProductInformation desc={product.desc} title={product.title} price={product.price} reviews={product?.reviews?.length} setQuantity={setQuantity} addToCart={()=>addTocart(product,quantity)} isVeg={product.isVeg} rating={product.rating} quantity={quantity}/>
      </div>

      {/* About section */}
    <ProductAbout product={product}/>

      {/* Related dishes */}
     <RelatedProduct/>
    </div>
  );
};

export default FoodDetail;
