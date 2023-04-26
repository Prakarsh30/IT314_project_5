import React from "react";
import Notices from "./Notices";
import Carousels from "./Carousel";
import "./mainpage_style.css"
import Contact_cards from "./Contact_cards";

function Mainpage(){
    return(
        <div className="container">
            {/* <Sidebar/> */}
            <div className="left">
                <Notices/>
                <Contact_cards/>
            </div>
            <div className="right">
                <Carousels/>
            </div>
        </div>
    );
};

export default Mainpage;