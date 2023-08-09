import React, { useContext } from "react";
import "./LoginModal.css";
import { UserContext } from "../../src/context/UserContext";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function LoginModal() {
  const { user, logout, loggedIn, setLoggedIn, setUser } =
    useContext(UserContext);
  console.log(user);
  return (
    <div className="loginModalWrap">
      <p className="name">Name: {user.username}</p>
      <p className="email">Email: {user.email}</p>

      <Button
        onClick={() => {
          // console.log("logout");
          logout();

          return;
        }}
        className="modalBtn"
      >
        Log out
      </Button>
    </div>
  );
}
