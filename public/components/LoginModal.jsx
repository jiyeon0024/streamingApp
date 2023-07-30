import React, { useContext } from "react";
import "./LoginModal.css";
import { UserContext } from "../../src/context/UserContext";
import Button from "./Button";

export default function LoginModal() {
  const { user, logout } = useContext(UserContext);
  console.log(user);
  return (
    <div className="loginModalWrap">
      <p className="name">Name: {user.username}</p>
      <p className="email">Email: {user.email}</p>
      <Button onClick={logout} className="modalBtn">
        Log out
      </Button>
    </div>
  );
}
