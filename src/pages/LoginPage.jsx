import React from "react";
import "./LoginPage.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Button from "../../public/components/Button.jsx";
import Input from "../../public/components/Input.jsx";

function LoginPage() {
  const { loggedIn, user, login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const EMAILREGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PWREGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const [emailErr, setEmailErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  function submit(e) {
    e.preventDefault();

    if (!EMAILREGEX.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!PWREGEX.test(password)) {
      setPwErr(true);
    } else {
      setPwErr(false);
    }

    login(email, password);
    console.log(loggedIn);
    console.log(user);
    console.log(email, password);
  }
  return (
    <form className="mainBox" onSubmit={submit}>
      <img src="./src/assets/logo.svg" alt="" />
      <div action="" className="loginForm">
        <p className="login">Login</p>
        <div className="inputWrap">
          <Input
            placeholder="Email address"
            // onChange={setEmail}
            onChange={(e) => setEmail(e.target.value)}
            className={emailErr ? "errBorder" : "input"}
            value={email}
            type="email"
          ></Input>

          {emailErr ? <p className="err">Not a valid email address</p> : null}
        </div>

        <div className="inputWrap">
          <Input
            placeholder="Password"
            type="password"
            // onChange={setPassword}
            onChange={(e) => setPassword(e.target.value)}
            className={pwErr ? "errBorder" : "input"}
            value={password}
          ></Input>
          {pwErr ? <p className="err">Can't empty</p> : null}
        </div>

        <Button>
          {loggedIn && user ? (
            <Link to="/" className="link">
              Login to your account
            </Link>
          ) : (
            <p>Login to your account</p>
          )}
        </Button>
      </div>
    </form>
  );
}

export default LoginPage;
