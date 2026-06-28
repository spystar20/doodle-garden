import { asynHandler } from "../../Middleware/asyncHandler.js";
import userSchema from '../../Model/UserSchema.js'
import bcrypt from 'bcrypt'
export const SignUp = asynHandler(async(req,res)=>{
const {name,email,password} = req.body
if(!name || !email|| !password){
        return res.status(403).json({message:' please fill all details'})
}
const newUser = await userSchema.findOne(email)
if(newUser){
    return res.status(403).json({message:'user already exist please Login'})
}
const hashPassword = bcrypt.hash(password,10)
await userSchema.create({
    name,email,password:hashPassword
 })
return res.status(200).json({message:'user created successfully'})
})