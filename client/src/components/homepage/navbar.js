import React from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import "./navbar_style.css";

export default function Navbar () {

    const openNav = () => {
      console.log('Opened');

      document.getElementById("mySidebar").style.width = "25%";
    }

    const closeNav = async () => {
      document.getElementById("mySidebar").style.width = "0";
    }

  return (
    <>
    <nav className="navbar">
      
    <div id="main">
      <button className="openbtn" onClick={openNav}><GiHamburgerMenu/></button>
      <a href="/" className="home-btn">Hall of Residence</a>
      <a href="/login" className="login-btn">Login</a>
    </div>
    <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
        <a href="/NoticeBoard">Notice Board</a>
        <a href="/complaints">Complaints</a>
        <a href="/couriers">Couriers</a>
        <a href="/lostnfound">Lost and found</a>
    </div>

    </nav>
    </>
  );
};

