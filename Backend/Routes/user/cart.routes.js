import express, {Router} from 'express'
import { optionalMiddleware } from '../../Middleware/optionalMiddleware.js'
import { addTocart, fetchUserCart, updateQuantity } from '../../Controller/user/cart.controller.js'

const router  = express.Router()
router.get('/',optionalMiddleware,fetchUserCart)
router.post('/add',optionalMiddleware,addTocart)
router.put('/update-quantity',optionalMiddleware,updateQuantity)
export default router