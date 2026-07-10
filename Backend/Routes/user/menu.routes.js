import express, { Router } from 'express'
const router = express.Router()
import { getCategories, getMenu } from '../../Controller/dish.controller.js'


router.get('/menu',getMenu)
router.get('/menu/categories',getCategories)
export default router