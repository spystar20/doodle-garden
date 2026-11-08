import mongoose from 'mongoose'
const cartModel = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:'restaurantusers',default:null
    },
    guestId:{
        type:String,default:null
    },
    items:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:'menu'},
        quantity:{type:Number,default:1,min:1}
    }]
},{timestamps:true})
export default mongoose.model('restaurantCart',cartModel)