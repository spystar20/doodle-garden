import express from 'express'
import { AuthMiddleware } from '../../Middleware/middleware.js'
import { SignUp } from '../../Controller/user/auth.controller.js'
const router = express.Router()
router.post('/sign',SignUp)
export default router 


