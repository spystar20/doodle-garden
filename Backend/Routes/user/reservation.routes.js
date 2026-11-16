import { createReservation } from '../../Controller/reservation.controller.js'
import express, { Router } from 'express'
const router = express.Router()

router.post('/create',createReservation)
export default router