import jwt from 'jsonwebtoken'
const authMiddleware = async (req,res,next)=>{
    try{
    const auth = req.headers.authorization
    if(!auth|| !auth.startsWith("Bearer ")){
        return res.status(401).json({message:"token not found"})
    }
    const token = auth.split(' ')[1]
   const  decoded =jwt.verify(token,process.env.ACCESS_TOKEN)
     if(!decoded){
        return res.status(401).json({message:'token did not match '})
     }
req.user= decoded
    next()
    }catch(err){
       return res.status(401).json({message:"invalid token"})
        
    }
}
export default authMiddleware