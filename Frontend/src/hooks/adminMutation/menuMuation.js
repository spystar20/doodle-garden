import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../../axios/api"


export const useAddDish = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({formData,isVeg,image})=>{
                const form = new FormData()
    form.append('title',formData.title)
    form.append('desc',formData.desc)
    form.append('price',Number(formData.price))
    form.append('category',formData.category)
    form.append('isVeg',isVeg)
    form.append('image',image)
const res = await api.post('/admin/create-menu',form)
return res.data
        },
        onSuccess:async(_,variables)=>{
        await queryClient.invalidateQueries({
            queryKey:['menu']
        })
        }
    })
}
export const useEditDish = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:async({isVeg,image,itemId,formData})=>{
    const form = new FormData()
    form.append('title',formData.title)
    form.append('desc',formData.desc)
    form.append('price',Number(formData.price))
    form.append('category',formData.category)
    form.append('isVeg',isVeg)
    form.append('image',image)
const res = await axios.put(`http://localhost:3000/auth/menu/${itemId}/edit`,form)
return res.data
        },
        onSuccess:async(_,variables)=>{
  await queryClient.invalidateQueries({
    queryKey:['menu',variables.itemId]
  })
        }
    })
}
export const useDeleteDish = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
mutationFn:async({itemId})=>{
    const res = await api.delete(`admin/menu/${itemId}/delete`) 
}   ,
onSuccess:async(_,variables)=>{
await Promise.all([
     queryClient.invalidateQueries({
    queryKey:['menu',variables.itemId]
  }),
   await queryClient.invalidateQueries({
            queryKey:['menu']
        })
])
}     
    })
}