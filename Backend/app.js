import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './Routes/auth.js'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',credentials:true} ))
app.use('/auth',authRoutes)
mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("db connected")
}).catch((err)=>{
    console.log(err,"error occured")
})
app.get('/',(req,res)=>{
    res.send('hey')
})

app.listen(3000)