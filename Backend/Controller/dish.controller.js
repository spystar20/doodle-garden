import MenuSchema from "../Model/MenuSchema.js"
import cloudinary from "../Utils.js/cloudinary.js"
import fs from 'fs'
export const CreateMenu= async(req,res) =>{
try{
const {title,desc,rating,isVeg,category,price} = req.body 
const result = await cloudinary.uploader.upload(req.file.path,{
    folder:'doodle-garden'
})
fs.unlinkSync('/uploads')
const image = result.secure_url
const newDish = await MenuSchema.create({
    title,image,desc,rating,isVeg,category,price
})
return res.status(200).json({message:'dish served'})
}catch(err){
console.log(err)
}
}
export const getMenu = async(req,res)=>{
    try{
const menu = await MenuSchema.find()
return res.status(200).json({message:'dish served',menu})

    }catch(err){
        console.log(err)
    }
}

export const getMenuById = async(req,res)=>{
    try{
const {itemId} = req.params
const dish = await MenuSchema.findById(itemId)
return res.status(200).json(dish)
    }catch(Err){
                return res.status(500).json({message:'internal error',Err})

    }
}
export const EditMenu = async(req,res)=>{
    try{
const {itemId} = req.params
const {title,desc,price,isVeg,category} = req.body
const dish = await MenuSchema.findById(itemId)
if(!dish){
    return res.status(401).json({message:'dish not found'})
}
if(title !== dish.title && title !== undefined){
    dish.title = title
}
if(desc !== dish.desc && desc !== undefined){
    dish.desc = desc
}
if(category !== dish.category && category !== undefined){
    dish.category = category
}
if(isVeg !== dish.isVeg && isVeg !== undefined){
    dish.isVeg = isVeg
}
if(price !== dish.price && price !== undefined){
    dish.price = price
}
if(req.file){
    const result =await cloudinary.uploader.upload(req.file.path,{
        resource_type:'image',folder:'doodle-garden'
    })
    const image = result.secure_url
    dish.image = image
}
await dish.save()
return res.status(200).json({message:"dish updated",dish})
    }catch(Err){
        return res.status(500).json({message:'internal error',Err})
    }
}
export const DeleteMenuByID = async(req,res)=>{
    try{
    const {itemId} = req.params

    const dish =await MenuSchema.findByIdAndDelete(itemId)

    return res.status(200).json({message:'dish deleted'})
    }
    catch(err){
        console.log(err)
                return res.status(500).json({message:'internal error',Err})

    }
}