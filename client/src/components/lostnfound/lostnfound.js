import React, { useState } from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import "./lostnfound.css";

export default function Lostnfound() {

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
    const [itemname, setName] = useState("");
    const [studentid, setStudentid] = useState("");
    const [contact, setContact] = useState("")
    const [description, setDescription] = useState("")

    const Newitem = {
        itemname: "",
        studentid: "",
        contact: "",
        description: "",
        date: "",
    };

    const handleRedirecting = async (e) => {
        e.preventDefault();

        Newitem.itemname = itemname;
        Newitem.studentid = studentid;
        Newitem.contact = contact;
        Newitem.description = description;
        alert(`New item named: ${Newitem.itemname} added to the list`);

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
    const card1 = (
      <div class="card1">
      <React.Fragment>
        <CardContent>
           <h4>Lost and Found Instructions:</h4>
          The students are requested to collect the missing items from the hostel supervisor's office. The contact information of the reporter is shared in the table.
        </CardContent>
      </React.Fragment>
      </div>
    );

const card2 = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <h6>Found a lost item? Fill out the form below!</h6>
          </Typography>
        </CardContent>
      </React.Fragment>
    );

    const card3 = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <h5>Looking for a lost item? Check out the table below!</h5>
          </Typography>
        </CardContent>
      </React.Fragment>
    );

    return (
        <body>
        <br></br>
        <Box sx={{ minWidth: 275 }}>
      <Card>{card1}</Card>
    </Box>
        <br></br>
        <div class="container">
        <div class="leftpane">
        {/* form to add new courier */}
        <Box sx={{ minWidth: 275 }}>
      <Card>{card2}</Card>
    </Box>
    <br></br>
        <div className="lostnfound_form">
            <form>
                <label class ="lostnfound_label">Item name :
                    <input
                    type="text" 
                    value={itemname}
                    onChange={(e) => setName(e.target.value)}
                    class = "lostnfound_ipBox"/>
                </label>
                <label class ="lostnfound_label">Student ID : 
                    <input 
                    type="text" 
                    value={studentid}
                    onChange={(e) => setStudentid(e.target.value)}
                    class = "lostnfound_ipBox"/>
                </label>
                <label class ="lostnfound_label">Student Contact : 
                    <input 
                    type="text" 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    class = "lostnfound_ipBox"/>
                </label>
                <label class ="lostnfound_label">Item Description : 
                    <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class = "lostnfound_ipBox"/>
                </label>
                <input type="submit" className="lostnfound_button" 
                onClick={handleRedirecting}/>
            </form>
        </div>
        </div>
        <br></br>
        <div class="middlepane">
        <Box sx={{ minWidth: 275 }}>
      <Card>{card3}</Card>
    </Box>
    <br></br>
        <table>
            <thead class = "lostnfound_headerStyle">
                <tr>
                    <th>Index</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Student ID</th>
                    <th>Student Contact</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {
                courierList.map((data, index)=>{
                    return(
                        <tr key={index} class = "lostnfound_data_entry">
                            <td>{index+1}</td>
                            <td>{data.itemname}</td>
                            <td>{data.description}</td>
                            <td>{data.studentid}</td>
                            <td>{data.contact}</td>
                            <td>{data.RecievedAt}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </div>
        </div>
        </body>
        
    );
    
}