import React from "react";
import "./styles.css";
import { Navigate, useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <main className="main">
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li className="active">
              <a href="/NoticeBoard">Notices</a>
            </li>
            <li>
              <a href="/complaints">Complaints</a>
            </li>
            <li>
              <a href="/couriers">Couriers</a>
            </li>
            <li>
              <a href="/lostnfound">Lost & Found</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* <section className="section--container">
        <div className="container">
          <p>Hey! its me</p>
        </div>
      </section> */}
    </main>
  );
};

// module.exports = Navbar;
export default Sidebar;
