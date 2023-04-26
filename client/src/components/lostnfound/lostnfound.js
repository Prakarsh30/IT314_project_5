import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./lostnfound.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";

const get = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
export default function Lostnfound() {
  let Lostnfound;

  const [lostnfound, setlostnfound] = useState([]);
  // get all list of current couriers when page is loaded
  document.onreadystatechange = async function () {
    Lostnfound = (await fetch("http://localhost:5000/lostnfound")).json();

    Lostnfound.then(async (data) => {
      // console.log(data);
      await setlostnfound(data);
    });
    // console.log(lostnfound);
    // console.log("Loaded data");
  };

  // form inputs; will be integrated with backend using post and get methods later
  const [itemname, setName] = useState("");
  const [studentid, setStudentid] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const Newitem = {
    itemname: "",
    studentid: "",
    contact: "",
    description: "",
    status: "",
  };

  const handleRedirecting = async (e) => {
    e.preventDefault();
    console.log("Redirecting");
    Newitem.itemname = itemname;
    Newitem.studentid = studentid;
    Newitem.contact = contact;
    Newitem.description = description;
    Newitem.status = status;
    alert(
      `New ${Newitem.status} item named: ${Newitem.itemname} added to the list`
    );

    await Adding(Newitem);
    window.location.reload();
  };

  const handleDelete = async (f) => {
    console.log("Deleting");
    const res = await fetch(`http://localhost:5000/lostnfound/${f}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    },{mode: 'no-cors'});
    console.log(res);
    window.location.reload();
  };
  

  const handleEdit = async (f) => {
    // Function to edit
  };

  const Adding = async (Newitem) => {
    console.log("Adding");
    const res = await fetch("http://localhost:5000/lostnfound", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Newitem),
    });

    const data = await res.json();
    console.log("Pp");
    console.log(data);
  };

  // Table data

  // const lostnfoundData = [
  //     {
  //         "index":"1",
  //         "itemname":"Pen"
  //     },
  //     {
  //         "index":"2",
  //         "itemname":"Gun"
  //     },
  // ];

  //Done

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
const role = get("role");

// function table_sort() {
//   const styleSheet = document.createElement('style')
//   styleSheet.innerHTML = `
//           .order-inactive span {
//               visibility:hidden;
//           }
//           .order-inactive:hover span {
//               visibility:visible;
//           }
//           .order-active span {
//               visibility: visible;
//           }
//       `
//   document.head.appendChild(styleSheet)

//   document.querySelectorAll('th.order').forEach(th_elem => {
//       let asc = true
//       const span_elem = document.createElement('span')
//       span_elem.style = "font-size:0.8rem; margin-left:0.5rem"
//       span_elem.innerHTML = "▼"
//       th_elem.appendChild(span_elem)
//       th_elem.classList.add('order-inactive')

//       const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
//       th_elem.addEventListener('click', (e) => {
//       document.querySelectorAll('th.order').forEach(elem => {
//           elem.classList.remove('order-active')
//           elem.classList.add('order-inactive')
//       })
//       th_elem.classList.remove('order-inactive')
//       th_elem.classList.add('order-active')

//       if (!asc) {
//           th_elem.querySelector('span').innerHTML = '▲'
//       } else {
//           th_elem.querySelector('span').innerHTML = '▼'
//       }
//       const arr = Array.from(th_elem.closest("table").querySelectorAll('tbody tr'))
//       arr.sort((a, b) => {
//           const a_val = a.children[index].innerText
//           const b_val = b.children[index].innerText
//           return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
//       })
//       arr.forEach(elem => {
//           th_elem.closest("table").querySelector("tbody").appendChild(elem)
//       })
//       asc = !asc
//       })
//   })
// }

//table_sort()



  return (
    <body>
      <Stack
        className="university-card"
        marginLeft={39}
        marginTop={3}
        alignItems={"center"}
      >
        <h2>Lost and Found</h2>
        <h5>Report and check your items here.</h5>
      </Stack>
      <br></br>
      <div class="container">
        <div class="leftpane2">
          <Box sx={{ minWidth: 275 }}>
            <Card>{card2}</Card>
          </Box>
          <br></br>
          <div className="lostnfound_form ps-4">

            <form>

              <TextField
                id="outlined-basic"
                required
                label="Item Name"
                variant="filled"
                value={itemname}
                size="small"
                inputProps={{ maxLength: 12 }}
                
                
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>
              <br></br>
              <TextField
                id="outlined-basic"
                required
                label="Student ID"
                variant="filled"
                value={studentid}
                size="small"
                inputProps={{ maxLength: 12 }}
                onChange={(e) => setStudentid(e.target.value)}
              />
              <br></br>
              <br></br>
              <TextField
                id="outlined-basic"
                required
                label="Student Contact"
                variant="filled"
                value={contact}
                size="small"
                inputProps={{ maxLength: 12 }}
                onChange={(e) => setContact(e.target.value)}
              />
              <br></br>
              <br></br>
              <TextField
                id="outlined-basic"
                required
                label="Item Description"
                variant="filled"
                value={description}
                size="small"
                inputProps={{ maxLength: 20 }}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br></br>
              <br></br>
              <label class="lostnfound_label">
                <h6>Item status</h6>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="radio-buttons-group"
                  row
                  required
                >
                  <FormControlLabel
                    value="lost"
                    control={<Radio />}
                    onChange={() => setStatus("lost")}
                    label="Lost"
                  />
                  <FormControlLabel
                    value="found"
                    control={<Radio />}
                    onChange={() => setStatus("found")}
                    label="Found"
                  />
                </RadioGroup>
              </label>
              <br></br>
              <Button
                variant="contained"
                className="lostnfound_button"
                onClick={handleRedirecting}
              >
                submit
              </Button>
            </form>
          </div>
        </div>
        <div class="somepane"></div>
        <div class="middlepane">
          <Box sx={{ minWidth: 275 }}>
            <Card>{card3}</Card>
          </Box>
          <br></br>
          <div class="middlepane2">
            <div class="table_css">
              <table>
                <thead class="lostnfound_headerStyle">
                  <tr>
                    <th>Index</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
                    <th>Student ID</th>
                    <th>Student Contact</th>
                    <th>Status</th>
                    <th>Date Created</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {lostnfound.map((data, index) => {
                    return (
                      <tr key={index} class="lostnfound_data_entry">
                        <td>{index + 1}</td>
                        <td>{data.itemname}</td>
                        <td>{data.description}</td>
                        <td>{data.studentid}</td>
                        <td>{data.contact}</td>
                        <td>{data.status}</td>
                        <td>{data.createdAt.substring(0, 10)}</td>
                        <td>
                        {role=="admin"&&(<td className="tdb"> 
                        <Button variant="text" onClick={()=>handleDelete(data._id)}
                        className="button2">
                          <DeleteIcon />
                        </Button></td>)}

                        </td>
      
                      </tr>
                    );
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
