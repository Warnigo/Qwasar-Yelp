import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../config/firebase';
import '../styles/forgotPassword.css'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="forgot-password">
      <form onSubmit={handleResetPassword}>
        <h2 className="forgot-password-title">Forgot Password</h2>
        {emailSent ? (
          <p>Password reset email sent. Check your inbox.</p>
        ) : (
          <>
            <label>
              <input 
                className="form-control"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <Link to={"/"} className="change-log">Login back</Link>
            <button type="submit" className="reset-password-button">
              Reset Password
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
