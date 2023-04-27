import * as React from "react";
import { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./navbar_style.css";
import { Credentials } from "../../App";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // let navigate = useNavigate();

  const { isLoggedIn, setisLoggedIn } = useContext(Credentials);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const remove = (key1, key2) => {
    // console.log(namestr);
    localStorage.clear();
    localStorage.removeItem(key1);
    localStorage.removeItem(key2);
    removeCookie("email", { path: "/" });
    // cookies.removeCookie("role");
    // window.location.reload();

    setEmail(null);
    setRole(null);
    setisLoggedIn(false);
    // window.location.reload();
    window.location.replace("/");
    // navigate("/");
    console.log("km", cookies.email, isLoggedIn);
  };

  const get = (keyName) => {
    const data = localStorage.getItem(keyName);
    if (!data) {
      // if no value exists associated with the key, return null
      return null;
    }
    const item = JSON.parse(data);
    // if (Date.now() > item.ttl) {
    //   localStorage.removeItem(keyName);
    //   return null;
    // }
    return item.value;
  };
  const runthis = async () => {
    setEmail(cookies.email);
    cookies.email && setisLoggedIn(true);
    console.log(";;", cookies.email);
  };
  useEffect(() => {
    runthis();
  }, []);
  const openNav = () => {
    console.log("Opened");
    document.getElementById("mySidebar").style.width = "25%";
  };

  const closeNav = async () => {
    document.getElementById("mySidebar").style.width = "0";
  };
  console.log("Nav", isLoggedIn);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#146C94" }}>
          <Toolbar style={{ minHeight: "7vh" }}>
            {isLoggedIn && (
              <div className="dropdown">
                {isLoggedIn && (
                  <IconButton
                    size="large"
                    align="left"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    className="dropbtn"
                    onClick={openNav}
                  >
                    <MenuIcon />
                  </IconButton>
                )}

                <div id="mySidebar" className="sidebar">
                  <a
                    href="javascript:void(0)"
                    class="closebtn"
                    onClick={closeNav}
                  >
                    ×
                  </a>
                  <a href="/">Home</a>
                  <a href="/NoticeBoard">Notice Board</a>
                  <a href="/complaints">Complaints</a>
                  <a href="/couriers">Couriers</a>
                  <a href="/lostnfound">Lost and found</a>
                </div>
              </div>
            )}

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="center"
            >
              <a href="/">Hostel Management System</a>
            </Typography>

            {isLoggedIn && (
              <div className="dropdown-right">
                <button className="dropbtn-right">
                  {email.substring(0, email.indexOf("@"))}
                </button>
                <div className="dropdown-right-content">
                  <a
                    href="#"
                    onClick={() => {
                      remove("role", "email");
                    }}
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
            {!isLoggedIn && (
              <a href="/login" className="login-btn">
                Login
              </a>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

// module.exports = Navbar;
export default Navbar;

// import React from "react";
// import {GiHamburgerMenu} from "react-icons/gi"
// import "./navbar_style.css";

// export default function Navbar () {

//     const openNav = () => {
//       console.log('Opened');

//       document.getElementById("mySidebar").style.width = "25%";
//     }

//     const closeNav = async () => {
//       document.getElementById("mySidebar").style.width = "0";
//     }

//   return (
//     <>
//     <nav className="navbar">

//     <div id="main">
//       <button className="openbtn" onClick={openNav}><GiHamburgerMenu/></button>
//       <a href="/" className="home-btn">Hall of Residence</a>
//       <a href="/login" className="login-btn">Login</a>
//     </div>
//     <div id="mySidebar" className="sidebar">
//         <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
//         <a href="/NoticeBoard">Notice Board</a>
//         <a href="/complaints">Complaints</a>
//         <a href="/couriers">Couriers</a>
//         <a href="/lostnfound">Lost and found</a>
//     </div>

//     </nav>
//     </>
//   );
// };
