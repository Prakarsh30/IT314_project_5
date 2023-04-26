import React, { StrictMode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login_styles.css";
import { Credentials } from "../../App";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  let navigate = useNavigate();
  const { isLoggedIn, setisLoggedIn } = useContext(Credentials);
  console.log("kirtan", isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["user"]);

  const user = {
    email: "",
    password: "",
    role: "",
  };
  const set = (keyName, keyValue, ttl) => {
    const data = {
      value: keyValue, // store the value within this object
      // ttl: Date.now() + (ttl * 1000),   // store the TTL (time to live)
    };
    localStorage.setItem(keyName, JSON.stringify(data));
  };

  const get = (keyName) => {
    const data = localStorage.getItem(keyName);
    if (!data) {
      // if no value exists associated with the key, return null
      return null;
    }
    const item = JSON.parse(data);
    if (Date.now() > item.ttl) {
      localStorage.removeItem(keyName);
      return null;
    }
    return item.value;
  };

  // no sign up page, we will only have sign in page that collect email, password and role
  const login = async (user) => {
    const res = await fetch("https://hostel-management-system-2l8c.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    console.log("hey");

    console.log(data);
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      // console.log(data.token);

      // // set the token in local storage
      // console.log(data)
      // set("token", data.token, 3600);
      // set("email", data.user.email, 3600);
      // set("role", data.user.role, 3600);

      setCookie("email", data.user.email);
      setCookie("role", data.user.role);

      console.log("Yup");
      // window.location.reload();
      navigate("/", { curruser: { email: user.email } });
      console.log("bruh");
      window.location.reload();

      setisLoggedIn(true);

      console.log("lklk");
      //t window.alert("Login Successful");
      //navigate to the home page
      // window.alert("Login successful")
      // navigate("/");
    }
  };
  // get the token from local storage

  const handleRedirecting = async (e) => {
    e.preventDefault();
    user.email = email;
    user.password = password;
    // console.log(user);
    await login(user);
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const [button_flag, setbutton_flag] = useState(false);
  function handlebutton() {
    setbutton_flag(!button_flag);
  }
  return (
    <div className="align">
      <div className="grid">
        <form
          action="https://localhost:5000/post"
          method="POST"
          className="form login"
          onSubmit={handleSubmit}
        >
          <div className="form__field">
            <label htmlFor="login__username">
              <svg className="icon">
                <use xlinkHref="#icon-user" />
              </svg>
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="username"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Email"
              required=""
              onChange={(data) => {
                setEmail(data.target.value);
              }}
            />
          </div>
          <div className="form__field">
            <label htmlFor="login__password">
              <svg className="icon">
                <use xlinkHref="#icon-lock" />
              </svg>
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              required=""
              onChange={(data) => {
                setPassword(data.target.value);
              }}
            />
          </div>

          {button_flag && (
            <div>
              <div className="form__field">
                <label htmlFor="login__password">
                  <svg className="icon">
                    <use xlinkHref="#icon-lock" />
                  </svg>
                  <span className="hidden">Password</span>
                </label>
                <input
                  id="login__password"
                  type="password"
                  name="password"
                  className="form__input"
                  placeholder="New Password"
                  required=""
                  onChange={(data) => {
                    setPassword(data.target.value);
                  }}
                />
              </div>
            </div>
          )}
          <div className="form__field">
            {/* <input type="submit" defaultValue="Sign In" />  */}
            <button className="login_btn" onClick={handleRedirecting}>
              {!button_flag && "Log In"}
              {button_flag && "Change Password"}
            </button>
          </div>
          {button_flag && (
            <p className="field">
              Login :{" "}
              <button id="buttonset" onClick={handlebutton}>
                Click here
              </button>{" "}
            </p>
          )}
          {!button_flag && (
            <p className="field">
              Change Password :{" "}
              <button id="buttonset" onClick={handlebutton}>
                Click here
              </button>{" "}
            </p>
          )}
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="icons">
        <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
          <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
        </symbol>
        <symbol id="icon-lock" viewBox="0 0 1792 1792">
          <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
        </symbol>
        <symbol id="icon-user" viewBox="0 0 1792 1792">
          <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
        </symbol>
      </svg>
    </div>
  );
}
