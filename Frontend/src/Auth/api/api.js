import { api } from "../../../axios/api"
import { getGuestId } from "../../utils/guestId"

export const login = async({email,password})=>{
    const guestId = getGuestId()
    const res = await api.post('/auth/login',{email,password,guestId:guestId})
    return res.data
}