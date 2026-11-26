import express from 'express'
const router = express.Router()
import {AuthMiddleware} from './../../Middleware/middleware.js'
import { createOrder, fetchOrderDetails, verifyPayment } from '../../Controller/user/payment.controller.js'

router.post('/create',AuthMiddleware,createOrder)
router.post('/verify',AuthMiddleware,verifyPayment)
router.get('/orderDetails/:orderId',AuthMiddleware,fetchOrderDetails)
export default router