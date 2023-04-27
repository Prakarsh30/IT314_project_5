import React, { createContext, useState } from "react";
import Navbar from "./components/homepage/navbar";
import LoginPage from "./components/Login_page/login";
import CouriersPage from "./components/couriers/couriers";
import NoticeBoard from "./components/Notices/NoticeBoard";
import Complaints from "./components/complaints/complaints";
import Lostnfound from "./components/lostnfound/lostnfound";
import { CookiesProvider } from "react-cookie";
import Mainpage from "./components/homepage/mainpage";
// import addComp from "./components/complaints/Add_complaint";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Credentials = createContext(null);

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <CookiesProvider>
        <Credentials.Provider value={{ isLoggedIn, setisLoggedIn }}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Mainpage />} />
              <Route path="/couriers" element={<CouriersPage />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/complaints/add" element={<addComp />} />
              <Route path="/NoticeBoard" element={<NoticeBoard />} />
              <Route path="/lostnfound" element={<Lostnfound />} />
            </Routes>
          </BrowserRouter>
        </Credentials.Provider>
      </CookiesProvider>
    </>
  );
}
