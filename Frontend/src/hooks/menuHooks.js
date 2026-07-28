import {  useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchFilterMenu, fetchMenu, fetchMenuById } from "../api/menuApi";

export const useMenuById = (itemId)=>{
    return useQuery({
        queryKey:['menu',itemId],
        queryFn:(itemId)=>fetchMenuById(),
        enabled:!!itemId
    })
}
export const useCategories = ()=> useQuery({
queryKey:['categories'],
queryFn:()=>fetchCategories()
})
export const usefilteredMenu=(filter)=>useQuery({
    queryKey:['dish',filter],
    queryFn:()=>fetchFilterMenu(filter),
})
export const useMenu = ()=>useQuery({
         queryKey:['menu'],
        queryFn:(itemId)=>fetchMenu()
})