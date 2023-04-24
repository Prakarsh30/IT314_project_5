import React, { useEffect, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import axios from "axios";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteOpen from "@mui/icons-material/Delete";
import snackbar from "@mui/material";
import handleAlertClose from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./complaints.css";
import LikeButton from "./Likebutton";
// import { makeStyles, Theme } from "@material-ui/core";

// import Dialog, {
//   DialogTitle,
//   DialogContent,
//   DialogFooter,
//   DialogButton,
// } from "@material/react-dialog";

const joje = () => {
  console.log("hey");
};
const set = (key, value, expiry) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expiry,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

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
let closeImg = {
  cursor: "pointer",
  float: "right",
  marginTop: "5px",
  width: "20px",
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
  // useEffect(() => {
  //   const dialog = ref.current;
  //   dialog.showModal();
  //   return () => dialog.close();
  // }, []);
  const [state, setState] = useState({ isOpen: false });
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

  /*
  Get all complaints
  */

  const [allComplaints, setAllComplaints] = useState([]);

  const OnLoadFunc = async () => {
    const res = await fetch("http://localhost:5000/complaints", {
      method: "get",
    });
    const data = await res.json();
    setAllComplaints(data);
  };

  useEffect(() => {
    OnLoadFunc();
  }, []);

  // const styles = {
  //   root: {
  //     backgroundColor: "transparent",
  //   },

  //   paper: {
  //     backgroundColor: "transparent",
  //     boxShadow: "none",
  //     overflow: "hidden",
  //   },
  // };

  // const useStyles = makeStyles((theme: Theme) => ({
  //   backDrop: {
  //     backdropFilter: "blur(3px)",
  //     backgroundColor: "rgba(0,0,30,0.4)",
  //   },
  // }));

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
      .delete(`http://localhost:5000/complaints/${id}`)
      .then((res) => {
        setDeleteAlert(false);
        setDeleteAlertMessage("Complaint deleted successfully");
        setDeleteAlertType("success");
        setDeleteAlert(true);
        setTimeout(() => {
          setDeleteAlert(false);
        }, 3000);
        axios
          .get("http://localhost:5000/complaints")
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
      .patch(`http://localhost:5000/complaints/${id}`, updatedComplaint)
      .then((res) => {
        setEdit(false);
        setEditAlertMessage("Complaint updated successfully");
        setEditAlertType("success");
        setEditAlert(true);
        setTimeout(() => {
          setEditAlert(false);
        }, 3000);
        axios
          .get("http://localhost:5000/complaints")
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
      .post("http://localhost:5000/complaints", newComplaint)
      .then((res) => {
        setOpen(false);
        setAlertMessage("Complaint added successfully");
        setAlertType("success");
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        axios
          .get("http://localhost:5000/complaints")
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
      .get("http://localhost:5000/complaints")
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

  const role = get("role");

  return (
    // <div>
    //   <div className="complaints">
    //     <div className="complaints__header">
    //       <h1>Complaints</h1>

    //       {role === "admin" && (<Button
    //         variant="contained"
    //         color="primary"
    //         onClick={handleClickOpen}
    //         className="complaints__add"
    //       >
    //         Add Complaint
    //       </Button>)}
    //       {/* <Button
    //         variant="contained"
    //         color="primary"
    //         onClick={handleClickOpen}
    //         className="complaints__add"
    //       >
    //         Add Complaint
    //       </Button> */}

    //     </div>
    //     <div className="complaints__body">
    //       {complaints.map((complaint) => (
    //         <div className="complaints__card">
    //           <div className="complaints__cardHeader">
    //             <h3>{complaint.title}</h3>
    //             <div className="complaints__cardHeaderButtons">

    //               {/*  */}

    //               <Button
    //                 variant="contained"
    //                 color="primary"
    //                 onClick={() =>
    //                   handleEditOpen(
    //                     complaint._id,
    //                     complaint.title,
    //                     complaint.message,
    //                     complaint.creator
    //                   )
    //                 }
    //               >
    //                 Edit
    //               </Button>

    //               <Button
    //                 variant="contained"
    //                 color="secondary"
    //                 onClick={() =>
    //                   handleDeleteOpen(
    //                     complaint._id,
    //                     complaint.title,
    //                     complaint.message,
    //                     complaint.creator
    //                   )
    //                 }
    //               >
    //                 Delete
    //               </Button>

    //             </div>
    //           </div>
    //           <div className="complaints__cardBody">
    //             <p>{complaint.message}</p>
    //           </div>
    //           <div className="complaints__cardFooter">
    //             <p>Created by: {complaint.creator}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <Dialog
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="form-dialog-title"
    //   >
    //     <DialogTitle id="form-dialog-title">Add Complaint</DialogTitle>
    //     <DialogContent>
    //       <DialogContentText>
    //         To add a complaint, please enter the title, message and creator
    //         name.
    //       </DialogContentText>
    //       <TextField
    //         autoFocus
    //         margin="dense"
    //         id="title"
    //         label="Title"
    //         type="text"
    //         fullWidth
    //         onChange={handleTitleChange}
    //       />
    //       <TextField
    //         margin="dense"
    //         id="message"
    //         label="Message"
    //         type="text"
    //         fullWidth
    //         onChange={handleMessageChange}
    //       />
    //       <TextField
    //         margin="dense"
    //         id="creator"
    //         label="Creator"
    //         type="text"
    //         fullWidth
    //         onChange={handleCreatorChange}
    //       />
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleClose} color="primary">
    //         Cancel
    //       </Button>
    //       <Button onClick={handleSubmit} color="primary">
    //         Add
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    //   <Dialog
    //     open={edit}
    //     onClose={handleEditClose}
    //     aria-labelledby="form-dialog-title"
    //   >
    //     <DialogTitle id="form-dialog-title">Edit Complaint</DialogTitle>
    //     <DialogContent>
    //       <DialogContentText>
    //         To edit a complaint, please enter the title, message and creator
    //         name.
    //       </DialogContentText>
    //       <TextField
    //         autoFocus
    //         margin="dense"
    //         id="title"
    //         label="Title"
    //         type="text"
    //         fullWidth
    //         value={editTitle}
    //         onChange={handleEditTitleChange}
    //       />
    //       <TextField
    //         margin="dense"
    //         id="message"
    //         label="Message"
    //         type="text"
    //         fullWidth
    //         value={editMessage}
    //         onChange={handleEditMessageChange}
    //       />
    //       <TextField
    //         margin="dense"
    //         id="creator"
    //         label="Creator"
    //         type="text"
    //         fullWidth
    //         value={editCreator}
    //         onChange={handleEditCreatorChange}
    //       />
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleEditClose} color="primary">
    //         Cancel
    //       </Button>
    //       <Button onClick={() => handleEdit(editId)} color="primary">
    //         Edit
    //       </Button>
    //     </DialogActions>
    //   </Dialog>

    /* <Dialog

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
      </snackbar> */

    <div className="ag-format-container">
      <div className="ag-courses_box">
        {allComplaints.map((complaint) => (
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <button onClick={(e) => setState({ isOpen: true })}>
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">{complaint.title}</div>
                <div className="ag-courses-item_date-box">
                  Date: &nbsp;
                  <span className="ag-courses-item_date">
                    {moment(complaint.createdAt).format("LL")}
                  </span>
                </div>
              </button>
            </a>
            <Dialog
              className="icon-dialog mdc-dialog--scrollable"
              onClose={() => this.setState({ isOpen: false })}
              open={state.isOpen}
              sx={{
                "& .MuiBackdrop-root": { backgroundColor: "transparent" },
                backdropFilter: "blur(1px)",
              }}
            >
              <DialogTitle>{complaint.title}</DialogTitle>
              <DialogContent>
                {complaint.message}
                <LikeButton
                  like={complaint.likeCount}
                  dislike={complaints.dislikeCount}
                />
              </DialogContent>
              <button
                onClick={(e) => setState({ isOpen: false })}
                aria-label="close"
                className="x"
              >
                ❌
              </button>
            </Dialog>
          </div>
        ))}
      </div>
    </div>

    // </div>
  );
};

export default Complaints;
