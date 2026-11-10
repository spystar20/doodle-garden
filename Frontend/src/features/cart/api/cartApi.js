import { api } from "../../../../axios/api"
import { getGuestId } from "../../../utils/guestId"
export const fetchCart = async()=>{
const guestId = getGuestId()
    const res = await api.get('/user/cart/',{params:guestId?{guestId}:{}})
    return res.data
}
export const addTocart = async({product,quantity,guestId})=>{
    const guestId = getGuestId()
    const res = await api.post('/user/cart/add',{product,quantity},{params:guestId?{guestId}:{}})
    return res.data
}
