import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin, clearLoginInfo } from "./loginSlice";
import { LoginForm } from "./LoginForm";
import { postLoginAsync } from "./loginSlice";

import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(selectLogin);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    dispatch(postLoginAsync({ email, password }));
  };

  useEffect(() => {
    if (info.token) {
      navigate("/favs");
    }
  }, [info, navigate]);

  useEffect(() => {
    dispatch(clearLoginInfo());
  }, []);

  return (
    <main className="login-container">
      <LoginForm
        title={"FAVS LOGIN"}
        buttonText={"Login"}
        handleSubmit={handleLogin}
      />
    </main>
  );
};

export default Login;
