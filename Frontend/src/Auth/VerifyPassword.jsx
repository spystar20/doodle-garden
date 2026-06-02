import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyPassword = () => {
    const [ newpass,setPassword]= useState("")
    const[ConfirmPass,setConfirmPass]=useState("")
    const [search]=useSearchParams()
    const token = search.get("token")
    const navigate = useNavigate()
    async function handlesubmit(e) {
        e.preventDefault()
          console.log("SUBMIT CLICKED");

        try{
          console.log("TOKEN FROM URL:", token);

const res=await axios.post("http://localhost:3000/auth/verify-password",{token,newpass:newpass},{withCredentials:true})
console.log("AFTER API", res.data);

setTimeout(() => {
navigate('/login')
}, 
100);
alert("password reset")

        }catch(err){
 console.error("ERROR:", err.response?.data);
  alert(err.response?.data?.message || "Something went wrong");

        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create new password
        </h2>

        <p className="text-sm text-gray-500 text-center mt-2">
          Your new password must be different from previously used passwords.
        </p>

        {/* New Password */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New password
          </label>
          <input
          value={newpass}
          onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm password
          </label>
          <input
            value={ConfirmPass}
          onChange={(e)=>{setConfirmPass(e.target.value)}}
            type="password"
            placeholder="Confirm new password"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
        onClick={handlesubmit}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition duration-200"
        >
          Update Password
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          Make sure both passwords match before continuing.
        </p>

      </div>
    </div>
  );
};

export default VerifyPassword;
