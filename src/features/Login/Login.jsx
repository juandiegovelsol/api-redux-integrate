import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "./loginSlice";
import { LoginForm } from "./LoginForm";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { loading, info } = useSelector(selectLogin);

  useEffect(() => {
    if (info.token) {
      navigate("/favs");
    }
  }, [info, navigate]);

  return (
    <main className="login-container">
      <LoginForm title={"FAVS LOGIN"} />
    </main>
  );
};

export default Login;
