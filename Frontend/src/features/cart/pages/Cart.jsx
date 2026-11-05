
import { useState } from "react";
import { Link } from "react-router";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import React from "react";
import EmptyCart from "../components/EmptyCart";
import CartHeader from "../components/CartHeader";
const initialCart = [
  {
    _id: "1",
    title: "Classic Margherita",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500",
    category: "Pizza",
    price: 299,
    quantity: 1,
    isVeg: true,
  },
  {
    _id: "2",
    title: "Creamy Alfredo Pasta",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
    category: "Pasta",
    price: 249,
    quantity: 1,
    isVeg: true,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? {
                ...item,
                quantity:
                  type === "increase"
                    ? item.quantity + 1
                    : item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cartItems.length === 0) {
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
          <section>
            <div className="flex items-center justify-between border-b border-black/10 pb-5 mb-6">
              <h2 className="font-heading text-xl text-primary">
                Shopping Bag
              </h2>

              <span className="text-sm font-body text-gray-500">
                {totalItems} {totalItems === 1 ? "Item" : "Items"}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col sm:flex-row gap-5 pb-6 border-b border-black/10"
                >
                  {/* Dish Image */}
                  <div className="w-full sm:w-36 h-48 sm:h-36 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <h3 className="font-heading text-xl text-primary">
                            {item.title}
                          </h3>

                          <p className="font-body text-xs text-gray-500 mt-1">
                            {item.category}
                          </p>
                        </div>

                        <p className="font-heading text-lg text-primary whitespace-nowrap">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <span
                          className={`w-3.5 h-3.5 border flex items-center justify-center ${
                            item.isVeg ? "border-green-600" : "border-red-600"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? "bg-green-600" : "bg-red-600"
                            }`}
                          />
                        </span>

                        <span className="text-xs text-gray-500 font-body">
                          {item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-black/15 rounded-full">
                        <button
                          onClick={() => updateQuantity(item._id, "decrease")}
                          className="p-2.5 hover:bg-black/5 rounded-full transition"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={13} />
                        </button>

                        <span className="w-8 text-center text-sm font-body">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item._id, "increase")}
                          className="p-2.5 hover:bg-black/5 rounded-full transition"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item._id)}
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-red-600 transition font-body"
                      >
                        <FiTrash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <Link
              to="/Menu"
              className="inline-flex items-center gap-2 mt-8 text-sm font-body text-primary hover:underline"
            >
              <FiArrowLeft size={15} />
              Continue Shopping
            </Link>
          </section>

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
