import express, { Router } from 'express'
const router = express.Router()
import { getCategories, getMenu, getMenuById } from '../../Controller/dish.controller.js'


router.get('/',getMenu)
router.get('/categories',getCategories)
router.get('/get/:itemId',getMenuById)

export default router