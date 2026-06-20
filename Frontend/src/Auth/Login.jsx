import React, { useState } from 'react'
import { Link } from 'react-router';
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
 
   return (
     <div className='w-full min-h-screen bg-biege flex items-center justify-center'>
     
         <img src="https://i.pinimg.com/736x/58/53/88/585388a1e2740eb3c48fe316cc43ff0f.jpg" className='brightness-125  h-full absolute inset-0 object-cover w-full overflow-hidden ' alt="" />
       <div className='absolute  w-full inset-0 bg-black/10 backdrop-blur-xs'></div>
 
 
   {/* Right Form */}
   <div className="w-full z-[9999] max-w-lg
   lg:w-4/12 flex items-center text-biege justify-center p-6 bg-black/40 rounded-2xl border-2 border-biege/20 backdrop-blur-lg">
     
     <div className="w-full max-w-md flex flex-col gap-6">
 
       <div className=' flex flex-col items-center justify-center'>
         <h2 className="text-3xl font-semibold mt-4 font-[Outfit]">
Welcome Back         </h2>
         <p className="text-biege/60 mt-2 text-center max-w-2xl">
Sign in to manage your reservations, track your orders, and enjoy the Doodle's Garden experience.
         </p>
       </div>
 
       <input
         type="email"
         placeholder="Email Address"
  className="w-full
 px-4 py-3
 rounded-xl
 bg-white/10
 border border-white/20
 placeholder:text-biege/70
 text-biege
 outline-none"      />
 
       <div className="relative">
   <input
     type={showPassword ? "text" : "password"}
     placeholder="Create a secure password"
     className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border placeholder:text-biege/70 border-white/20 outline-none"
   />
 
   <button
     type="button"
     onClick={() => setShowPassword(prev => !prev)}
     className="absolute right-4 top-1/2 -translate-y-1/2"
   >
     {showPassword ? <FaEyeSlash /> : <FaEye />}
   </button>
 </div>
 
       <button className=" py-3 rounded-xl bg-biege/70
 text-black
 hover:bg-biege/90 font-medium hover:scale-95 duration-300">
Login       </button>
 <span>
       <p className="text-center ">
         Don't have an account?
 <Link to='/sign-in'><span className='italic hover:underline cursor-pointer ml-1'>Create Account</span></Link>
       </p>
     <Link to='/'> <span className='flex gap-1 items-center justify-center mt-1 text-biege/40 cursor-pointer'><FaArrowLeft className='text-sm mt-1' />
  back to home</span></Link>
 </span>
     </div>
 
   </div>
 
 
     </div>
   )
}

export default Login