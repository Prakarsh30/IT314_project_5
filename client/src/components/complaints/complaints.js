import React, { useEffect } from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import Footer from "../footer/Footer";
import "./complaints.css";
import { useCookies } from "react-cookie";
const set = (key, value, expiry) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expiry,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Here is my model file

// const mongoose = require("mongoose");

// const complaints = mongoose.Schema({
//   title: String,
//   message: String,
//   creator: String,
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
//   likeCount: {
//     type: Number,
//     default: 1,
//   },
//   dislikeCount: {
//     type: Number,
//     default: 0,
//   },
// });

// const complaintMessage = mongoose.model("complaintMessage", complaints);

// module.exports = complaintMessage;

const Complaints = () => {
  const [open, setOpen] = React.useState(false);
  const [complaints, setComplaints] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [creator, setCreator] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editCreator, setEditCreator] = useState("");
  const [editAlert, setEditAlert] = useState(false);
  const [editAlertMessage, setEditAlertMessage] = useState("");
  const [editAlertType, setEditAlertType] = useState("");
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [deleteAlertMessage, setDeleteAlertMessage] = useState("");
  const [deleteAlertType, setDeleteAlertType] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteCreator, setDeleteCreator] = useState("");
  const [cookies, setCookies] = useCookies(["user"]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEdit(false);
  };

  const handleDeleteClose = () => {
    setDeleteAlert(false);
  };

  const handleEditOpen = (id, title, message, creator) => {
    setEdit(true);
    setEditId(id);
    setEditTitle(title);
    setEditMessage(message);
    setEditCreator(creator);
  };

  const handleDeleteOpen = (id, title, message, creator) => {
    setDeleteAlert(true);
    setDeleteId(id);
    setDeleteTitle(title);
    setDeleteMessage(message);
    setDeleteCreator(creator);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCreatorChange = (e) => {
    setCreator(e.target.value);
  };

  const handleEditTitleChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleEditMessageChange = (e) => {
    setEditMessage(e.target.value);
  };

  const handleEditCreatorChange = (e) => {
    setEditCreator(e.target.value);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://hostel-management-system-2l8c.onrender.com/complaints/${id}`
      )
      .then((res) => {
        setDeleteAlert(false);
        setDeleteAlertMessage("Complaint deleted successfully");
        setDeleteAlertType("success");
        setDeleteAlert(true);
        setTimeout(() => {
          setDeleteAlert(false);
        }, 3000);
        axios
          .get("https://hostel-management-system-2l8c.onrender.com/complaints")
          .then((res) => {
            setComplaints(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    const updatedComplaint = {
      title: editTitle,
      message: editMessage,
      creator: editCreator,
    };
    axios
      .patch(
        `https://hostel-management-system-2l8c.onrender.com/complaints/${id}`,
        updatedComplaint
      )
      .then((res) => {
        setEdit(false);
        setEditAlertMessage("Complaint updated successfully");
        setEditAlertType("success");
        setEditAlert(true);
        setTimeout(() => {
          setEditAlert(false);
        }, 3000);
        axios
          .get("https://hostel-management-system-2l8c.onrender.com/complaints")
          .then((res) => {
            setComplaints(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      title: title,
      message: message,
      creator: creator,
    };
    axios
      .post(
        "https://hostel-management-system-2l8c.onrender.com/complaints",
        newComplaint
      )
      .then((res) => {
        setOpen(false);
        setAlertMessage("Complaint added successfully");
        setAlertType("success");
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        axios
          .get("https://hostel-management-system-2l8c.onrender.com/complaints")
          .then((res) => {
            setComplaints(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://hostel-management-system-2l8c.onrender.com/complaints")
      .then((res) => {
        setComplaints(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const get = (keyName) => {
    const data = localStorage.getItem(keyName);
    if (!data) {
      // if no value exists associated with the key, return null
      return null;
    }
    const item = JSON.parse(data);
    if (Date.now() > item.ttl) {
      localStorage.removeItem(keyName);
      return null;
    }
    return item.value;
  };

  // cards function
  function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  //
  const role = cookies.role;

  return (
    <body>
      <div className="App">
        <div className="complains_container">
          <div className="Complaints__addbtn">
            <h1>Complaints</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
              className="complaints__add"
            >
              Add Complaint
            </Button>
          </div>

          <div className="row" id="myItems">
            <div className="col-sm-12 mb-3">
              {complaints.map((complaint) => (
                <div className="card complaints_card">
                  <div className="card-body">
                    <h5 id="complaints_title" className="card-title ">
                      {complaint.title}
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">
                      {complaint.message}
                    </p>
                  </div>
                  <p className="card-text">- {complaint.creator}</p>
                  {/* <div className="complaints__cardFooter">
                    <p>Created by: {complaint.creator}</p>
                  </div> */}
                  <div className="complaints_delete">
                    {role === "admin" && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          handleDelete(
                            complaint._id,
                            complaint.title,
                            complaint.message,
                            complaint.creator
                          )
                        }
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Complaint</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a complaint, please enter the title, message and creator
              name.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={handleTitleChange}
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              type="text"
              fullWidth
              onChange={handleMessageChange}
            />
            <TextField
              margin="dense"
              id="creator"
              label="Creator"
              type="text"
              fullWidth
              onChange={handleCreatorChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={edit}
          onClose={handleEditClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Complaint</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To edit a complaint, please enter the title, message and creator
              name.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={editTitle}
              onChange={handleEditTitleChange}
            />
            <TextField
              margin="dense"
              id="message"
              label="Message"
              type="text"
              fullWidth
              value={editMessage}
              onChange={handleEditMessageChange}
            />
            <TextField
              margin="dense"
              id="creator"
              label="Creator"
              type="text"
              fullWidth
              value={editCreator}
              onChange={handleEditCreatorChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleEdit(editId)} color="primary">
              Edit
            </Button>
          </DialogActions>
        </Dialog>

        {/* <Dialog

        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Complaint</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this complaint?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleDelete(deleteId)} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <snackbar
        open={alert}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity={alertType}>
          {alertMessage}
        </Alert>
      </snackbar> */}
      </div>
      <Footer />
    </body>
  );
};

export default Complaints;
