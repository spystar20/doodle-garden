import { createReservation } from '../Controller/controller.reservation.js'
import express, { Router } from 'express'
const router = express.Router()

router.post('/reservation',createReservation)
