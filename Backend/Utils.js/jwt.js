import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createAccessToken = (payload)=>{
return jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:'15m'})
}
export const createRefreshToken = (payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN,{expiresIn:'7d'})
}

export const verifyAccessToken = (token)=>{
    return jwt.verify( token,process.env.ACCESS_TOKEN)
}
export const verifyRefreshToken = (token)=>{
    return jwt.verify(token,process.env.REFRESH_TOKEN)
}