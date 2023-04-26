import React from "react";
import Notices from "./Notices";
import Carousels from "./Carousel";
import "./mainpage_style.css"
import Contact_cards from "./Contact_cards";
import Footer from "../footer/Footer";

function Mainpage(){
    return(
        <body>
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
        <Footer/>
        </body>
    );
};

export default Mainpage;