import Reservation from "../Models/Reservation.js";

const createReservation = async(req, res) =>{
    try{
        const reservation = new Reservation(req.body)
        await reservation.save();
     res.status(201).json({"message": "Reservation created successfully", reservation});
    } catch (error) {
        res.status(400).json({"message": "Error creating reservation", error});
    }
}
export { createReservation };