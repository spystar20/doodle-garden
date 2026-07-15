import React, { useEffect, useState } from 'react'
import { IoPulse, IoPulseSharp, IoRadioButtonOff, IoStar } from 'react-icons/io5'
import { MdOutline18UpRating, MdOutline6kPlus } from 'react-icons/md'
import { ImPlus, ImSpoonKnife } from "react-icons/im";
import DishCard from '../Components/DishCard';
import { api } from '../../axios/api';
import AdminDishCard from '../Components/AdminDishCard';
import { toast, Toaster } from 'sonner';

const ManageMenu = () => {
    const [menu, setMenu] = useState([])
const [openModal,setOpenModal] = useState(false)
const [selected,setSelected]= useState(null)
const handleDelete  = async(itemId)=>{
    try{
const res = await api.delete(`admin/menu/${itemId}/delete`)
console.log(res)
fetchMenu()
toast.success('dish deleted')
setOpenModal(false)
    }catch(err){
console.log(err)
    }
}
    const fetchMenu = async () => {
        try {
            const res = await api.get('user/menu')
            console.log(res)
            setMenu(res.data.menu)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchMenu()
    }, [])
    return (
        <div className='w-full min-h-screen mx-4 relative rounded-lg text-biege px-4 py-5 flex flex-col gap-4 overflow-hidden '>
            <div className='flex flex-col gap-1  w-full '>
                <h2 className='text-3xl font-semibold font-[Outfit]'>Menu Management</h2>
                <p>Manage dishes, prices and availability</p>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                {menu?.map((i) => (

                    <AdminDishCard setOpenModal={()=>{setOpenModal(true),setSelected(i._id)}}  link_edit={`/admin/manage-menu/${i._id}/edit`} key={i._id} rating={4} category={i.category} image={i.image} title={i.title} desc={i.desc} price={i.price} Isveg={i.isVeg} />
                ))}      </div>
               
            <div className={`absolute -translate-y-1/2 self-center top-1/2 bg-black/30 backdrop-blur-sm w-full min-h-screen flex items-center justify-center ${openModal ? 'flex':'hidden'}`}>
       <div className="w-full max-w-md rounded-3xl border border-biege/20 bg-[#111] p-6 shadow-2xl">
                     <div className="flex flex-col gap-2">

          <span className="text-red-400 text-sm font-medium uppercase tracking-wider">
            Delete Item
          </span>

          <h2 className="font-[Outfit] text-2xl font-semibold text-biege">
            Are you sure?
          </h2>

          <p className="text-biege/70 text-sm">
            This action will permanently remove this dish from your menu.
            This cannot be undone.
          </p>

        </div>
                    <div className='flex gap-3 px-4 mt-4'>
                        <button onClick={()=>handleDelete(selected)} className="w-full cursor-pointer border-red-400 hover:scale-95  text-biege rounded-full bg-red-400 py-1 text-sm font-medium font-[Outfit]">
                            Yes    </button><button onClick={()=>setOpenModal(false)} className="w-full cursor-pointer hover:scale-95  border-biege  text-black rounded-full bg-biege py-1 text-sm font-medium font-[Outfit]">
                            No    </button>
                            </div> 
                             </div>    </div>

        </div>
    )
}

export default ManageMenu