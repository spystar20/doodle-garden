import mongoose from "mongoose";
const reservation = new mongoose.Schema({
    name:{
        type:String,required:true
    },phone:{
        type:Number,required:true
    },guest:{
        type:String,required:true
    },date:{
        type:Date,required:true
    },time:{
        type:String,required:true
    },status:{
        type:String,default:'pending'
    },note:{
        type:String
    },
    createdAt:Date
})
export default mongoose.model('reservation',reservation)