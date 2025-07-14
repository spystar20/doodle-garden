import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
name :{
    type: String,
    required: true,
    trim: true,
},
phone :{
    type: String,
    required: true,
} ,
guests:{
    type:String,
    required: true,
},
date :{
    type: Date,
    required: true,
},
time :{

    type: String,
    required: true,
},
message :{
    type: String,
    default: "",
},
},
{
    timestamps: true,
})

const Reservation = mongoose.model("Reservation", ReservationSchema)
export default Reservation;