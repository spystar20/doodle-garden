const forgotPasswordTemplate = (link) => {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Reset Your Password</h2>
      <p>Click the button below to reset your password:</p>
      <a href="${link}" style="padding: 10px 15px; background: black; color: white; text-decoration:none;">
        Reset Password
      </a>
      <p>This link will expire in <strong>30 minutes</strong>.</p>
    </div>
  `;
};

export default forgotPasswordTemplate;
