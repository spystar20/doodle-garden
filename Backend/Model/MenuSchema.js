import mongoose from 'mongoose'
const Menu = new mongoose.Schema({
    title:{
        type:String,required:true
    },image:{
        type:String,required:true
    },desc:{
        type:String,required:true
    },price:{
        type:Number,required:true
    },rating:{
        type:Number
    },isVeg:{
        type:Boolean
    },category:{
        type:String
    }
})
export default mongoose.model('menu',Menu)