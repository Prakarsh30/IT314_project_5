import React, { useState } from "react";
import "./add_notice.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NoticeBoard() {
  const [examples, setExamples] = useState([
    {
      id: 1,
      heading: "H1",
      content: "Notice 1",
      writer: "Admin 1",
      createdAt: new Date(),
    },
    {
      id: 2,
      heading: "H2",
      content: "Notice 2",
      writer: "Admin 2",
      createdAt: new Date(),
    },
  ]);

  const [newNotice, setNewNotice] = useState({
    id: null,
    heading: "",
    content: "",
    writer: "",
    createdAt: null,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editing, setEditing] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const [filter, setFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNotice({
      ...newNotice,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!editing) {
      const newExamples = [...examples];
      newNotice.id = newExamples.length + 1;
      newNotice.createdAt = new Date();
      newExamples.push(newNotice);
      setExamples(newExamples);
    } else {
      const updatedExamples = examples.map((example) =>
        example.id === newNotice.id ? newNotice : example
      );
      setExamples(updatedExamples);
      setEditing(false);
    }
    setNewNotice({
      id: null,
      heading: "",
      content: "",
      writer: "",
      createdAt: null,
    });
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
        (example) => example.writer.toLowerCase() === selectedAuthor.toLowerCase()
      );
    }

    return filtered.filter(
      (example) =>
        example.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
        example.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const uniqueAuthors = Array.from(new Set(examples.map((example) => example.writer)));

  const filteredExamples = getFilteredExamples();
  const addNoticeFormStyles = {
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search notices..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: "100%" }}
      />
      <div>
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All Notices</option>
          <option value="date">Date</option>
          <option value="author">Author</option>
        </select>
      </div>
      {filter === "date" && (
        <div>
          <label htmlFor="datePicker">Select Date:</label>
          <DatePicker
            id="datePicker"
            selected={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      )}
      {filter === "author" && (
        <div>
          <label htmlFor="author">Select Author:</label>
          <select id="author" value={selectedAuthor} onChange={handleAuthorChange}>
            <option value="">All Authors</option>
            {uniqueAuthors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="accordion" id="accordionExample">
        {filteredExamples.map((example, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${
                  openIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`collapse-${index}`}
              >
                {example.heading}, Created by: {example.writer},{" "}
                {example.createdAt.toLocaleString()}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${
                openIndex === index ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>{example.content}</strong>
                <div style={{ float: "right" }}>
                  <button
                    onClick={() => handleEdit(example.id)}
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      fontSize: "100%",
                      marginRight: "5px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(example.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      fontSize: "100%",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} style={addNoticeFormStyles}>
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
      </form>
    </div>
  );
}

export default NoticeBoard;