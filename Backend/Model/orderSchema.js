import mongoose from 'mongoose'
const orderModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'restaurantusers', required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId, ref: 'menu', required: true
        },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }]
    ,
    customerDetails:{
name:{type:String,required:true},
phone:{type:String,required:true},
address:String,
city:String,
pincode:String
    },
    orderType: {
        type: String, enum: ['delivery', 'pickup'],required:true
    },
    paymentType: {
        type: String, enum: ['cod', 'online'],required:true
    },
    paymentStatus: {
        type: String, enum: ['failed', 'pending', 'paid'],default:"pending"
    },
    orderStatus: {
        type: String, enum: ['placed','confirmed','preparing','ready','out-for-delivery','delivered','cancelled'],
        default: 'placed'
    },
    deliveryFee:{
type:Number,default:0
    },
    codFee:{
        type:Number,default:0
    },
    razorpayPaymentId: {
        type: String,
    },
    razorpayOrderID: {
        type: String
    },
  pickupDate:Date,
  pickupTimeSlot:String,

    amount: {
        type: Number, required: true
    },
    currency: {
        type: String, default:'INR'
    }

}, { timestamps: true })
export default mongoose.model('restaurantPayment',orderModel)