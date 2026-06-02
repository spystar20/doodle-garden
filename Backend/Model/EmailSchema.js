import mongoose, { Schema } from "mongoose";
 const  EmailSchema = new mongoose.Schema({
email:{
    type:String,required:true
},token:{
    type:String,required:true 
},createdAt:{
    type:Date,default:Date.now(),index:{expires:1800}
}
 })
 export default mongoose.model("emailSchema",EmailSchema)