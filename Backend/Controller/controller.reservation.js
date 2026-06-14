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
export const getReservation = async(req,res)=>{
    try{
        const reservation = await ReservationSchema.find()
        return res.status(200).json({message:'reservation sent',reservation})
    }catch(err){
        console.log(err)
    }
}
export const ReservationStatus = async(req,res)=>{
    try{
        const {reservationId} = req.params
        const {status} = req.body
        const reservation = await ReservationSchema.findById(reservationId)
        if(!reservation){
            return res.status(404).json({message:'reservation not found'})
        }
        reservation.status = status
        await reservation.save()
        return res.status(200).json({message:'status updated'})
        
    }catch(err){
                console.log(err)

                return res.status(500).json({message:'internal server error',err})

    }
}