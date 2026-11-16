import express, { Router } from 'express'
const router = express.Router()
import { CreateMenu, DeleteMenuByID, EditMenu, getMenu, getMenuById } from '../../Controller/dish.controller.js'
import { upload } from '../../Middleware/multer.js'

router.post('/create',upload.single('image'), CreateMenu)
router.put('/:itemId/edit',upload.single('image'),EditMenu)
router.delete('/:itemId/delete',DeleteMenuByID)

export default router