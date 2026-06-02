import EmailSchema from "../Model/EmailSchema.js";
import OtpSchema from "../Model/OtpSchema.js";
import passwordSchema from "../Model/passwordSchema.js";
import emailTemplate from "../Templates/EmailLinkTemplate.js";
import otptemplate from "../Templates/otpTemplate.js";
import forgotPasswordTemplate from "../Templates/Password.js";
import sendemail from "../Utils.js/email.js";
import otpGenerator from "../Utils.js/OtpGenerator.js";
import Generatetoken from "../Utils.js/TokenGenerator.js";
 


export  async function sendOtp(req,res) {
    try{
const {email} = req.body
if (!email){
    return res.status(403).json({message:"email is required"})
}
const otp = otpGenerator() 

await OtpSchema.deleteMany({email})
await OtpSchema.create({
    email,otp
})
await sendemail({
   to:email,subject: "this is your otp",html:otptemplate(otp)
})
return res.status(200).json({message:"a mail with otp is sent to your email id"})
    }
    catch(err){
return res.status(403).json({message:"error occured", err})
    }
}
export  async function  sendEmailLink(req,res) {
    try{
const {email}=req.body

if(!email){
    return res.status(400).json({message:"email is required"})
}
await EmailSchema.deleteMany({email})
const token = Generatetoken()
await EmailSchema.create({
  email,token
})
const link = `http://localhost:5173/verify-email?token=${token}`
await sendemail({
    to:email,subject:"email link for verification",html:emailTemplate(link)
})
return res.status(200).json({
    message:"Email Link sent"
})
    }catch(err){
        console.log(err)
return res.status(500).json({message:"internal server error",err})
    }
    
}
export async function sendPasswordLink(req,res){
    try{
const {email} = req.body
if (!email){
    return res.status(400).json({
        message:"email not found"
    })
}
await passwordSchema.deleteMany({email})
const token = Generatetoken()
await passwordSchema.create({email,token})
const link = `http://localhost:5173/verify-password?token=${token}`
await sendemail({
    to:email, subject:"your password reset link", html:forgotPasswordTemplate(link)
})
return res.status(200).json({message:"reset password link sent"})
    }catch(err){
        console.log(err)
return res.status(500).json({
    message:"internal server error"
})
    }
}