import React from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import "./navbar_style.css";

const Navbar = () => {
  return (
    // <nav className="topnav">
    //     <a className="active" href="/">Home</a>
    //     <li>
    //       <a className="alignright" href="/login">Login</a>
    //     </li>
    //   </nav>
    <nav className="navbar">
    <div className="dropdown">
      <button className="dropbtn"><GiHamburgerMenu /></button>
      <div className="dropdown-content">
        <a href="/NoticeBoard">Notice Board</a>
        <a href="/complaints">Complaints</a>
        <a href="/couriers">Couriers</a>
        <a href="/lostnfound">Lost and found</a>

      </div>
    </div>
    <a href="/" className="home-btn">Home</a>
    <a href="/login" className="login-btn">Login</a>
  </nav>
  );
};

// module.exports = Navbar;
export default Navbar;
