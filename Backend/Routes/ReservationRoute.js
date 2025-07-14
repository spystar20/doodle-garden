import express from 'express';
import { createReservation } from '../Controllers/ReservationControl.js';

const router = express.Router();

router.post('/', createReservation);

export default router;