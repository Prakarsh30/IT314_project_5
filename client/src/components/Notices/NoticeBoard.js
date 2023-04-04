// import React, { useState } from "react";

function NoticeBoard() {
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
  ]
  return (
    
    <div className="accordion" id="accordionExample">
      {examples.map((example, index) => (
      <div key={index} className="accordion-item" >
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            {example.Heading},Created by: {example.writer},{example.createdAt}
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
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


