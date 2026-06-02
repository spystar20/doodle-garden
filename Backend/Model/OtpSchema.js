import mongoose  from "mongoose";
 const OtpSchema = new mongoose.Schema({
    email:{
        type:String,required:true
    }, otp:{
        type:String
    },date:{
        type:Date,default:Date.now(),index:{expires:600}
    }
 })
 export default mongoose.model("otpSchema",OtpSchema)