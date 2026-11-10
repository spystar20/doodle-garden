import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTocart, fetchCart } from "../api/cartApi";

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
 onSuccess:async(_,variables)=>{
    await queryClient.invalidateQueries({
        queryKey:['cart']
    })
 }
    })
 }