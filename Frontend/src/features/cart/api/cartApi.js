import { api } from "../../../../axios/api"
import { getGuestId } from "../../../utils/guestId"

export const fetchCart = async()=>{
const guestId = getGuestId()
    const res = await api.get('/user/cart/',{params:{guestId}})
    return res.data
}
export const addTocart = async({product,quantity})=>{
    const guestId = getGuestId()
    const res = await api.post('/user/cart/add',{product,quantity},{params:{guestId}})
    return res.data
}
