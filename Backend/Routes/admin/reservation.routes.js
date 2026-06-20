import express, { Router } from 'express'
const router = express.Router()

router.get('/admin/reservation/',getReservation)
router.put('/admin/reservation/:reservationId/status',ReservationStatus)
export default router