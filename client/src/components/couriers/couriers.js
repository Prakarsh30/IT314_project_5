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


    // list of all current couriers
    let newCourier;
    
    const [courierList,setCourierList] = useState([]);
    // get all list of current couriers when page is loaded
    document.onreadystatechange = async function() {
        newCourier = (await fetch("http://localhost:5000/couriers")).json();
        
        newCourier.then(async (data) =>  {
            console.log(data)
            await setCourierList(data);
        })
        console.log(courierList);
        console.log("Loaded data");
    };

    // form inputs; will be integrated with backend using post and get methods later
    const [couriedID, setcourierID] = useState("");
    const [name, setName] = useState("");

    const Newitem = {
        student_name: "",
        couriedID: "",
        date: "",
    };

    const handleRedirecting = async (e) => {
        e.preventDefault();

        Newitem.student_name = name;
        Newitem.couriedID = couriedID;

        alert(`New courier for: ${Newitem.student_name} with courier ID: ${Newitem.couriedID}`);

        await Adding(Newitem);
    };

    const Adding = async (Newitem) => {
        const res = await fetch("http://localhost:5000/couriers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Newitem),
        });

        const data = await res.json();

        console.log(data);
    }

    return (
        <div className="App">
        <body className="AppBody">
        
        <h2>Couriers Updates</h2>
        <br></br>
        <p>Students are requested to collect their couriers from the room of Hostel Supervisor within a month of receiving. This List is updated daily. </p>
        <br></br>

        {/* form to add new courier */}
        <div className="form">
            <form>
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
                <input type="submit" className="button" 
                onClick={handleRedirecting}/>
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
                courierList.map((data, index)=>{
                    return(
                        <tr key={index} class = "data_entry">
                            <td>{index+1}</td>
                            <td>{data.couriedID}</td>
                            <td>{data.student_name}</td>
                            <td>{data.RecievedAt}</td>
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