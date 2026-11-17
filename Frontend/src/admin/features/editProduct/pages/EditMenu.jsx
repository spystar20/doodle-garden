import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
import { useMenuById } from '../../../../features/menu/hooks/menuHooks';
import { useEditDish } from '../../../hooks/adminHooks';
import ProductForm from '../../../components/ProductForm'
import PageHeader from '../../../components/PageHeader';
import Loader from '../../../../utils/Loader'
const EditMenu = () => {
    
  const [preview,setPreview]= useState('')
  const [image,setImage] = useState('')
  const {itemId} = useParams()
  const navigate = useNavigate()
     const {isLoading,isError,data:menu} =useMenuById(itemId)
const {mutate:editDish }=useEditDish()
 
const [formData ,setFormData] = useState({title:'',desc:'',price:'',category:''})
const [isVeg,setIsveg] = useState(null)
const handleUpdate = ()=>{
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
 
if (isLoading) return <Loader/>
if (isError || !menu) return <p>Unable to load dish.</p>
  return (
 <div className="text-brand px-12 py-5 w-full font-body">

<PageHeader title="Edit Dish" desc="      Edit and update an existing menu item for Doodle Garden.
"/>
  <div className="flex flex-col gap-5 py-6">

    <h5 className="text-xl font-medium font-heading">
      Dish Information
    </h5>

   <ProductForm
  formData={formData}
  setFormData={setFormData}
  isVeg={isVeg}
  setIsveg={setIsveg}
  preview={preview}
  handleImage={handleImage}
  handleRemoveImage={() => {
    setPreview('')
    setImage('')
  }}
>
  <button
    type="button"
    onClick={handleUpdate}
    className="mt-4 w-full rounded-full bg-primary py-3 font-heading text-lg uppercase tracking-wide text-brand transition-all duration-300 hover:scale-[0.98]"
  >
    Update Dish
  </button>
</ProductForm>

  </div>

</div> )
}

export default EditMenu