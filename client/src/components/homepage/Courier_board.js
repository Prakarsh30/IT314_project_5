import React, { useState, useEffect } from "react";
import "./Courier_board_style.css"

function CourierBoard() {

  useEffect(() => {
    console.log("useEffect");
    getCouriers();
  }, [""]);
  const [list,setList] = useState([])
  const getCouriers = async () => {
    const res = await fetch("http://localhost:5000/couriers", {
        method: "GET",
      });
    
    const data = await res.json();
    setList(data);
    console.log(data);
    console.log("funct")
  }
  console.log("hello1")
  console.log(list)
  const newList = list.filter((example, index) => index<4);
  console.log("hello") 
  console.log(newList)
  const str="qweryuioasdfghjklzxcvbnm qwertyucvadfafabnm"
  // console.log(str.length)
  let newStr= str
  if(str.length>52){
    newStr= str.substring(0,52)+ "..."
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
              (<li key={index}><a href="#"><h5><b>{example.couriedID}:</b></h5> <li>{example.RecievedAt}</li></a></li>)
          ))}
          </ul>
          <ul><li><a href="/complaints">More...</a></li></ul>
        </div>
      </div>
  );
}

export default CourierBoard;