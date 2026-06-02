const emailTemplate =(link)=>{
    return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Verify Your Email</h2>
      <p>Click the button below to verify your email address.</p>
      <a href="${link}" style="padding: 10px 15px; background: black; color: white; text-decoration:none;">
        Verify Email
      </a>
    </div>
  `
}
export default emailTemplate