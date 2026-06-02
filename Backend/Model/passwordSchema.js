import mongoose from "mongoose";
 const PasswordSchema = new mongoose.Schema({
    email:{
        type:String,required:true
    },token:{
        type:String,required:true
    },date:{
        type:Date,default:Date.now(),index:{expires:1800}
    }
 })
 export default mongoose.model("passwordSchema",PasswordSchema)