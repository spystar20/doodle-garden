import { api } from "../../axios/api"

   export const fetchMenuById = async(itemId)=>{
        const res = await api.get(`/user/get-menu/${itemId}`)
        return res.data
    }
    export const fetchCategories = async()=>{
        const res = await api.get('user/menu/categories')
        return res.data.categories
    }
    export const fetchFilterMenu = async(params)=>{
        const res = await api.get('user/menu',{params})
        return res.data
    }
    export const fetchMenu =async()=>{
              const res = await api.get('user/menu')
        return res.data.menu
    }
    export const editMenu = async({data,itemId})=>{
        const res = await axios.put(`http://localhost:3000/auth/menu/${itemId}/edit`,data)
        return res.data
    }