import React, { Component  } from 'react'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import "./style.css";
import {fetchlogin} from '../../api/index';

const LandingPage = () => {
    let navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const user = {
      email:"",
      password:"",
      role:""
    }

    // no sign up page, we will only have sign in page that collect email, password and role
   const login = async (user) => {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      console.log(data); 
      if (res.status === 400 || !data) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successful");
        //navigate to the home page
        navigate('../homepage/sidebar');
      }
    };

    const handleRedirecting = async (e) => {
      e.preventDefault();
      user.email = email;
      user.password = password;
      user.role = role;

     await login(user);

      if(user.role == 'Admin'){
        // history.push("/volunteer");  
        navigate('admin', { curruser: { email: user.email } });
      }
      else if(user.role == 'student'){
        navigate('student' ,  { curruser: { email: user.email } })
      }
      else 
        navigate('*')  
    }

    return (
      <form className="container signin-page-main-container">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={handleRedirecting}
        >
          Sign In
        </button>
      </form>
    );


  }

export default LandingPage
