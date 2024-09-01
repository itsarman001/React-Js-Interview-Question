import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <button>Dark Mode</button>
    </nav>
  );
}

export default Navbar;
