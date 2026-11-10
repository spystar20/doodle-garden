import { asyncHandler } from "./asyncHandler.js";
import { verifyAccessToken } from "../Utils.js/jwt.js";

export const optionalMiddleware = asyncHandler(async(req,res,next)=>
{
const token = req.cookies.accessToken
if(!token){
return next()
}
const decoded = verifyAccessToken(token)
req.user = decoded
next()
})