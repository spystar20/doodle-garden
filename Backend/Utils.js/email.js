import resend from "./resend.js"
import dotenv from 'dotenv'
dotenv.config()
export default async function  email({to,subject,html}){
    try{
const res = await resend.emails.send({
    from:process.env.FROM_EMAIL,to,subject,html
}).then(console.log).catch(console.error)
    }catch(err){
        console.log("error occured",error)
throw new Error ("email failed to send")
    }

} 