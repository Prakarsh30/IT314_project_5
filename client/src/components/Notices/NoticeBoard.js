import React, { useEffect, useState } from "react";
import "./add_notice.css";
import "./NoticeBoard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

// {
//   id: 1,
//   heading: "H1",
//   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis pharetra libero ac dapibus. Duis pulvinar, tortor et feugiat scelerisque, ligula metus tincidunt ipsum, ut euismod dui sem ut lacus. Vestibulum malesuada, nunc id finibus dapibus, nisl magna commodo ipsum, sed mattis turpis metus ut ex. Suspendisse potenti. Vivamus condimentum cursus leo, et euismod neque congue laoreet. Ut finibus ex non ex maximus, et ornare nisi volutpat. Quisque cursus purus ac ultrices fermentum.",
//   writer: "Admin 1",
//   createdAt: new Date(),
// },
// {
//   id: 2,
//   heading: "H2",
//   content: "Morbi blandit nulla sit amet dictum rhoncus. In maximus mauris porta velit pellentesque mollis. Nam convallis, lectus at cursus consequat, turpis enim bibendum augue, quis tincidunt sem augue id sapien. Phasellus luctus eu odio vel dictum. Morbi porttitor congue lacus sed scelerisque. Vivamus feugiat id orci sit amet mollis. Suspendisse volutpat vehicula porta. Morbi nec ullamcorper augue. Donec iaculis congue nisl, non pharetra sem. Donec ac posuere sem, at laoreet dui.",
//   writer: "Admin 2",
//   createdAt: new Date(),
// },

