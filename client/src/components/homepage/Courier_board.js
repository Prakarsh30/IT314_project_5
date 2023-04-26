import React, { useState, useEffect } from "react";
import "./Courier_board_style.css";

function CourierBoard() {
  useEffect(() => {
    console.log();
    getCouriers();
  }, [""]);
  const [list, setList] = useState([]);
  const getCouriers = async () => {
    const res = await fetch("https://hostel-management-system-2l8c.onrender.com//couriers", {
      method: "GET",
    });

    const data = await res.json();
    setList(data);
  };
  let newList;
  if (list.length < 4) {
    newList = list.filter((example, index) => index < 4);
  } else {
    newList = list.filter((example, index) => index > list.length - 5);
  }

  function filterString(str) {
    let newStr = str;
    if (str.length > 42) {
      newStr = str.substring(0, 42) + "...";
    }
    return newStr;
  }

  // console.log(newStr)
  return (
    <div className="courier-card" onLoad={getCouriers}>
      <div className="courier-header">
        <h2>Latest courier</h2>
      </div>
      <div className="courier-body">
        <ul className="courier-list">
          {newList.map((example, index) => (
            <li key={index}>
              <a href="#">
                <h6>
                  <b>{example.student_name}:</b>
                </h6>{" "}
                <li>{filterString(example.couriedID)}</li>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <a href="/complaints">More...</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CourierBoard;
