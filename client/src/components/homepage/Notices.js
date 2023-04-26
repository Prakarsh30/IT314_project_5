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
  }
  let newList;
  if(list.length<4){
    newList = list.filter((example, index) => (index<4));
  }
  else{
    newList = list.filter((example, index) => (index>(lengthList-5)));
  }
  // const newList = list.filter((example, index) => (index<4));
  
  function filterString(str){
    let newStr= str;
    if(str.length>42){
      newStr= str.substring(0,42)+ "..."
    };
    return newStr;
  }
  return (
    <div className="news-card">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-body">
          <ul className="news-list">
          {newList.map((example, index) => (
              (<li key={index}><a href="#"><h6><b>{example.Heading}:</b></h6> <li>{filterString(example.content)}</li></a></li>)
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