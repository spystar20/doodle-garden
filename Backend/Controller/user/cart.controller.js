import {asyncHandler} from '../../Middleware/asyncHandler.js'
import cartSchema from '../../Model/cartSchema'
import restaurantUser from '../../Model/UserSchema.js'
export const fetchUserCart = asyncHandler(async(req,res)=>{
const {userId,guestId}= req.user
if(userId===null){
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