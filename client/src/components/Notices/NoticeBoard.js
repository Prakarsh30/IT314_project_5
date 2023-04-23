import React, { useState } from "react";
import "./add_notice.css";
function NoticeBoard() {
  const [examples, setExamples] = useState([
    {
      heading: "H1",
      content: "Notice 1",
      writer: "Admin 1",
      createdAt: null,
    },
    {
      heading: "H2",
      content: "Notice 2",
      writer: "Admin 2",
      createdAt: null,
    }
  ]);

  const [newNotice, setNewNotice] = useState({
    heading: "",
    content: "",
    writer: "",
    createdAt: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewNotice({
      ...newNotice,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newExamples = [...examples];
    newExamples.push(newNotice);
    setExamples(newExamples);
    setNewNotice({
      heading: "",
      content: "",
      writer: "",
      createdAt: null,
    });
  };

  const handleAccordionClick = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const [openIndex, setOpenIndex] = useState(null);

  const addNoticeFormStyles = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  };

  const inputStyles = {
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "16px",
  };

  const buttonStyles = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div>
      <div className="accordion" id="accordionExample">
        {examples.map((example, index) => (
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
                {example.createdAt}
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
                <strong>Bold</strong> {example.content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} style={addNoticeFormStyles}>
        <h3>Add New Notice</h3>
        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={newNotice.heading}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newNotice.content}
            onChange={handleInputChange}
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
          />
        </div>
        <button type="submit" className="btn-add-notice">
          Add Notice
        </button>
      </form>
    </div>
  );
}

export default NoticeBoard;
