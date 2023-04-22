import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./courier_styles.css";


export default function CourierPage() {


    let navigate = useNavigate();

    // classify based on role. Provide chance to admin to add new couriers. Allow students to view
    // const { state_ip } = this.props.location
    // const role = this.state_ip.curruser.role;
    // console.log(role);


    
    // get requets to get list of all request.
    // print list.

    const [courier_item, setItems] = useState("");

    // structure of data entry and method to post data

    // using static json data object to print table and get the layout of table and the couriers page
    
    const item1 = {
        couriedID: "1",
        student_name: "Test1",
        ID: "ASBH1",
        date: '29-01-23',
    };

    const item2 = {
        couriedID: "2",
        student_name: "Test2",
        ID: "XW31A",
        date: '29-01-23',
    };

    const item3 = {
        couriedID: "3",
        student_name: "Test3",
        ID: "A123Z",
        date: '29-01-23',
    };

    const newCourier= [item1, item2,item3];

    // form inputs; will be integrated with backend using post and get methods later
    const [couriedID, setcourierID] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`New courier for: ${name} with courier ID: ${couriedID}`);
    }

    return (
    
        <div className="App">
        <body className="AppBody">
        
        <h2>Couriers Updates</h2>
        <br></br>
        <p>Students are requested to collect their couriers from the room of Hostel Supervisor within a month of receiving. This List is updated daily. </p>
        <br></br>

        {/* form to add new courier */}
        <div className="courierform">
            <form onSubmit={handleSubmit}>
                <label class ="label">Student name:
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class = "ipBox"/>
                </label>
                <label class ="label">Courier ID:
                    <input 
                    type="text" 
                    value={couriedID}
                    onChange={(e) => setcourierID(e.target.value)}
                    class = "ipBox"/>
                </label>
                <input type="submit" className="button"/>
            </form>
        </div>
        <br></br>
        <table>
            <thead class = "headerStyle">
                <tr>
                    <th>Index</th>
                    <th>Courier ID</th>
                    <th>Student Name</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {
                newCourier.map((data, index)=>{
                    return(
                        <tr key={index} class = "data_entry">
                            <td>{index+1}</td>
                            <td>{data.ID}</td>
                            <td>{data.student_name}</td>
                            <td>{data.date}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </body>
        </div>
    );
    
}