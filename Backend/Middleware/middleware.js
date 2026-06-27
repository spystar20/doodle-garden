import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const AuthMiddleware = (req,res,next)=>{
    try{
    const token = req.cookies.accessToken
    if(!token){
        return res.status(403).json({message:'token not found access denied'})
    }

    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN)
    req.user = decoded
    next()}catch(err){
        return res.status(500).json({message:err})
    }
}