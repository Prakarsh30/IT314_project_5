import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Notices from "./Notices";
import CourierBoard from "./Courier_board";
import Carousels from "./Carousel";
import "./mainpage_style.css"
import Footer from "../footer/Footer";

function Mainpage(){
    return(
        <body>
        <div className="container">
            {/* <Sidebar/> */}
            <div className="left">
                <Notices/>
                <CourierBoard/>
            </div>
            <div className="right">
                <Carousels/>
            </div>
        </div>
        <Footer/>
        </body>
    );
};

export default Mainpage;