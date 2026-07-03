import express from 'express'
import { AuthMiddleware } from '../../Middleware/middleware.js'
import { Login, me, SignUp } from '../../Controller/user/auth.controller.js'
const router = express.Router()
router.post('/sign',SignUp)
router.post('/login',Login)
router.get('/me',me)
export default router 


