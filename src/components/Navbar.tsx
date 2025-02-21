import React from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>AI Task Manager</h1>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;