import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './Routes/auth.js'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import adminMenuRoutes from './Routes/admin/menu.routes.js'
import adminReservationRoutes from './Routes/admin/reservation.routes.js'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,credentials:true} ))
app.use('/auth',authRoutes)
app.use('/admin',)
mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("db connected")
}).catch((err)=>{
    console.log(err,"error occured")
})


app.listen(3000)