function NoticeBoard() {
  const [examples, setExamples] = useState([]);

  const effectFun = async function () {
    const notices = (
      await fetch("https://hostel-management-system-2l8c.onrender.com/notice")
    ).json();

    notices.then((data) => {
      console.log(data, "data");
      setExamples(data);
    });
  };

  useEffect(() => {
    effectFun();
  }, []);

  const postNotice = async (notice) => {
    const res = await fetch(
      "https://hostel-management-system-2l8c.onrender.com/notice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notice),
      }
    );
    const data = await res.json();
    console.log(data, "Updated list");
    setNewNotice({
      id: null,
      Heading: "",
      content: "",
      writer: "",
      createdAt: null,
    });
  };

  console.log(examples, "examples");
  const [newNotice, setNewNotice] = useState({
    id: null,
    Heading: "",
    content: "",
    writer: "",
    createdAt: null,
  });
  console.log(examples);
  console.log("Loaded data Notices");
  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const [filter, setFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handlecontentChange = (e) => {
    setcontent(e.target.value);
  };

  const handlewriterChange = (e) => {
    setwriter(e.target.value);
    console.log(writer, "writer");
  };

  const [Heading, setHeading] = useState("");
  const [content, setcontent] = useState("");
  const [writer, setwriter] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNotice({
      ...newNotice,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const notice = mongoose.Schema({
    //   Heading: String,
    //   content: String,
    //   writer: String,
    //   createdAt: {
    //     type: Date,
    //     default: new Date(),
    //   },
    // });
    // const newNotice={

    //   Heading: Heading,
    //   content: content,
    //   writer: writer,
    // }

    if (!editing) {
      const newExamples = [...examples];
      // newNotice.id = newExamples.length + 1;
      newNotice.createdAt = new Date();
      newNotice.Heading = Heading;
      newNotice.content = content;
      newNotice.writer = writer;
      newExamples.push(newNotice);
      setExamples(newExamples);
    }

    console.log(newNotice, "newNotice");

    postNotice(newNotice);
    handleClose();
  };

  const handleDelete = (id) => {
    const updatedExamples = examples.filter((example) => example.id !== id);
    setExamples(updatedExamples);
  };

  const handleEdit = (id) => {
    const noticeToEdit = examples.find((example) => example.id === id);
    setNewNotice(noticeToEdit);
    setEditing(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAccordionClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const getFilteredExamples = () => {
    let filtered = examples;

    if (filter === "date" && selectedDate) {
      filtered = filtered.filter(
        (example) =>
          example.createdAt.toDateString() === selectedDate.toDateString()
      );
    } else if (filter === "author" && selectedAuthor) {
      filtered = filtered.filter(
        (example) =>
          example.writer.toLowerCase() === selectedAuthor.toLowerCase()
      );
    }

    return filtered.filter(
      (example) =>
        example.Heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        example.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const uniqueAuthors = Array.from(
    new Set(examples.map((example) => example.writer))
  );

  const filteredExamples = getFilteredExamples();
  const addNoticeFormStyles = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  console.log(filteredExamples);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="notices__App">
      <html>
        <body>
          <div className="inBlock notices__body">
            <h3 className="searchBlock">
              <span>Search Notices</span>
              <input
                type="text"
                placeholder="Search notices..."
                class="form-control search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </h3>

            <br></br>
            {/* top part done */}

            <div className="FilterBlock">
              <label htmlFor="filter">Filter by:</label>
              <div className="blocks">
                <select
                  id="filter"
                  value={filter}
                  onChange={handleFilterChange}
                >
                  <option value="all">All Notices</option>
                  <option value="date">Date</option>
                  <option value="author">Author</option>
                </select>
              </div>
              {filter === "date" && (
                <div className="blocks">
                  <label htmlFor="datePicker">Select Date:</label>
                  <DatePicker
                    id="datePicker"
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              )}
              {filter === "author" && (
                <div className="blocks">
                  <label htmlFor="author">Select Author:</label>
                  <select
                    id="author"
                    value={selectedAuthor}
                    onChange={handleAuthorChange}
                  >
                    <option value="">All Authors</option>
                    {uniqueAuthors.map((author, index) => (
                      <option key={index} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <br></br>

            <div className="accordion" id="accordionExample">
              {filteredExamples.map((example, index) => {
                return (
                  // <div key={index} className="accordion-item">
                  //   <h2 className="accordion-header">
                  //     <button
                  //       className={`accordion-button ${
                  //         openIndex === index ? "" : "collapsed"
                  //       }`}
                  //       type="button"
                  //       onClick={() => handleAccordionClick(index)}
                  //       aria-expanded={openIndex === index ? "true" : "false"}
                  //       aria-controls={`collapse-${index}`}
                  //     >
                  //       {example.heading}, Created by: {example.writer},{" "}
                  //       {example.createdAt.toLocaleString()}
                  //     </button>
                  //   </h2>
                  //   <div
                  //     id={`collapse-${index}`}
                  //     className={`accordion-collapse collapse ${
                  //       openIndex === index ? "show" : ""
                  //     }`}
                  //     data-bs-parent="#accordionExample"
                  //   >
                  //     <div className="accordion-body">
                  //       <strong>{example.content}</strong>
                  //       <div style={{ float: "right" }}>
                  //         <button
                  //           onClick={() => handleEdit(example.id)}
                  //           style={{
                  //             backgroundColor: "blue",
                  //             color: "white",
                  //             fontSize: "100%",
                  //             marginRight: "5px",
                  //           }}
                  //         >
                  //           Edit
                  //         </button>
                  //         <button
                  //           onClick={() => handleDelete(example.id)}
                  //           style={{
                  //             backgroundColor: "red",
                  //             color: "white",
                  //             fontSize: "100%",
                  //           }}
                  //         >
                  //           Delete
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                  <>
                    <div key={index} className="noticeBlock">
                      <h3>{example.Heading}</h3>
                      <p>{example.content}</p>
                      <h7>{example.writer}</h7>
                    </div>
                  </>
                );
              })}
            </div>
            {/* <form onSubmit={handleFormSubmit} style={addNoticeFormStyles}>
              <h3>{editing ? "Edit Notice" : "Add New Notice"}</h3>
              <div className="form-group">
                <label htmlFor="heading">Heading:</label>
                <input
                  type="text"
                  id="heading"
                  name="heading"
                  value={newNotice.heading}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea
                  id="content"
                  name="content"
                  value={newNotice.content}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="writer">Writer:</label>
                <input
                  type="text"
                  id="writer"
                  name="writer"
                  value={newNotice.writer}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-add-notice">
                {editing ? "Update Notice" : "Add Notice"}
              </button>
            </form> */}

            <button type="submit" className="addNew" onClick={handleClickOpen}>
              Add New Complain
            </button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add Notice</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To add a notice, please enter the heading, content and writer
                  name.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="Heading"
                  label="Heading"
                  type="text"
                  fullWidth
                  onChange={handleHeadingChange}
                />
                <TextField
                  margin="dense"
                  id="content"
                  label="content"
                  type="text"
                  fullWidth
                  onChange={handlecontentChange}
                />
                <TextField
                  margin="dense"
                  id="writer"
                  label="writer"
                  type="text"
                  fullWidth
                  onChange={handlewriterChange}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleFormSubmit} color="primary">
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </body>
      </html>
    </div>
  );
}

export default NoticeBoard;
