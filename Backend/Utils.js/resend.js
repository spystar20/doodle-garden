import { Resend } from "resend";
import dotenv from 'dotenv'
dotenv.config()
 const resend = new Resend(process.env.RESEND_API)
 export default resend