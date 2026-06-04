import MenuSchema from "../Model/MenuSchema"

export const CreateMenu= async(req,res) =>{
try{
const {title,img,desc,rating,isVeg,category,price} = req.body 
const newDish = await MenuSchema.create({
    title,img,desc,rating,isVeg,category,price
})
return res.status(200).json({message:'dish served'})
}catch{
console.log(err)
}
}
export const getMenu = async(req,res)=>{
    try{
const menu = await MenuSchema.find()
    }catch(err){
        console.log(err)
    }
}