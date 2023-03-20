import React from "react";
import "./navbar_style.css";

const Navbar = () => {
  return (
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#login">Log In</a>
      </div>
  );
};

// module.exports = Navbar;
export default Navbar;
