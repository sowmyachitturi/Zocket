"use client";
import React from "react";
import Link from "next/link";
import "./signup.css";

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <p className="signup-subtitle">Create an account to manage your tasks.</p>

        <form className="signup-form">
          <input type="text" placeholder="Username" required className="signup-input" />
          <input type="email" placeholder="Email" required className="signup-input" />
          <input type="password" placeholder="Password" required className="signup-input" />
          <input type="password" placeholder="Confirm Password" required className="signup-input" />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="signup-footer">
        Already have an account?  
        <Link href="/login" className="login-link">Login</Link>
      </p>
      </div>
    </div>
  );
};

export default SignUp;
