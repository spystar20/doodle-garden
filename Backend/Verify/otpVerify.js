import EmailSchema from '../Model/EmailSchema.js'
import user from '../Model/OtpSchema.js'
import passwordSchema from '../Model/passwordSchema.js'
import authSchema from '../Model/UserSchema.js'
import bcrypt from 'bcrypt'
export  async function otpVerify(req,res) {
    try{
      

const {email,otp}=req.body
if(!email||!otp){
    return res.status(403).json({message:"Please fill in Credentials"})
}
const Record = await user.findOne({email:email})
if(!Record){
    return res.status(403).json({message:"email not found"})
}
if(Record.otp!==otp){
    return res.status(403).json({message:"otp is invalid"})

}
return  res.status(200).json({message:"welcome to doodle" ,  success: true}
)
    }catch(err){
        console.log(err);
        
return  res.status(403).json({message:"error occured"})
    }
}

export  async function emailverify(req,res){
    try{

    const { token } = req.body
    console.log("TOKEN 👉", token)  
    if(!token){
    return res.status(400).json({message:"token not found"})
}
const Record = await EmailSchema.findOne({token})
if(!Record){
        return res.status(400).json({message:"Email Record not found"})
}
const user = await authSchema.findOne({email:Record.email})
if(!user){
    return res.status(400).json({message:"user not found"})
}
user.isVerified= true
await user.save()
return res.status(200).json({message:"User verified"})
    }catch(err){
console.log(err);
        
return  res.status(403).json({message:"error occured"})
    }
}
export async function verifypassword(req,res){

try{

    const {token,newpass}= req.body
        console.log("REQ BODY:", req.body);

    if (!token||!newpass){
        return res.status(400).json({messsage:"cred not found"})
    }
    const verificationRecord = await passwordSchema.findOne({token})
        console.log("RESET RECORD:", verificationRecord);

    if(!verificationRecord){
        return res.status(400).json({message:"token not found"})
    }
const user = await authSchema.findOne({email:verificationRecord.email})
 if(!user){
        return res.status(400).json({message:"user not found"})
    }
const hashPass = await bcrypt.hash(newpass,10)
user.password = hashPass
 await user.save()
 await passwordSchema.deleteOne({token})
 return res.status(200).json({message:"welcome"})
}catch(err){
console.log(err)

return res.status(500).json({message:"internal server error"})
}
}