import { api } from "../../axios/api"

export const fetchMenuById = async (itemId) => {
    const res = await api.get(`/user/menu/get/${itemId}`)
    return res.data
}
export const fetchCategories = async () => {
    const res = await api.get('/user/menu/categories')
    return res.data.categories
}
export const fetchFilterMenu = async (params) => {
    const res = await api.get('/user/menu/', { params })
    return res.data
}
