import mongoose from 'mongoose'
const cartModel = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:'restaurantusers',default:null
    },
    guestId:{
        type:String,default:null
    },
    items:[{
        product:{type:mongoose.Schema.Types.ObjectId,ref:'menu',required: true},
        quantity:{type:Number,default:1,min:1}
    }]
},{timestamps:true})
cartModel.index(
    {userId:1},
    {
        unique:true,
        partialFilterExpression:{
            userId:{$type:'objectId'}
        }
    }
)
cartModel.index(
    {guestId:1},
    {
        unique:true,
        partialFilterExpression:{
            guestId:{$type:'string'}
        }
    }
)
export default mongoose.model('restaurantCart',cartModel)