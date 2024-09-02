import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-context";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <button onClick={() => toggleTheme()}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
