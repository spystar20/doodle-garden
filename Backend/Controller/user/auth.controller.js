import { asynHandler } from "../../Middleware/asyncHandler.js";
import userSchema from '../../Model/UserSchema.js'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken, verifyAccessToken, verifyRefreshToken } from "../../Utils.js/jwt.js";
import { getAccessCookieOptions, getRefreshCookieOptions } from "../../Utils.js/cookie.js";
export const SignUp = asynHandler(async(req,res)=>{
const {name,email,password} = req.body
console.log(req.body)
if(!name || !email || !password){
        return res.status(403).json({message:' please fill all details'})
}
const newUser = await userSchema.findOne({email:email})
if(newUser){
    return res.status(403).json({message:'user already exist please Login'})
}
const hashPassword =await bcrypt.hash(password,10)
await userSchema.create({
    name,email,password:hashPassword
 })
return res.status(200).json({message:'user created successfully'})
})

export const Login = asynHandler(async(req,res)=>{
    const {email,password}= req.body
    if(!email || !password){
        return res.status(403).json({message:'please fill both the fields'})
    }
    const existingUser = await userSchema.findOne({email:email})
    if(!existingUser){
                return res.status(403).json({message:'user does not exist . Please SignIn'})
    }
    const comparePass = await bcrypt.compare(password,existingUser.password)
    if(!comparePass){
        return res.status(403).json({message:'incorrect password'})
    }
const accessToken = createAccessToken({userId:existingUser._id})
const refreshToken = createRefreshToken({userId:existingUser._id})
 
    return res.cookie("accessToken",accessToken,getAccessCookieOptions()).cookie("refreshToken",refreshToken,getRefreshCookieOptions()).status(200).json({message:'login successfull',existingUser})
})

export const me = asynHandler(async(req,res)=>{
const {accessToken,refreshToken} =req.cookies
if(accessToken){
   try{payload = verifyAccessToken(accessToken)
    const existingUser = await userSchema.findById(payload.userId)
return res.json({accessToken,existingUser})
   }catch(err){
return res.status(403).json({message:'access token expired'})
   }
}
let payload
try{
payload = verifyRefreshToken(refreshToken)

}catch(err){   return res.status(401).json({
      message: "invalid or expired refresh token"
   })

}
const existingUser = await userSchema.findById(payload.userId)
const newAccessToken = createAccessToken({userId:existingUser._id})
res.cookie('accessToken',newAccessToken,getAccessCookieOptions())
return res.status(200).json({message:'token sent',existingUser})
})