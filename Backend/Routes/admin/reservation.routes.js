import express, { Router } from 'express'
const router = express.Router()
import {getReservation,ReservationStatus  } from '../../Controller/reservation.controller.js'

router.get('/admin/reservation/',getReservation)
router.put('/admin/reservation/:reservationId/status',ReservationStatus)
export default router