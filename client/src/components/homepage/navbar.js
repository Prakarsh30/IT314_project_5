import React from "react";
import "./navbar_style.css";

const Navbar = () => {
  return (
    <nav className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#login">Log In</a>
      </nav>
  );
};

// module.exports = Navbar;
export default Navbar;
