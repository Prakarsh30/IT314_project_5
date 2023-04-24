import React, { useState, useEffect } from "react";
import "./Notices_style.css"

function Notices() {
  useEffect(() => {
    console.log("useEffect");
    getNotices();
  }, [""]);
  const [list,setList] = useState([])
  const getNotices = async () => {
    const res = await fetch("http://localhost:5000/notice", {
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
  return (
    <div className="news-card">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-body">
          <ul className="news-list">
          {newList.map((example, index) => (
              (<li key={index}><a href="#"><h5><b>{example.Heading}:</b></h5> <li>{example.content}</li></a></li>)
          ))}
            {/* <li><a href="#">Headline 1</a></li>
            <li><a href="#">Headline 2</a></li>
            <li><a href="#">Headline 3</a></li>
            <li><a href="#">Headline 4</a></li> */}
          </ul>
          <ul><li><a href="/NoticeBoard">More...</a></li></ul>
        </div>
      </div>
  );
}

export default Notices;