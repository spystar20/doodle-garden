import {asyncHandler} from '../../Middleware/asyncHandler.js'
import cartSchema from '../../Model/cartSchema.js'
// fetching cart items of user and guest 
export const fetchUserCart = asyncHandler(async(req,res)=>{
const userId= req.user?.userId
const {guestId} = req.query
if(!userId){
    if(!guestId){
        return res.status(400).json({message:'Guest ID is required'})
    }
    const guestCart = await cartSchema.findOne({guestId:guestId})
    if(!guestCart){
        return res.status(404).json({message:'guest cart not found'})
    }
    return res.status(200).json({guestCart})
}

const existingCart = await cartSchema.findOne({userId:userId})
if(!existingCart){
        return res.status(404).json({message:'user cart not found'})
}
return res.status(200).json({existingCart})

})
// api to add new item to cart 
export const addTocart = asyncHandler(async(req,res)=>{
    const {product,quantity} = req.body
    const userId = req.user?.userId
    const {guestId}=req.query
    if(!product||!Number.isInteger(Number(quantity)||Number(quantity)>1)){
        return res.status(400).json({message:'Valid product and quantity are required'})
    }
    if(!userId){
        if(!guestId){
            return res.status(400).json({message:"Guest ID is required"})
        }
        const guestCart = await cartSchema.findOne({guestId:guestId})     
        if(!guestCart){
       const userCart=  await cartSchema.create({
userId:null,guestId,items:[{product,quantity}]
            })
            return res.status(200).json({message:'product added to cart',userCart})
        }
        const existingItem = guestCart.items.find(item=>item.product.toString()===product)
        if(existingItem){
           existingItem.quantity+=Number(quantity||1)
           await guestCart.save()
return res.status(200).json({message:'cart updated',guestCart})
        }
        guestCart.items.push({product,quantity})
await guestCart.save()
return res.status(200).json({message:'cart updated',guestCart})

    }
const existingUserCart = await cartSchema.findOne({userId:userId})
if(!existingUserCart){
          const userCart=  await cartSchema.create({
userId:userId,guestId:null,items:[product,quantity]
            })
            return res.status(200).json({message:'product added to cart',userCart})
}
const existingItem = existingUserCart.items.find(item=>item.product.toString()===product)
     if(existingItem){
           existingItem.quantity+=Number(quantity||1)
           await existingUserCart.save()
return res.status(200).json({message:'cart updated',existingUserCart})
        }
 existingUserCart.items.push({product,quantity})
await existingUserCart.save()
return res.status(200).json({message:'cart updated',existingUserCart})
})