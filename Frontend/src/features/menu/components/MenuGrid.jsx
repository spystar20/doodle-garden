import { AnimatePresence, motion } from "motion/react";
import React from "react";

import DishCard from '../../../Components/DishCard'
import FunctionLoader from "../../../utils/FunctionLoader";
import { useCart } from "../../cart/hooks/cartHooks";
const MenuGrid = ({ isLoading, isError, menu, setFilter, priceRange, addToCart, isPending, variables }) => {
    const { data } = useCart()
    return (
        <div>
            {isLoading ? (
                <div className="py-20 flex justify-center">
                    <FunctionLoader />
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
                        {menu.map((i) => {
                            const isAdded = data?.existingCart?.items?.find(
                                item => item?.product?.toString() === i._id
                            ) ?? false;
const isAdding = isPending && variables.product === i._id
                            return (<motion.div
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
                                    
                                    isPending={isAdding}
                                    rating={4}
                                    category={i.category}
                                    image={i.image}
                                    title={i.title}
                                    desc={i.desc}
                                    price={i.price}
                                    Isveg={i.isVeg}
                                    isAdded={isAdded}
                                    link={`/menu/product/${i._id}`}
                                    addTocart={() => addToCart({
                                        product: i._id, quantity: 1
                                    })}
                                />
                            </motion.div>
                            )
                        })}
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
        </div>
    )
}

export default MenuGrid