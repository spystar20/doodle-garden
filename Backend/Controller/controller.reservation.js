import ReservationSchema from "../Model/ReservationSchema.js"


export const createReservation = async(req,res)=>{
    try{
const {name,phone,guest,date,time,status,note} = req.body

const newReservation = await ReservationSchema.create({
    name,phone,guest,date,time,status,note
})
await newReservation.save()
return res.status(200).json({message:'table reserved successfully '})
    }catch(err){
        console.log(err)

    }
}