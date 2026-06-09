import React, { useEffect, useState } from 'react'
import { IoPulse, IoPulseSharp, IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating, MdOutline6kPlus } from 'react-icons/md'
import { ImPlus, ImSpoonKnife } from "react-icons/im";
import DishCard from '../Components/DishCard';
import { api } from '../../axios/api';
import AdminDishCard from '../Components/AdminDishCard';

const ManageMenu = () => {
      const [menu,setMenu] = useState([])

          const fetchMenu = async()=>{
    try{
const res = await api.get('auth/menu')
console.log(res)
setMenu(res.data.menu)
    }catch(err){
console.log(err)
    }
}
useEffect(()=>{
    fetchMenu()
},[])
  return (
    <div className='w-full min-h-screen mx-4 rounded-lg text-biege px-4 py-5 flex flex-col gap-4 '>
      <div className='flex flex-col gap-1 '>
      <h2 className='text-3xl font-semibold font-[Outfit]'>Menu Management</h2>
      <p>Manage dishes, prices and availability</p>
      </div>
    
      <div className='grid grid-cols-3 gap-6'>
{menu?.map((i)=>(

<AdminDishCard link_edit={`/admin/manage-menu/${i._id}/edit`} key={i._id} rating={4} category={i.category} image={i.image} title={i.title} desc={i.desc} price={i.price} Isveg={i.isVeg}/>
))}      </div>
      
    </div>
  )
}

export default ManageMenu