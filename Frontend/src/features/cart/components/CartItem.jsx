import React from 'react'
import { Link } from "react-router";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

const CartItem = ({cartItems,updateQuantity,handleRemove,totalItems}) => {
  return (
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
              {cartItems?.map((item) => (
                <article
                  key={item.product._id}
                  className="flex flex-col sm:flex-row gap-5 pb-6 border-b border-black/10"
                >
                  {/* Dish Image */}
                  <div className="w-full sm:w-36 h-48 sm:h-36 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <h3 className="font-heading text-xl text-primary">
                            {item.product.title}
                          </h3>

                          <p className="font-body text-xs text-gray-500 mt-1">
                            {item.product.category}
                          </p>
                        </div>

                        <p className="font-heading text-lg text-primary whitespace-nowrap">
                          ₹{item.product.price * item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <span
                          className={`w-3.5 h-3.5 border flex items-center justify-center ${
                            item.product.isVeg ? "border-green-600" : "border-red-600"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.product.isVeg ? "bg-green-600" : "bg-red-600"
                            }`}
                          />
                        </span>

                        <span className="text-xs text-gray-500 font-body">
                          {item.product.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-black/15 rounded-full">
                        <button
                        disabled={item.quantity===1}
                          onClick={() => updateQuantity({productId:item.product._id,quantity: item.quantity-1})}
                          className="p-2.5 hover:bg-black/5 rounded-full transition"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={13} />
                        </button>

                        <span className="w-8 text-center text-sm font-body">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity({productId:item.product._id,quantity: item.quantity+1})}
                          className="p-2.5 hover:bg-black/5 rounded-full transition"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.product._id)}
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
          </section>  )
}

export default CartItem