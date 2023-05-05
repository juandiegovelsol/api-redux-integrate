import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin, clearLoginInfo } from "./loginSlice";
import { LoginForm } from "./LoginForm";

import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(selectLogin);

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
      <LoginForm title={"FAVS LOGIN"} />
    </main>
  );
};

export default Login;
