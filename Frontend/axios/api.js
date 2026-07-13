import axios from "axios";
import {toast} from 'sonner'
export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,withCredentials:true
})

api.interceptors.response.use(

     (response)=>{
return response
    },
    (error)=>{
        toast.error( response?.data?.error || 'error occured')
        return Promise.reject(error)
    }

)