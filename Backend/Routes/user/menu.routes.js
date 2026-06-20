import express, { Router } from 'express'
const router = express.Router()
import {  getMenu } from '../Controller/controller.dish.js'

router.get('/menu',getMenu)

export default router