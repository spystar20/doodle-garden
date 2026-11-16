import express from 'express'
const router = express.Router()
import {AuthMiddleware} from './../../Middleware/middleware.js'
import { createOrder, verifyPayment } from '../../Controller/user/payment.controller.js'

router.post('/create',AuthMiddleware,createOrder)
router.post('/verify',AuthMiddleware,verifyPayment)
export default router