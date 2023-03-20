import React from "react";
import "./navbar_style.css";

const Navbar = () => {
  return (
    <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
  );
};

// module.exports = Navbar;
export default Navbar;
