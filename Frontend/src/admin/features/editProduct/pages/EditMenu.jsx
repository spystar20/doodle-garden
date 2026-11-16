import React, { useEffect, useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';
import Select from 'react-select'
import { api } from '../../../../../axios/api';
import axios from 'axios';
import { toast } from 'sonner';
import { ImCross } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenuById } from '../../../../features/menu/hooks/menuHooks';
import { useEditDish } from '../../../hooks/adminHooks';
import CategoryDropdown from '../../../components/CategoryDropDown';
import FoodTypeSelector from '../../../components/FoodTypeSelector';
import ProductImageUpload from '../../../components/ProductImageUpload';


const EditMenu = () => {
    
  const [preview,setPreview]= useState('')
  const [image,setImage] = useState('')
  const {itemId} = useParams()
  const navigate = useNavigate()
     const {isLoading,isError,data:menu} =useMenuById(itemId)
const {mutate:editDish }=useEditDish()
 
const [formData ,setFormData] = useState({title:'',desc:'',price:'',category:''})
const [isVeg,setIsveg] = useState(null)
const handleMenu = ()=>{
editDish({
  formData,isVeg,image,itemId
},{
  onSuccess:()=>{
    toast.success('Dish updated')
setFormData({title:'',desc:'',price:'',category:''})
setIsveg(null)
setPreview('')

setTimeout(() => {
  navigate('/admin/manage-menu')
}, 1500);
  }
})  
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
useEffect(() => {
  if (!menu) return;
  setFormData({
    title: menu.title || "",
    desc: menu.desc || "",
    price: menu.price || "",
    category: menu.category || "",
  });

  setPreview(menu.image || "");

  setIsveg(menu.isVeg);
}, [menu]);
 
  return (
 <div className="text-brand px-12 py-5 w-full font-body">

  <div className="flex flex-col gap-2">
    <h2 className="text-4xl font-semibold font-heading">
      Edit Dish
    </h2>

    <p className="text-sm font-medium text-brand/70">
      Edit and update an existing menu item for Doodle Garden.
    </p>
  </div>

  <div className="flex flex-col gap-5 py-6">

    <h5 className="text-xl font-medium font-heading">
      Dish Information
    </h5>

    <div className="grid grid-cols-2 gap-5 bg-brand max-w-9/12 rounded-2xl p-5">

      <form className="flex flex-col gap-2 text-primary/80" action="">

        {/* Dish Name */}
        <div className="border-2 border-primary/40 hover:border-primary rounded-lg p-1.5 pl-5">
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            className="border-none outline-none w-full placeholder:text-primary/70 bg-transparent"
            placeholder="Enter Your Dish Name"
            type="text"
          />
        </div>

        {/* Description */}
        <div className="border-2 border-primary/40 hover:border-primary rounded-lg p-1.5 pl-5">
          <textarea
            value={formData.desc}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                desc: e.target.value,
              }))
            }
            className="border-none outline-none w-full placeholder:text-primary/70 bg-transparent"
            placeholder="Write a short description of the dish..."
            name=""
            id=""
          ></textarea>
        </div>

        {/* Category */}
<CategoryDropdown
  value={formData.category}
  onChange={(value) =>
    setFormData(prev => ({
      ...prev,
      category: value
    }))
  }
/>        {/* Price */}
        <div className="border-2 border-primary/40 hover:border-primary rounded-lg p-1.5 pl-5">
          <input
            value={formData.price}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            className="border-none outline-none w-full placeholder:text-primary/70 bg-transparent"
            placeholder="Enter price"
            type="number"
          />
        </div>

        {/* Food Type */}
      <FoodTypeSelector value={isVeg} onChange={setIsveg}/>

        {/* Update Button */}
        <button
          type="button"
          onClick={handleMenu}
          className="bg-primary rounded-full text-brand py-1.5 hover:scale-95 duration-300 text-lg mt-6"
        >
          Update Dish
        </button>

      </form>

      {/* Dish Image */}
      {/* <div className="flex flex-col gap-4 text-primary/80">

        <h2 className="text-2xl font-medium font-heading">
          Dish Image
        </h2>

        <div className="p-2 border-dashed border-2 border-primary/40 h-[300px] rounded-lg flex items-center justify-center relative">

          {preview ? (
            <>
              <img
                className="w-full h-[280px] object-cover rounded-2xl"
                src={preview}
                alt=""
              />

              <span
                onClick={() => setPreview("")}
                className="bg-primary text-brand w-8 h-8 rounded-full flex items-center justify-center p-2 absolute top-1 right-2 cursor-pointer"
              >
                <ImCross className="text-xs" />
              </span>
            </>
          ) : (
            <label className="bg-primary text-brand px-6 py-1 rounded-lg text-lg z-10 cursor-pointer">
              Upload

              <input
                onChange={handleImage}
                className="hidden"
                type="file"
                name=""
                id=""
              />
            </label>
          )}

        </div>

      </div> */}
<ProductImageUpload   preview={preview}
  onChange={handleImage}
  onRemove={() => {
    setPreview('')
    setImage('')
  }}/>
    </div>

  </div>

</div> )
}

export default EditMenu