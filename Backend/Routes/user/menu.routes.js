import express, { Router } from 'express'
const router = express.Router()
import { getCategories, getMenu, getMenuById } from '../../Controller/dish.controller.js'


router.get('/menu',getMenu)
router.get('/menu/categories',getCategories)
router.get('/get-menu/:itemId',getMenuById)

export default router