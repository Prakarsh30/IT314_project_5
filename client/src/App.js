import React from "react";
import Sidebar from "./components/homepage/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import LandingPage from "./components/login/landingPage";

const App = () => {
  return (
    // <div>
    //   <Sidebar />
    // </div>

    <BrowserRouter>

        <Sidebar />
        <Routes>
            <Route path='/login' element={<LandingPage/>} />
          
            <Route path="*" element={ <p> 404 Page Not Found ! </p> }></Route>
            

        </Routes>

      </BrowserRouter>

    
  );
};

export default App;
