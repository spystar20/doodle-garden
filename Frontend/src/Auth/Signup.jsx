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
   <div className="w-full min-h-screen bg-brand flex items-center justify-center">

  <img
    src="https://i.pinimg.com/736x/e3/2a/fe/e32afea880a4282fd31afb8dea40511e.jpg"
    className="brightness-125 h-full absolute inset-0 object-cover w-full overflow-hidden"
    alt=""
  />

  <div className="absolute w-full inset-0 bg-primary/10 backdrop-blur-xs"></div>

  {/* Sign Up Form */}
  <div
    className="w-full z-[9999] max-w-lg
    lg:w-4/12 flex items-center text-brand justify-center
    p-6 bg-primary/40 rounded-2xl border-2 border-brand/20 backdrop-blur-lg"
  >

    <div className="w-full max-w-md flex flex-col gap-6">

      {/* Heading */}
      <div className="flex flex-col items-center justify-center">

        <h2 className="text-3xl font-semibold mt-4 font-heading">
          Create Account
        </h2>

        <p className="text-brand/60 mt-2 text-center max-w-2xl font-body">
          Join Doodle's Garden and enjoy seamless reservations,
          faster ordering, and exclusive dining experiences.
        </p>

      </div>

      {/* Full Name */}
      <input
        onChange={(e) =>
          setFormdata((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={formData.name}
        type="text"
        placeholder="Full Name"
        className="w-full
        px-4 py-3
        rounded-xl
        bg-secondary/10
        border border-secondary/20
        placeholder:text-brand/70
        text-brand
        outline-none
        font-body"
      />

      {/* Email */}
      <input
        onChange={(e) =>
          setFormdata((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
        value={formData.email}
        type="email"
        placeholder="Email Address"
        className="w-full
        px-4 py-3
        rounded-xl
        bg-secondary/10
        border border-secondary/20
        placeholder:text-brand/70
        text-brand
        outline-none
        font-body"
      />

      {/* Password */}
      <div className="relative">

        <input
          onChange={(e) =>
            setFormdata((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          value={formData.password}
          type={showPassword ? "text" : "password"}
          placeholder="Create a secure password"
          className="w-full
          px-4 py-3 pr-12
          rounded-xl
          bg-secondary/10
          border border-secondary/20
          placeholder:text-brand/70
          text-brand
          outline-none
          font-body"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

      </div>

      {/* Create Account */}
      <button
        onClick={handleSubmit}
        className="py-3 rounded-xl
        bg-brand/70
        text-primary
        hover:bg-brand/90
        font-body
        font-medium
        hover:scale-95
        duration-300"
      >
        Create Account
      </button>

      {/* Login + Home */}
      <span>

        <p className="text-center font-body">
          Already have an account?

          <Link to="/login">
            <span className="italic hover:underline cursor-pointer ml-1">
              Login
            </span>
          </Link>
        </p>

        <Link to="/">
          <span className="flex gap-1 items-center justify-center mt-1 text-brand/40 cursor-pointer font-body">
            <FaArrowLeft className="text-sm" />
            back to home
          </span>
        </Link>

      </span>

    </div>

  </div>

</div>
  )
}

export default Signup