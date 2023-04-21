import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./login_styles.css";
// import { FaUserAlt } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";

export default function LoginPage() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: "",
    password: "",
    role: "",
  };

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
      navigate("../homepage/sidebar");
    }
  };

  const handleRedirecting = async (e) => {
    e.preventDefault();
    user.email = email;
    user.password = password;

    await login(user);

    if (user.role == "Admin") {
      // history.push("/volunteer");
      navigate("admin", { curruser: { email: user.email } });
    } else if (user.role == "student") {
      navigate("student", { curruser: { email: user.email } });
    } else navigate("");
  };

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    // <div className="container">
    //   <div className="screen">
    //     <div className="screen__content">
    //       <Form onSubmit={handleSubmit}>
    //         <form className="login">
    //           <div className="login__field">
    //             <FaUserAlt i className="login__icon" />

    //             <Form.Group size="lg" controlId="email">
    //               <Form.Control
    //                 autoFocus
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 type="text"
    //                 className="login__input"
    //                 placeholder="Username/Email"
    //               />
    //             </Form.Group>
    //           </div>

    //           <div className="login__field">
    //             <FaLock i className="login__icon" />
    //             <Form.Group size="lg" controlId="password">
    //               <Form.Control
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 type="password"
    //                 className="login__input"
    //                 placeholder="Password"
    //               />
    //             </Form.Group>
    //           </div>

    //           <div>
    //             <Button
    //               block
    //               size="lg"
    //               type="submit"
    //               disabled={!validateForm()}
    //               onClick={handleRedirecting}
    //               className="button login__submit"
    //             >
    //               <span className="button__icon">Log In</span>
    //               <i className="button__icon fas fa-chevron-right" />
    //             </Button>
    //           </div>
    //         </form>
    //       </Form>
    //     </div>
    //     <div className="screen__background">
    //       <span className="screen__background__shape screen__background__shape4" />
    //       <span className="screen__background__shape screen__background__shape3" />
    //       <span className="screen__background__shape screen__background__shape2" />
    //       <span className="screen__background__shape screen__background__shape1" />
    //     </div>
    //   </div>
    // </div>
    <>
  <div className="align">
  <div className="grid">
    <form
      action="https://httpbin.org/post"
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
          placeholder="Username"
          required=""
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
        />
      </div>
      <div className="form__field"
      disabled={!validateForm()}
      onClick={handleRedirecting}>
        {/* <input type="submit" defaultValue="Sign In" /> */}
        <button name="field_name" value="submitted_value" className="login_btn">Log In</button>
      </div>
    </form>
    {/* <p className="form_field">
      Not a member? <a href="#">Sign up now</a>{" "}
      <svg className="icon">
        <use xlinkHref="#icon-arrow-right" />
      </svg>
    </p> */}
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
</>

  );
}
