import React, { useEffect, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';
import Select from 'react-select'
import { api } from '../../axios/api';
import axios from 'axios';
import { toast } from 'sonner';
import { ImCross } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';

const EditMenu = () => {
      const [open,setOpen]= useState(false)
  const [category, setCategory] = useState(null);
  const [preview,setPreview]= useState('')
  const [image,setImage] = useState('')
  const {itemId} = useParams()
  const navigate = useNavigate()
   const categoryOptions = [
  { value: "appetizer", label: "Appetizer" },
  { value: "salad", label: "Salad" },
  { value: "soup", label: "Soup" },
  { value: "pizza", label: "Pizza" },
  { value: "pasta", label: "Pasta" },
  { value: "burger", label: "Burger" },
  { value: "main-course", label: "Main Course" },
  { value: "rice-bowls", label: "Rice Bowls" },
  { value: "dessert", label: "Dessert" },
  { value: "beverages", label: "Beverages" },
]
const [formData ,setFormData] = useState({title:'',desc:'',price:'',category:''})
const [isVeg,setIsveg] = useState(null)
const handleMenu = async()=>{
  try{
    const form = new FormData()
    form.append('title',formData.title)
    form.append('desc',formData.desc)
    form.append('price',Number(formData.price))
    form.append('category',formData.category)
    form.append('isVeg',isVeg)
    form.append('image',image)
const res = await axios.put(`http://localhost:3000/auth/menu/${itemId}/edit`,form,{withCredentials:true})
console.log(res)
toast.success('Dish updated')
setFormData({title:'',desc:'',price:'',category:''})
setIsveg(null)
setPreview('')
setCategory('')
setTimeout(() => {
  navigate('/admin/manage-menu')
}, 1500);
  }catch(err){

  }
}
const handleImage = (e)=>{
const file = e.target.files[0]
if(!file) return
const allowedTypes= [ "image/jpeg",
  "image/png",
  "image/webp"]
  if(!allowedTypes.includes(file.type)){
    return console.log('invalid file type')
  }
  if(file.size > 2*1024*1024){
    return console.log('limit exceeds')
  }
setImage(file)
setPreview(URL.createObjectURL(file))
    }
    const fetchMenu = async()=>{
           try{
        const res = await api.get(`/user/get-menu/${itemId}`)
        const selectedCategory = categoryOptions.find( item=> item.value === res?.data.category )
        setCategory(selectedCategory)
        console.log(res)
        setFormData(res?.data)
        setPreview(res?.data.image)
        setIsveg(res?.data.isVeg)
            }catch(err){
        console.log(err)
            }
    }
    useEffect(()=>{
        fetchMenu()
    },[])
  return (
  <div className='text-biege px-12 py-5 w-full font-[Outfit]'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-4xl font-semibold font-[Outfit]'>Edit 
</h2>
<p className='text-sm font-medium'>Create and publish a new menu item for Doodle Garden.</p>
    </div>
    <div className='flex flex-col gap-5 py-6'>
    <h5 className='text-xl font-medium'>Dish Information</h5>
    <div className='grid grid-cols-2 gap-5 bg-biege max-w-9/12 rounded-2xl p-5'>
    <form className='  flex flex-col gap-2  text-black/80' action="">
      <div className='border-2 border-black/40  hover:border-black rounded-lg p-1.5 pl-5'>
        <input value={formData.title} onChange={(e)=>setFormData(prev=>({...prev,title:e.target.value}))} className='border-none outline-none w-full placeholder:text-black/70' placeholder='Enter Your Dish Name' type="text" />
      </div>
       <div className='border-2 border-black/40  hover:border-black rounded-lg p-1.5 pl-5'>
    
        <textarea value={formData.desc} onChange={(e)=>setFormData(prev=>({...prev,desc:e.target.value}))}  className='border-none outline-none w-full placeholder:text-black/70' placeholder='Write a short description of the dish...'  name="" id=""></textarea>
      </div>
  <div className="relative">

  <div
    onClick={() => setOpen(!open)}
    className="flex cursor-pointer items-center justify-between rounded-lg border-2 border-black/40 p-3 hover:border-black"
  >
    <span>
      {category?.label || "Select Category"}
    </span>

   <IoChevronDown
  className={`transition duration-300 ${
    open ? "rotate-180" : ""
  }`}
/>
  </div>

  {open && (
    <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-x-hidden overflow-y-scroll max-h-60 rounded-lg border border-biege/20 bg-black shadow-lg ">

      {categoryOptions.map((item) => (
        <div 
          key={item.value}
          onClick={() => {
            setCategory(item);
            setFormData(prev =>({
              ...prev,category:item.value
            }))
            setOpen(false);
          }}
          className={`  cursor-pointer px-4 py-3 transition
${
  category?.value === item.value
    ? "bg-biege text-black"
    : "hover:bg-biege/10 text-biege"
}`}
        >
          {item.label}
        </div>
      ))}

    </div>
  )}

</div>
      <div className='border-2 border-black/40  hover:border-black rounded-lg p-1.5 pl-5'>
 <input value={formData.price} onChange={(e)=>setFormData(prev=>({...prev,price:e.target.value}))}  className='border-none outline-none w-full placeholder:text-black/70' placeholder='Enter price' type="number" />
      </div>
      <div className='grid grid-cols-2'>
      <div className='flex flex-col py-2  gap-2'>
        <h2 className='text-lg'>Food Type</h2>
      <div className="flex gap-3 ">
  <button type='button' onClick={()=>setIsveg(true)}
    className={`rounded-full border px-6 py-1 duration-300 ease-in hover:bg-green-500 hover:border-green-500 ${isVeg===true?'bg-green-500':'bg-none'}`}
  >
    Veg
  </button>

  <button type='button'
  onClick={()=>setIsveg(false)}
    className={`rounded-full border px-4 py-1 duration-300 ease-in hover:bg-red-500 hover:border-red-500 ${isVeg === false ? 'bg-red-500':'bg-none'}`}
  >
    Non-Veg
  </button>
</div>
</div>

</div>

<button type='button' onClick={handleMenu} className='bg-black rounded-full text-biege py-1.5 hover:scale-95 duration-300  text-lg mt-6'>Add Dish</button>
    </form> 
    <div className='flex flex-col  gap-4 text-black/80'>
          <h2 className='text-2xl font-medium '>Dish Image</h2>
<div className='p-2 border-dashed border-2  h-[300px] rounded-lg flex items-center justify-center relative'>
 
{
  preview ? (
    <>
    <img className='w-full  h-[280px] object-cover rounded-2xl ' src={preview} alt="" />
  <span onClick={()=>setPreview('')} className='bg-black text-biege w-8 h-8 rounded-full flex items-center justify-center p-2 absolute top-1 right-2 cursor-pointer '><ImCross className='text-xs'/></span>  
    </>
  ):(
    <label  className='bg-black text-biege px-6 py-1 rounded-lg text-lg z-10'>Upload<input onChange={handleImage} className='hidden' type="file" name="" id="" /></label>
  )
}
</div>
</div> 
</div>
    </div>
    </div>  )
}

export default EditMenu