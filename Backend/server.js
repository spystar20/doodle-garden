import express from 'express';
import cors from 'cors';
import connectDB from './Config/db.js';
import dotenv from 'dotenv';
import ReservationRoute from './Routes/ReservationRoute.js';

dotenv.config();
const app = express();
connectDB()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/reservations', ReservationRoute);
app.get('/test', (req, res) => {
  res.send('API working');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});