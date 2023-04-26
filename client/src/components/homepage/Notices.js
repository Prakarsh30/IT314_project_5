import React, { useState, useEffect } from "react";
import "./Notices_style.css";
import { useCookies } from "react-cookie";

function Notices() {
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    console.log(cookies.email);
    getNotices();
  }, [""]);
  const [list, setList] = useState([]);
  const getNotices = async () => {
    const res = await fetch("https://hostel-management-system-2l8c.onrender.com/notice", {
      method: "GET",
    });

    const data = await res.json();
    setList(data);
  };
  
  let newList;
  // get latest 4 news
  if (list.length < 4) {
    newList = list.filter((example, index) => index < 4);
  } else {
    newList = list.filter((example, index) => index > list.length() - 5);
  }
  // const newList = list.filter((example, index) => (index<4));

  function filterString(str) {
    let newStr = str;
    if (str.length > 250) {
      newStr = str.substring(0, 250) + "...";
    }
    return newStr;
  }
  console.log('NEW LIST');
  console.log(newList);
  console.log(list);
  return (
    
    <div className="news-card">
      <div className="news-header">
        <h2>Latest News</h2>
      </div>
      <marquee behavior="scroll" direction="up" id="mymarquee" scrollamount="1" onmouseover="this.stop();" onmouseout="this.start();">
      <div className="news-body">
        <ul className="news-list">
          {newList.map((example, index) => (
            <li key={index}>
              <a href="#">
                <h6>
                  <b>{example.Heading}:</b>
                </h6>{" "}
                <li>{filterString(example.content)}</li>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <a href="/NoticeBoard">More...</a>
          </li>
        </ul>
      </div>
      </marquee>
    </div>
  );
}

export default Notices;
