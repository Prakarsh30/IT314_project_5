import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Notices from "./Notices";
import CourierBoard from "./Courier_board";
import Carousels from "./Carousel";
import "./mainpage_style.css"

function Mainpage(){
    return(
        <div className="container">
            {/* <Sidebar/> */}
            <div>
                <Notices/>
                <div style={{marginTop: '10px'}}>
                    <CourierBoard/>
                </div>
            </div>
            <div>
                <Carousels/>
            </div>
        </div>
    );
};

export default Mainpage;