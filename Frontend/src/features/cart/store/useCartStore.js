import {create} from 'zustand'
export const useCartStore = create((set)=>({
     cartItems : [],
     addToCart:(dish)=>set((state)=>{
        const existingItem = state.cartItems.find((item)=>item._id===dish._id)
        if(existingItem){
            return{
                cartItems:state.cartItems.map((item)=>
                    item._id===dish._id ?{...item,quantity:item.quantity+1}:item
                )
            }
        }
        return{
            cartItems:[...state.cartItems,{...dish,quantity:1}]
        }
     })
}))