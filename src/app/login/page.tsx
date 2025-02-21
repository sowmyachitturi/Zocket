"use client";
import Link from "next/link";
import React from "react";
import "./login.css";


const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Enter your credentials to access your tasks.</p>

        <form className="login-form">
          <input type="text" placeholder="Username" required className="login-input" />
          <input type="password" placeholder="Password" required className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="signup-footer">
        Don't have an account?  
        <Link href="/login/signup" className="signup-link">Sign Up</Link>
      </p>
      </div>
    </div>
  );
};

export default Login;