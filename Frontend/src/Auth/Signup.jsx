import React from 'react'

const Signup = () => {
  return (
    <div className='w-full min-h-screen bg-biege flex items-center justify-center'>
    
        <img src="https://i.pinimg.com/736x/e3/2a/fe/e32afea880a4282fd31afb8dea40511e.jpg" className='brightness-125  h-full absolute inset-0 object-cover w-full overflow-hidden ' alt="" />
      <div className='absolute  w-full inset-0 bg-black/10 backdrop-blur-xs'></div>


  {/* Right Form */}
  <div className="w-full z-[9999] max-w-lg
  lg:w-4/12 flex items-center text-biege justify-center p-6 bg-black/40 rounded-2xl border-2 border-biege/20 backdrop-blur-lg">
    
    <div className="w-full max-w-md flex flex-col gap-6">

      <div>
        <h1 className="text-5xl font-[Imperial_Script]">
          doodle's garden
        </h1>

        <h2 className="text-3xl font-semibold mt-4 font-[Outfit]">
          Create Account
        </h2>

        <p className="text-black/60 mt-2">
          Join us and start exploring delicious dishes.
        </p>
      </div>

      <input
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

      <input
        type="password"
        placeholder="Password"
 className="w-full
px-4 py-3
rounded-xl
bg-white/10
border border-white/20
placeholder:text-biege/70
text-biege
outline-none"      />

      <button className=" py-3 rounded-xl bg-biege
text-black
hover:bg-biege/90 font-medium hover:scale-95 duration-300">
        Create Account
      </button>

      <p className="text-center text-black/70">
        Already have an account? Login
      </p>

    </div>

  </div>


    </div>
  )
}

export default Signup