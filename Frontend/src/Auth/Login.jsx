import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const {mutate:useLogin}=useLogin()
  const {fetchAuth}=useContext()
  const [showPassword, setShowPassword] = useState(false);
 const [ formData,setFormData]=useState({email:'',password:''})
 const handleSubmit = ()=>{
  useLogin(formData,
    {
      onSucess:async()=>{
        await fetchAuth()
      }
    }
  )
 }
   return (
   <div className="w-full min-h-screen bg-brand flex items-center justify-center">
  <img
    src="https://i.pinimg.com/736x/58/53/88/585388a1e2740eb3c48fe316cc43ff0f.jpg"
    className="brightness-125 h-full absolute inset-0 object-cover w-full overflow-hidden"
    alt=""
  />

  <div className="absolute w-full inset-0 bg-primary/10 backdrop-blur-xs"></div>

  {/* Login Form */}
  <div className="w-full z-[9999] max-w-lg lg:w-4/12 flex items-center text-brand justify-center p-6 bg-primary/40 rounded-2xl border-2 border-brand/20 backdrop-blur-lg">
    <div className="w-full max-w-md flex flex-col gap-6">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mt-4 font-heading">
          Welcome Back
        </h2>

        <p className="text-brand/60 mt-2 text-center max-w-2xl font-body">
          Sign in to manage your reservations, track your orders, and enjoy the
          Doodle's Garden experience.
        </p>
      </div>

      {/* Email */}
      <input
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-xl bg-secondary/10 border border-secondary/20 placeholder:text-brand/70 text-brand outline-none font-body"
      />

      {/* Password */}
      <div className="relative">
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          type={showPassword ? "text" : "password"}
          placeholder="Create a secure password"
          className="w-full px-4 py-3 pr-12 rounded-xl bg-secondary/10 border border-secondary/20 placeholder:text-brand/70 text-brand outline-none font-body"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Login */}
      <button
        onClick={handleSubmit}
        className="py-3 rounded-xl bg-brand/70 text-primary hover:bg-brand/90 font-body font-medium hover:scale-95 duration-300"
      >
        Login
      </button>

      {/* Links */}
      <span>
        <p className="text-center font-body">
          Don't have an account?

          <Link to="/sign-in">
            <span className="italic hover:underline cursor-pointer ml-1">
              Create Account
            </span>
          </Link>
        </p>

        <Link to="/">
          <span className="flex gap-1 items-center justify-center mt-1 text-brand/40 cursor-pointer font-body">
            <FaArrowLeft className="text-sm mt-1" />
            back to home
          </span>
        </Link>
      </span>
    </div>
  </div>
</div>
   )
}

export default Login