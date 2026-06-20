import express, { Router } from 'express'
const router = express.Router()
import { CreateMenu, DeleteMenuByID, EditMenu, getMenu, getMenuById } from '../Controller/controller.dish.js'
import { upload } from '../Middleware/multer.js'

router.post('/create-menu',upload.single('image'), CreateMenu)
router.get('/get-menu/:itemId',getMenuById)
router.put('/menu/:itemId/edit',upload.single('image'),EditMenu)
router.delete('/menu/:itemId/delete',DeleteMenuByID)

export default router