import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAsync, selectLogin } from "../loginSlice";
import { Button, Form } from "react-bootstrap";
import { LoadingCircle } from "../../../components/LoadingCircle";

import "./login-form.scss";

const LoginForm = ({ title }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    dispatch(postLoginAsync({ email, password }));
  };

  return (
    <section className="login">
      {!loading && (
        <>
          <h1 className="login__title">{title}</h1>
          <Form className="login__form" onSubmit={handleSubmit}>
            <Form.Group className="login__mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="login__input"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="login__mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="login__input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login__button">
              Submit
            </Button>
          </Form>
        </>
      )}
      {loading && <LoadingCircle />}
    </section>
  );
};

export default LoginForm;
