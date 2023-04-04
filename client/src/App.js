import React from "react";
import Sidebar from "./components/homepage/sidebar";
import Navbar from "./components/homepage/navbar";
import LoginPage from "./components/Login_page/login";
import CouriersPage from "./components/couriers/couriers";
import NoticeBoard from "./components/Notices/NoticeBoard";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/couriers' element={<CouriersPage/>}/>
        <Route path='/' element={<Sidebar />}/>
        <Route path='/NoticeBoard' element={<NoticeBoard />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
