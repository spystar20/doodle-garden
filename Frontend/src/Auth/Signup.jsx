import React, { useState } from 'react'
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { api } from '../../axios/api';
import { toast } from 'sonner';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
const [formData,setFormdata]= useState({name:'',email:'',password:''})
const navigate = useNavigate()
const handleSubmit = async()=>{
try{
await api.post('/auth/sign',formData)
toast.success(`welcome ${formData.name}`)
setTimeout(() => {
  navigate('/')
}, 1000);
setFormdata({name:'',email:'',password:''})
}catch(err){
console.log(err)
}
}
  return (
    <div className='w-full min-h-screen bg-biege flex items-center justify-center'>
    
        <img src="https://i.pinimg.com/736x/e3/2a/fe/e32afea880a4282fd31afb8dea40511e.jpg" className='brightness-125  h-full absolute inset-0 object-cover w-full overflow-hidden ' alt="" />
      <div className='absolute  w-full inset-0 bg-black/10 backdrop-blur-xs'></div>


  {/* Right Form */}
  <div className="w-full z-[9999] max-w-lg
  lg:w-4/12 flex items-center text-biege justify-center p-6 bg-black/40 rounded-2xl border-2 border-biege/20 backdrop-blur-lg">
    
    <div className="w-full max-w-md flex flex-col gap-6">

      <div className=' flex flex-col items-center justify-center'>
        <h2 className="text-3xl font-semibold mt-4 font-[Outfit]">
          Create Account
        </h2>
        <p className="text-biege/60 mt-2 text-center max-w-2xl">
Join Doodle's Garden and enjoy seamless reservations,
faster ordering, and exclusive dining experiences.
        </p>
      </div>

      <input
      onChange={(e)=>setFormdata((prev)=>({...prev,name:e.target.value}))}
      value={formData.name}
        type="text"
        placeholder="Full Name"
        className="w-full
px-4 py-3
rounded-xl
bg-white/10
border border-white/20
placeholder:text-biege/70
text-biege
outline-none"
      />

      <input
          onChange={(e)=>setFormdata((prev)=>({...prev,email:e.target.value}))}
      value={formData.email}
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
      onChange={(e)=>setFormdata((prev)=>({...prev,password:e.target.value}))}
      value={formData.password}
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

      <button onClick={handleSubmit}  className=" py-3 rounded-xl bg-biege/70
text-black
hover:bg-biege/90 font-medium hover:scale-95 duration-300">
        Create Account
      </button>
<span>
      <p className="text-center ">
        Already have an account? <Link to='/login'><span className='italic hover:underline cursor-pointer'> Login</span></Link>
      </p>
 <Link to='/'> <span className='flex gap-1 items-center justify-center mt-1 text-biege/40 cursor-pointer'><FaArrowLeft className='text-sm' />
 back to home</span></Link>   
</span>
    </div>

  </div>


    </div>
  )
}

export default Signup