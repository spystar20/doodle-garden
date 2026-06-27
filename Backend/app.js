import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './Routes/user/user.auth.route.js'
import menuRoutes from './Routes/user/menu.routes.js'
import reservationRoutes from './Routes/user/reservation.routes.js'
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
app.use('/user',menuRoutes,reservationRoutes)
app.use('/admin',adminMenuRoutes,adminReservationRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("db connected")
}).catch((err)=>{
    console.log(err,"error occured")
})


app.listen(3000)