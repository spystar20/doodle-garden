import jwt from 'jsonwebtoken'
export const createAccess = (payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:"12m"})
}
export const createRefresh = (payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN,{expiresIn:"3d"})
}

