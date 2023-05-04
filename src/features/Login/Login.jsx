import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin, postLoginAsync } from "./loginSlice";
import { Button, Form } from "react-bootstrap";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, info } = useSelector(selectLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    dispatch(postLoginAsync({ email, password }));
  };

  return (
    <main className="login">
      <section className="login__container">
        <h1 className="login__title">FAVS LOGIN</h1>
        <Form className="login__form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </main>
  );
};

export default Login;
