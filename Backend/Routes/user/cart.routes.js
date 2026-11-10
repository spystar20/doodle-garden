import express, {Router} from 'express'
import { optionalMiddleware } from '../../Middleware/optionalMiddleware.js'
import { fetchUserCart } from '../../Controller/user/cart.controller.js'

const router  = express.Router()
router.get('/',optionalMiddleware,fetchUserCart)
export default router