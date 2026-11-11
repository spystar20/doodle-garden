import express, {Router} from 'express'
import { optionalMiddleware } from '../../Middleware/optionalMiddleware.js'
import { addTocart, fetchUserCart, removeCartItem, updateQuantity } from '../../Controller/user/cart.controller.js'

const router  = express.Router()
router.get('/',optionalMiddleware,fetchUserCart)
router.post('/add',optionalMiddleware,addTocart)
router.put('/update-quantity',optionalMiddleware,updateQuantity)
router.delete('/remove-item',optionalMiddleware,removeCartItem)
export default router