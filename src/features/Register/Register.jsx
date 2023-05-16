import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectRegister,
  postUserAsync,
  clearRegisterInfo,
} from "./registerSlice.js";
import {
  selectLogin,
  postLoginAsync,
  clearLoginInfo,
} from "../Login/loginSlice";
import {
  selectFav,
  createListAsync,
  clearListResponse,
} from "../Fav/favSlice.js";
import RegisterForm from "../Login/LoginForm/LoginForm.jsx";
import { Background } from "../../components/Background";

import "./register.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const { loading, createUserResponse } = useSelector(selectRegister);
  const { info } = useSelector(selectLogin);
  const { createListResponse } = useSelector(selectFav);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    setUserInfo({ email, password });
    dispatch(postUserAsync({ email, password }));
  };

  useEffect(() => {
    if (createUserResponse.iduser) {
      console.log(userInfo);
      const { email, password } = userInfo;
      dispatch(postLoginAsync({ email, password }));
    }
  }, [createUserResponse]);

  useEffect(() => {
    if (info.token) {
      const { token } = info || "";
      const { iduser } = createUserResponse || 0;
      const listname = "New List";
      dispatch(createListAsync({ token, listname, iduser }));
    }
  }, [info]);

  useEffect(() => {
    if (createListResponse.idlist) {
      dispatch(clearListResponse());
      navigate("/favs");
    }
  }, [createListResponse]);

  useEffect(() => {
    dispatch(clearLoginInfo());
    dispatch(clearRegisterInfo());
  }, []);

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Background />
      <main className="register-container">
        <RegisterForm
          title={"FAVS SIGN IN"}
          buttonText={"Sign in"}
          handleSubmit={handleRegister}
        />
        <span className="register-container__login">
          Already have an account?
          <button
            className="register-container__login-button"
            onClick={goToLogin}
          >
            Go to login
          </button>
        </span>
      </main>
    </>
  );
};

export default Register;
