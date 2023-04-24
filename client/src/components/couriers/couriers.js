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
    const [room, setRoom] = useState("");

    const Newitem = {
        student_name: "",
        couriedID: "",
        room: "",
        date:"",
    };

    const handleRedirecting = async (e) => {
        e.preventDefault();

        Newitem.student_name = name;
        Newitem.couriedID = couriedID;
        Newitem.room = room;

        alert(`New courier for: ${Newitem.student_name} with courier ID: ${Newitem.couriedID}, Room No.: ${Newitem.room}`);

        await Adding(Newitem);
        window.location.reload();
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

    const deleteEntry = async(_id) =>{
        console.log(_id);
        const res = await fetch(`http://localhost:5000/couriers/${_id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        },
        }, { mode: 'no-cors'});
        console.log('deleted!');
        window.location.reload();
    }

    return (
        <div className="App">
        <body>
        <div className="inBlock">
        <h2>Couriers Updates</h2>
        <br></br>
        <p>Students are requested to collect their couriers from the room of Hostel Supervisor within a month of receiving. This List is updated daily. </p>
        <br></br>

        {/* form to add new courier */}
        <div className="formblock">
            <form>
                <label class ="label">Student name:
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class = "ipBox"/>
                </label>
                <label class ="label">Room Number:
                    <input
                    type="text" 
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
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
                    <th>Student Name</th>
                    <th>Room No.</th>
                    <th>Courier ID</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                courierList.map((data, index)=>{
                    return(
                        <tr key={index} class = "data_entry">
                            <td>{index+1}</td>
                            <td>{data.student_name}</td>
                            <td>{data.room}</td>
                            <td>{data.couriedID}</td>
                            <td>{data.RecievedAt}</td>
                            <td className="tdb"> <button onClick={()=>deleteEntry(data._id)} className="button2">Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
        </body>
        </div>
    );
    
}