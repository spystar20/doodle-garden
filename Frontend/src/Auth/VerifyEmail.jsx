import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from "axios";
const VerifyEmail = () => {
    const [status,setStatus]= useState("verifying")
    const [search]= useSearchParams()
    const token = search.get("token")
    useEffect(()=>{
       async function handleSubmit() {
       try{
 if(!token){
            return setStatus("token not found")
        }
        await axios.post("http://localhost:3000/auth/verify-email",{token})
        setStatus("Email verified successfully!")
        }catch(err){
console.log(err)
return setStatus(err.response?.data?.message || "Error occurred")

        }
       }
       handleSubmit()
    },[token])
  return (
  
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-sm text-center">

        <h1 className="text-2xl font-semibold mb-4">
          {status.includes("Verifying") ? "Checking your email 📩" : "Email Verification"}
        </h1>

        {status === "Email verified successfully!" && (
          <a
            href="/login"
            className="text-green-600 hover:underline mt-4 inline-block"
          >
            Go to Login
          </a>
        )}

        <p className="text-sm text-gray-500 mt-6">
          Didn’t receive the email?
        </p>

        <button className="mt-3 text-green-600 hover:underline text-sm">
          Resend verification email
        </button>

      </div>
    </div>
 
  )
}

export default VerifyEmail