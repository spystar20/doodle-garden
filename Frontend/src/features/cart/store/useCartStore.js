import { create } from 'zustand'
import {persist} from 'zustand/middleware'
export const useCartStore = create( persist(
    (set) => ({
    cartItems: [],
    addToCart: (dish) => set((state) => {
        const existingItem = state.cartItems.find((item) => item._id === dish._id)
        if (existingItem) {
            return {
                cartItems: state.cartItems.map((item) =>
                    item._id === dish._id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        }
        return {
            cartItems: [...state.cartItems, { ...dish, quantity: 1 }]
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter((item) => item._id !== id)
    })),
    updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
            return { cartItems: state.cartItems.filter((item) => item._id !== id) }
        } else {
            return {
                cartItems: state.cartItems.map((item) =>
                    item._id === id ? { ...item, quantity } : item
                )
            }
        }
    }),
    clearCart: () => set(() => ({
        cartItems: []
    }))

}),{
    name:'doodle-cart'
}))