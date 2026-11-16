import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';
import { toast } from 'sonner';
import { ImCross } from 'react-icons/im';
import { useAddDish } from '../../../hooks/adminHooks';
import PageHeader from '../../../components/PageHeader';
import CategoryDropdown from '../../../components/CategoryDropDown';
import FoodTypeSelector from '../../../components/FoodTypeSelector';
import ProductImageUpload from '../../../components/ProductImageUpload';
import ProductForm from '../../../components/ProductForm';
export const AddMenu = () => {
  const [preview,setPreview]= useState('')
  const [image,setImage] = useState('')
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
const {mutate:addNew}=useAddDish()
const handleMenu = ()=>{
  addNew({formData,isVeg,image},{
    onSuccess:()=>{
toast.success('New Dish Added')
setFormData({title:'',desc:'',price:'',category:''})
setIsveg(null)
setImage('')
setPreview('')
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
  return (
   <div className="w-full px-6 py-6 font-body text-brand md:px-12">

  {/* Page Header */}
  <PageHeader title=" Add New Dish" desc="Create and publish a new menu item for Doodle Garden."/>
  {/* Dish Information Section */}
  <div className="flex flex-col gap-5 py-8">

    <h5 className="font-heading text-2xl font-medium">
      Dish Information
    </h5>


    {/* Main Form Card */}
    <div className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-2xl bg-brand p-6 text-primary shadow-xl lg:grid-cols-2">

      {/* Left: Form */}
    <form className="flex flex-col gap-4">
  <ProductForm
    formData={formData}
    setFormData={setFormData}
    isVeg={isVeg}
    setIsveg={setIsveg}
  />

  <button
    type="button"
    onClick={handleMenu}
    className="mt-4 w-full rounded-full bg-primary py-3 font-heading text-lg uppercase tracking-wide text-brand transition-all duration-300 hover:scale-[0.98]"
  >
    Add Dish
  </button>
</form>


      {/* Right: Image Upload */}
<ProductImageUpload   preview={preview}
  onChange={handleImage}
  onRemove={() => {
    setPreview('')
    setImage('')
  }}/>
    </div>

  </div>

</div>
  )
}

export default AddMenu