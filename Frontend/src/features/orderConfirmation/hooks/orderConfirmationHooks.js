import { useQuery } from "@tanstack/react-query"
import { api } from "../../../../axios/api"

const fetchOrderDetails = async (orderId) => {
    const res = await api.get(`/user/payment/orderDetails/${orderId}`)
    return res.data
}
export const useOrderDetails =(orderId)=>{
    return useQuery({
        queryKey:['order-details',orderId],
        queryFn:()=>fetchOrderDetails(orderId)
    })
}