import axios from 'axios'
import React, { useState } from 'react'

const ResetPassword = () => {
  const [email , Setemail]= useState('')
   async function handlesubmit(e){
    e.preventDefault()
try{
  if(!email){
    return alert("email not found")
  }
const res = await axios.post("http://localhost:3000/auth/reset-password",{email})
console.log(res.data)
}catch(err){
console.log(err)
}
  }
  return (
    <div><div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Reset your password
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your registered email address and we’ll send you a password
          reset link.
        </p>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
          value={email}
          onChange={(e)=>{Setemail(e.target.value)}}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button onClick={handlesubmit}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition duration-200"
        >
          Send Reset Link
        </button>

        <p className="text-sm text-gray-500 text-center mt-5">
          Remember your password?{" "}
          <span className="text-indigo-600 hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
</div>
  )
}

export default ResetPassword