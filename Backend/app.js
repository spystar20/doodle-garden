import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './Routes/user/user.auth.route.js'
import userMenuRoutes from './Routes/user/menu.routes.js'
import adminMenuRoutes from './Routes/admin/menu.routes.js'
import reservationRoutes from './Routes/user/reservation.routes.js'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import adminReservationRoutes from './Routes/admin/reservation.routes.js'
import cartRoutes from './Routes/user/cart.routes.js'
import paymentRoutes from './Routes/user/payment.routes.js'
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:process.env.FRONTEND_URL,credentials:true} ))
    
app.use('/auth',authRoutes)
app.use('/admin/reservation',adminReservationRoutes)
app.use('/user/reservation',reservationRoutes)
app.use('/admin/menu',adminMenuRoutes)
app.use('/user/menu',userMenuRoutes)
app.use('/user/cart',cartRoutes)
app.use('/user/payment',paymentRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("db connected")
}).catch((err)=>{
    console.log(err,"error occured")
})


app.listen(3000)