import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTocart, fetchCart } from "../api/cartApi";
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