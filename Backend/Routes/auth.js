import express, { Router } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import user from '../Model/UserSchema.js'
const router = express.Router()
import { createAccess,createRefresh } from '../Utils.js/jwt.js'
import {sendEmailLink, sendOtp, sendPasswordLink} from '../Controller/otpController.js'
import {emailverify, otpVerify, verifypassword } from '../Verify/otpVerify.js'
import { CreateMenu } from '../Controller/controller.dish.js'
router.post('/sign',async (req,res)=>{
    console.log("signup hit")
    try{
    const {name,email,phone,password}= req.body
    const existingUser = await user.findOne({email})
    console.log("Email:", email)
console.log("User found:", existingUser)

    if(existingUser){
        return res.status(401).json({message:"user already exists"})
    }
    const hashed = await bcrypt.hash(password,10)
    const newUser = await user.create({name,email,phone,password:hashed})
    return res.status(200).json({message:"user created",newUser})
    }catch(err){
console.log(err,'error occured')
console.log("signup hit")
    }
})
router.post('/login',async (req,res)=>{
    try{
    const {email,password}= req.body
    const existingUser = await user.findOne({email})
    if(!existingUser){
        return res.status(401).json({message:"user does not exists"})
    }
   const match =  await bcrypt.compare(password,existingUser.password)
   if(!match){        return res.status(401).json({message:"credentials does not match "}) }
    const accesstoken = createAccess({name:existingUser.name,email:existingUser.email,phone:existingUser.phone,id:existingUser._id})
const refreshtoken= createRefresh({id:existingUser._id})
res.cookie('refreshtoken',refreshtoken,{sameSite:'lax',httpOnly:true,})
    return res.status(200).json({message:"welcome back",user:{accesstoken}})
    }catch(err){
console.log(err,'error occured')
    }
})
router.post('/refresh',async (req,res)=>{
    try{
const token = req.cookies.refreshtoken
if(!token){
    return res.status(401).json({message:"token not found"})

}
const decoded = jwt.verify(token,process.env.REFRESH_TOKEN)
 if(!decoded){   return res.status(401).json({message:"credentials does not match "}) }
 const CurrentUser = await user.findById(decoded.id) 
const newAccess = createAccess({name:CurrentUser.name, email:CurrentUser.email,phone:CurrentUser.phone,id:CurrentUser._id
})
return res.status(200).json({message:"token sent",user:{newAccess}})
    }catch(err){
return res.status(401).json({message:"invalid token"})
    }
})
router.post('/send-otp',sendOtp)
router.post('/verify-otp',otpVerify)
router.post('/verify-email',emailverify)
router.post('/send-email-link',sendEmailLink)
router.post('/reset-password',sendPasswordLink)
router.post("/verify-password",verifypassword)
router.post('/create-menu',CreateMenu)
router.get('/menu',getMenu)
export default router