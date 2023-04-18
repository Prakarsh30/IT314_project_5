import React from 'react';
import './NoticeBoard.css';


function NoticeBoard() {
  const examples=[
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
    <div className="notice-board">
      <h2>Notice Board</h2>
      <ul>
        {examples.map((example, index) => (
          <li key={index}>{example.Heading},{example.content},{example.writer},{example.createdAt}</li>
        ))}
      </ul>
    </div>
  );
}

export default NoticeBoard;