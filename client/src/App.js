import React from "react";
import Sidebar from "./components/homepage/sidebar";
import MainPage from "./components/homepage/mainpage";
import Navbar from "./components/homepage/navbar";
import LoginPage from "./components/Login_page/login";
import Complaints from "./components/complaints/complaints";
// import addComp from "./components/complaints/Add_complaint";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<Sidebar />}/>
          <Route path='/complaints' element={<Complaints/>}/>
          <Route path='/complaints/add' element={<addComp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
