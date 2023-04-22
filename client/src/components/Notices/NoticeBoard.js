import React, { useState } from "react";

function NoticeBoard() {
  // Define the examples array to hold the notice data
  const examples = [
    {
      Heading: "H1",
      content: "Notice 1",
      writer: "Admin 1",
      createdAt: null,
    },
    {
      Heading: "H2",
      content: "Notice 2",
      writer: "Admin 2",
      createdAt: null,
    }
  ];

  // Define the state variable to keep track of which notice is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle click on the accordion button
  const handleAccordionClick = (index) => {
    // If the clicked accordion is already open, close it
    if (index === openIndex) {
      setOpenIndex(null);
    } 
    // If the clicked accordion is not open, open it
    else {
      setOpenIndex(index);
    }
  }

  return (
    // Create a Bootstrap accordion with the id "accordionExample"
    <div className="accordion" id="accordionExample">
      {/* Map over each notice in the examples array */}
      {examples.map((example, index) => (
        // For each notice, create an accordion item
        <div key={index} className="accordion-item">
          {/* Define the accordion header with a button that toggles the accordion collapse */}
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={openIndex === index ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              {example.Heading}, Created by: {example.writer}, {example.createdAt}
            </button>
          </h2>
          {/* Define the accordion collapse with the notice content */}
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Bold</strong> {example.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticeBoard;
