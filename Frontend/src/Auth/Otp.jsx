import React, { useRef, useState } from "react";
import auth from "../assets/auth.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  // Auto-forward on typing
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Paste support
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = Array(6).fill("");
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
    inputsRef.current[Math.min(pasted.length, 6) - 1].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      alert("Please enter complete OTP");
      return;
    }

    if (!email) {
      alert("Email missing. Please sign up again.");
      navigate("/sign");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/auth/verify-otp",
        { email, otp: otpValue },
        { withCredentials: true }
      );
      await axios.post("http://localhost:3000/auth/send-email-link",{email},{withCredentials:true})
      if (res.data.success) {
        navigate("/verify-email");
      }
    } catch (err) {
      console.log(err.response?.data?.message);
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onPaste={handlePaste}>
      <div className="w-full bg-[#fffff0]">
        <div className="flex items-center">
          <div className="w-[35%] bg-black h-[100vh] flex items-center">
            <div className="w-[6%]">
              <h1 className="text-[#fffff0] relative top-11 text-[8rem] font-black uppercase">
                Fresh. Fun. Flavor.
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6 justify-center items-center relative w-full">
            <div className="flex flex-col gap-3 items-center justify-center text-black">
              <h2 className="md:text-5xl capitalize text-4xl font-semibold font-[Imperial_Script]">
                Verify your email address
              </h2>
              <p className="font-outfit w-[50vw] text-center text-xs md:px-32 md:text-lg">
                We’ve sent a 6-digit verification code to
                <br />
                <b>kh*@gmail.com</b>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-[60%] lg:w-[70%] md:w-[50%] gap-12 p-10 rounded-xl">
              <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 w-[80%] gap-2 self-center">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      value={value}
                      type="text"
                      maxLength="1"
                      inputMode="numeric"
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="bg-blend-color-burn p-5 bg-gray-950 rounded-full text-lg font-[Outfit] outline-none shadow-2xl text-white text-center"
                    />
                  ))}
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="mt-8 bg-black text-white px-10 py-3 rounded-full"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
