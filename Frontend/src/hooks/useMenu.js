import {  useQuery } from "@tanstack/react-query";
import { fetchMenu } from "../api/menuApi";

const useMenu = (itemId)=>{
    return useQuery({
        queryKey:['menu',itemId],
        queryFn:(itemId)=>fetchMenu(),
        enabled:!!itemId
    })
}
export default useMenu