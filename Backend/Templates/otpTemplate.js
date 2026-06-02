export default function otptemplate(otp){
   return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Your OTP Code</h2>
      <p style="font-size: 18px;">Use the OTP below to continue:</p>
      <h1 style="background: #f2f2f2; padding: 10px; display: inline-block;">
        ${otp}
      </h1>
      <p>This OTP will expire in <strong>10 minutes</strong>.</p>
    </div>
  `
}