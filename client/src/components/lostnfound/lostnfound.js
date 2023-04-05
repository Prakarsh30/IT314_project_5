import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./lostnfound.css";
import { Icon } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DataGrid } from '@mui/x-data-grid';

export default function Lostnfound() {
  
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
        itemID: "1",
        item_name: "Test1",
        ID: "ASBH1",
        date: '29-01-23',
        contact: 'xxxxx xxxxx',
    };

    const item2 = {
        itemID: "2",
        item_name: "Test2",
        ID: "XW31A",
        date: '29-01-23',
        contact: 'yyyyy yyyyy',
    };

    const item3 = {
        itemID: "3",
        item_name: "Test3",
        ID: "A123Z",
        date: '29-01-23',
        contact: 'zzzzz zzzzz',
        
    };

    const newCourier= [item1, item2,item3];

    // form inputs; will be integrated with backend using post and get methods later
    const [itemID, setitemID] = useState("");
    const [name, setitemName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`New item named: ${name} with ID: ${itemID}`);
    }

    return (
    
        <div className="App">
        <body className="AppBody">
        <p align='center'>
        <h2>Lost and Found</h2>
        </p>
        <p align='center'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140}}
        image=""
        title="charger"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lost item
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description of the lost item
        </Typography>
      </CardContent>
        <p align='center'>
        <Button size="small">Claim</Button>
        </p>
        </Card>
        </p>
        <br></br>
        <p>Students are requested to claim lost items from the room of the Hostel Supervisor.</p>
        <br></br>

        {/* form to add new courier
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label class ="label">Item name:
                    <input
                    type="text" 
                    value={name}
                    onChange={(e) => setitemName(e.target.value)}
                    class = "ipBox"/>
                </label>
                <label class ="label">Item Description:
                    <input 
                    type="text" 
                    value={itemID}
                    onChange={(e) => setitemID(e.target.value)}
                    class = "ipBox"/>
                </label>
                <input type="submit" className="button"/>
            </form>
        </div> */}
        <br></br>
        <div>
        <BottomNavigation>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Claim" icon={<CheckCircleIcon/>} />
  <BottomNavigationAction label="Search" icon={<ManageSearchIcon />} />
</BottomNavigation>
        </div>
        <table>
            <thead class = "headerStyle">
                <tr>
                    <th>Index</th>
                    {/* <th>Item ID</th> */}
                    <th>Item Name</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Contacts</th>
                </tr>
            </thead>
            <tbody>
            {
                newCourier.map((data, index)=>{
                    return(
                        <tr key={index} class = "data_entry">
                            {/* <td>{index+1}</td> */}
                            <td>{data.itemID}</td>
                            <td>{data.item_name}</td>
                            <td>{data.date}</td>
                            <td>{data.ID}</td>
                            <td>{data.contact}</td>
                            <td>{data.image}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,height: '2ch', width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <br></br>
    <h5>Enter the lost item here: </h5>
    <br></br>
      <div>
        <TextField
          label="Item Name"
          defaultValue=" "
          variant="standard"
        />
        <TextField
          label="Description"
          defaultValue=" "
          variant="standard"
        />
        <TextField
          label="Date"
          defaultValue=" "
          variant="standard"
        />
        <TextField
          label="Contact number"
          defaultValue=" "
          variant="standard"
        />
        <Button size="small">Upload Photo</Button>
        <p align='right'>
        <Button size="small">Submit</Button>
        </p>
      </div>
    </Box>
        </div>
    <br></br>
    <br></br>

        </body>
        </div>
    );
    
}