import React, { useState, useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar_style.css";
import { Credentials } from "../../App";

const Navbar = () => {
  const { isLoggedIn, setisLoggedIn } = useContext(Credentials);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const remove = (key1, key2) => {
    // console.log(namestr);
    localStorage.clear();
    localStorage.removeItem(key1);
    localStorage.removeItem(key2);
    setEmail(null);
    setRole(null);
    setisLoggedIn(false);
    console.log(get("role"));
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
  // const name = get("email");
  let index;
  let namestr;
  // if (isLoggedIn) {
  // }
  const runthis = async () => {
    setEmail(get("email"));
  };
  useEffect(() => {
    runthis();
  }, [isLoggedIn]);

  console.log("Nav", isLoggedIn);
  return (
    <>
      <nav className="navbar">
        <div className="dropdown">
          <button className="dropbtn">
            <GiHamburgerMenu />
          </button>
          <div className="dropdown-content">
            <a href="/NoticeBoard">Notice Board</a>
            <a href="/complaints">Complaints</a>
            <a href="/couriers">Couriers</a>
            <a href="/lostnfound">Lost and found</a>
          </div>
        </div>
        <a href="/" className="home-btn">
          Home
        </a>
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
      </nav>
    </>
  );
};

// module.exports = Navbar;
export default Navbar;
