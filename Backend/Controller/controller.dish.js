import MenuSchema from "../Model/MenuSchema.js"

export const CreateMenu= async(req,res) =>{
try{
const {title,image,desc,rating,isVeg,category,price} = req.body 
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