import {api} from './../../../../axios/api'
export const createOrder = async({ orderSource,productId ,quantity, customerDetails, orderType, paymentType, pickupDate, pickupTimeSlot,})=>
{
    const res = await api.post('/user/payment/create', {orderSource,productId,quantity, customerDetails, orderType, paymentType, pickupDate, pickupTimeSlot})
    return res.data
}
export const verifyPayment = async({razorpay_order_id,razorpay_payment_id,razorpay_signature})=>{
    const res = await api.post('/user/payment/verify',{razorpay_order_id,razorpay_payment_id,razorpay_signature})
    return res.data
}