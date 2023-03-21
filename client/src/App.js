import React from "react";
import Sidebar from "./components/homepage/sidebar";
import Navbar from "./components/homepage/navbar";
import LoginPage from "./components/Login_page/login";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<Sidebar />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
