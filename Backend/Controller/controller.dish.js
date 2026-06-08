import MenuSchema from "../Model/MenuSchema.js"
import cloudinary from "../Utils.js/cloudinary.js"

export const CreateMenu= async(req,res) =>{
try{
const {title,desc,rating,isVeg,category,price} = req.body 
const result = await cloudinary.uploader.upload(req.file.path,{
    folder:'doodle-garden'
})
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