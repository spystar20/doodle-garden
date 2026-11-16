import { useMutation } from "@tanstack/react-query"
import { createOrder, verifyPayment } from "../api/checkoutApi"
export const usePlaceOrder = ()=>{
    return useMutation({
        mutationFn:createOrder,
    })
}
export const useVerifyPayment = () => {
    return useMutation({
        mutationFn: verifyPayment
    })
}