import React from "react";
import "./LoginPage.css";
import Input from "../../public/components/Input";
import Button from "../../public/components/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const { handleLogin, loggedIn } = useContext(UserContext);
  return (
    <div className="mainBox">
      <img src="./src/assets/logo.svg" alt="" />
      <div action="" className="loginForm">
        <p className="login">Login</p>
        <Input placeholder="Email address"></Input>
        <Input placeholder="Password"></Input>
        <Button
          onClick={() => {
            handleLogin();
            console.log(loggedIn);
            console.log("click");
          }}
        >
          <Link to="/"> Login to your account</Link>
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
