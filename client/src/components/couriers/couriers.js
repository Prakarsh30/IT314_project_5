import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./courier_styles.css";
import SendIcon from "@mui/icons-material/Send";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useCookies } from "react-cookie";
import Footer from "../footer/Footer";

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

export default function CourierPage() {
  let navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);

  // classify based on role. Provide chance to admin to add new couriers. Allow students to view
  // const { state_ip } = this.props.location
  // const role = this.state_ip.curruser.role;
  // console.log(role);

  // list of all current couriers
    let newCourier;

    const [courierList, setCourierList] = useState([]);
  // get all list of current couriers when page is loaded
    document.onreadystatechange = async function () {
    newCourier = (await fetch("http://localhost:5000/couriers")).json();

    newCourier.then(async (data) => {
        console.log(data);
        await setCourierList(data);
        await setFilter(data);
        });
        console.log(courierList);
        console.log("Loaded data");
    };

    // form inputs; will be integrated with backend using post and get methods later
    const [couriedID, setcourierID] = useState("");
    const [filter, setFilter] = useState([]);
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const Newitem = {
        student_name: "",
        couriedID: "",
        room: "",
        date: "",
    };

    const handleRedirecting = async (e) => {
        e.preventDefault();

        Newitem.student_name = name;
        Newitem.couriedID = couriedID;
        Newitem.room = room;

        alert(
            `New courier for: ${Newitem.student_name} with courier ID: ${Newitem.couriedID}, Room No.: ${Newitem.room}`
        );

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

        if(res.status != 200){
            alert(`${data.message}`);
        }
    };

  const deleteEntry = async (_id) => {
    console.log(_id);
    const res = await fetch(
      `http://localhost:5000/couriers/${_id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      },
      { mode: "no-cors" }
    );
    console.log("deleted!");
    window.location.reload();
  };
  const role = cookies.role;

    const requestSearch = (searchedVal) => {
        const filteredRows = courierList.filter((row) => {
        return row.student_name
            .toString()
            .toLowerCase()
            .includes(searchedVal.toString().toLowerCase());
        });
        if (searchedVal.length < 1) {
        setFilter(courierList);
        } else {
        setFilter(filteredRows);
        }
    }

  return (
    <html>
      <body>
        <div className="App">
     
       
          <div className="inBlock">
            <h2>Couriers Updates</h2>
            <br></br>

            <p id="myPara" className="desc">
              Students are requested to collect their couriers from the room of
              Hostel Supervisor within a month of receiving. This List is
              updated daily.{" "}
            </p>
            <br></br>

            {/* load search input */}
            {role == "student" && (
              <h3>
                <span>Filter Table Data</span>
                <input
                  type="search"
                  placeholder="Search Name..."
                  class="form-control search-input"
                  data-table="students-list"
                  onChange={(e) => requestSearch(e.target.value)}
                />
              </h3>
            )}

            {role == "admin" && (
              <h3>As admin you can add new couriers to list</h3>
            )}
            <br></br>
            {/* form to add new courier */}
            {role == "admin" && (
              <div className="formblock">
                <form>
                  <label class="label">
                    Student name:
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      class="ipBox"
                    />
                  </label>
                  <label class="label">
                    Room Number:
                    <input
                      type="text"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      class="ipBox"
                    />
                  </label>
                  <label class="label">
                    Courier ID:
                    <input
                      type="text"
                      value={couriedID}
                      onChange={(e) => setcourierID(e.target.value)}
                      class="ipBox"
                    />
                  </label>
                  <Button variant="contained" onClick={handleRedirecting}>
                    <SendIcon />
                  </Button>
                </form>
              </div>
            )}
            <br></br>
            <table id="myTable">
              <thead class="headerStyle">
                <tr>
                  <th class="order">Index</th>
                  <th class="order">Student Name</th>
                  <th>Room No.</th>
                  <th>Courier ID</th>
                  <th>Date</th>
                  {role == "admin" && <th>Delete</th>}
                </tr>
              </thead>
              <tbody id="geeks">
                {filter.map((data, index) => {
                  return (
                    <tr key={index} class="data_entry">
                      <td>{index + 1}</td>
                      <td>{data.student_name}</td>
                      <td>{data.room}</td>
                      <td>{data.couriedID}</td>
                      <td>{data.RecievedAt}</td>
                      {role == "admin" && (
                        <td className="tdb">
                          {" "}
                          <Button
                            variant="contained"
                            onClick={() => deleteEntry(data._id)}
                            sx={{ opacity: "0%" }}
                          >
                            <DeleteOutlineOutlinedIcon />
                          </Button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        
      
        </div>
        <Footer/>

      </body>
    </html>
    );
};
