import express, { Router } from 'express'
const router = express.Router()
import {getReservation,ReservationStatus  } from '../../Controller/reservation.controller.js'

router.get('/',getReservation)
router.put('/:reservationId/status',ReservationStatus)
export default router