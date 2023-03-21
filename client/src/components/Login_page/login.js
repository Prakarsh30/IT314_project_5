
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login_styles.css";

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
    <div className="login-container">
      <h3 className="title">Welcome Back User</h3>
      <Form onSubmit={handleSubmit}>
        <div className="fluid-input">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="fluid-input-input"
          />
        </Form.Group>
        </div>

        <div className="fluid-input">
        <Form.Group size="lg" controlId="password"> 

          <Form.Label>Password:</Form.Label>

          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="fluid-input-input"
          />

        </Form.Group>
        </div>

        <div>
        <Button block size="lg" type="submit" disabled={!validateForm()} className="login-button">
          Login
        </Button>
        </div>
      </Form>

    </div>

  );

}


