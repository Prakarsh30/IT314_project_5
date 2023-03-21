
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login_styles.css";
import {FaUserAlt} from "react-icons/fa";
import {FaLock  } from "react-icons/fa";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    
<div className="container">
  <div className="screen">
    <div className="screen__content">
      <Form onSubmit={handleSubmit}>
      <form className="login">

        <div className="login__field">
        <FaUserAlt i className="login__icon fas fa-user" />
        
          <Form.Group size="lg" controlId="email">
          <Form.Control
            autoFocus
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            type="text"
            className="login__input"
            placeholder="User name / Email"
          />
        </Form.Group>
        </div>

        <div className="login__field">
          
        <FaLock i className="login__icon fas fa-lock" />
          <Form.Group size="lg" controlId="password"> 

          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="login__input"
            placeholder="Password"
          />

        </Form.Group>
        </div>

        <div>
        <Button block size="lg" type="submit" disabled={!validateForm()} className="button login__submit">
        <span className="button__icon">Log In</span>
          <i className="button__icon fas fa-chevron-right" />
        </Button>
        </div>
      </form>
      </Form>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4" />
      <span className="screen__background__shape screen__background__shape3" />
      <span className="screen__background__shape screen__background__shape2" />
      <span className="screen__background__shape screen__background__shape1" />
    </div>
  </div>
</div>

  );

}


