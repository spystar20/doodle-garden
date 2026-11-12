
import { useState } from "react";
import { Link } from "react-router";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartHeader from "../components/CartHeader";
import { useCartStore } from "../store/useCartStore";
import { useCart, useRemoveCartItem, useUpdateQuantity } from "../hooks/cartHooks";
import CartItem from '../components/CartItem'
const Cart = () => {
  const {data:cartData}=useCart()
  const {mutate:mutateUpdate}=useUpdateQuantity()
  const {mutate:removeItem} = useRemoveCartItem()
  const updateQuantity = ({productId,quantity})=>{
    mutateUpdate({productId,quantity})
  }
  const handleRemove = (productId)=>{
    removeItem({productId})
  }
  const cartItems = cartData?.existingCart?.items
  const subtotal = cartItems?.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const totalItems = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems?.length === 0) {
    return (
  <EmptyCart/>
    );
  }

  return (
    <main className="min-h-screen bg-brand px-5 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
      <CartHeader/>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16">

          {/* Cart Items */}
         <CartItem totalItems={totalItems} cartItems={cartItems} updateQuantity={updateQuantity} handleRemove={handleRemove}/>

          {/* Order Summary */}
          <aside className="h-fit bg-white/60 border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-primary mb-7">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm font-body mb-4">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-primary">₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm font-body mb-5">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="text-gray-400 text-xs">
                Calculated at checkout
              </span>
            </div>

            <div className="border-t border-black/10 pt-5 mb-7 flex justify-between items-center">
              <span className="font-heading text-lg text-primary">
                Estimated Total
              </span>

              <span className="font-heading text-2xl text-primary">
                ₹{subtotal}
              </span>
            </div>

            <Link
              to="/Checkout"
              className="block text-center bg-primary text-white py-4 rounded-full font-body text-sm tracking-wide hover:bg-black/80 transition"
            >
              Proceed to Checkout
            </Link>

            <p className="text-center text-xs text-gray-400 font-body mt-5 leading-relaxed">
              Delivery charges and final order total will be confirmed
              during checkout.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;
