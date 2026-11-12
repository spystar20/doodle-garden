import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../api/api"
import { toast } from "sonner"
import {  useNavigate } from "react-router-dom"

export const useLogin = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate()
  return  useMutation({
      mutationFn:login,
      onSuccess  :()=>{
        queryClient.invalidateQueries({queryKey:['cart']})
        toast.success('Welcome Back')
        navigate('/')
      }
    })
}