import { api } from "../../axios/api"

   export const fetchMenu = async(itemId)=>{
        const res = await api.get(`/user/get-menu/${itemId}`)
        return res.data
    }