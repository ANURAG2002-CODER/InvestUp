import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#0f2642", minHeight: "50px" }}>
      <ul style={{ paddingTop: "20px" }}>
        <li>
          <Link to="/" style={{ color: "#ffffff" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ color: "#ffffff" }}>
            Login/Logouts
          </Link>
        </li>
        <li>
          <Link to="/dashboard" style={{ color: "#ffffff" }}>
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
