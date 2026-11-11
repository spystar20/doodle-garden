import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTocart, fetchCart, removeCartItem, updateQuantity } from "../api/cartApi";
import { toast } from "sonner";
 export const useCart = (guestId)=>{
    return useQuery({
    queryKey:['cart',guestId],
        queryFn: () => fetchCart(guestId)
    })
 }

 export const useAddToCart = ()=>{
    const queryClient = useQueryClient()
        return useMutation({
 mutationFn:addTocart,
 onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
            toast.success('Added to your cart')
        
 }
    })
 }
 export const useUpdateQuantity = ()=>{
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn:updateQuantity,
      onSuccess:()=>{
         queryClient.invalidateQueries({queryKey:['cart']})
         toast.success('Quantity Updated')
      }
   })
 }
 export const useRemoveCartItem = ()=>{
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn:removeCartItem,
       onSuccess:()=>{
         queryClient.invalidateQueries({queryKey:['cart']})
         toast.success('item removed from cart ')
      }
   })
 }