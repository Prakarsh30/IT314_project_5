import React from "react";
import "./navbar_style.css";

const Navbar = () => {
  return (
    <nav className="topnav">
        <a className="active" href="/">Home</a>
        <li>
          <a className="alignright" href="/login">Login</a>
        </li>
      </nav>
  );
};

// module.exports = Navbar;
export default Navbar;
