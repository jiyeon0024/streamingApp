import React, { Children, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loggedIn, user, logout } = useContext(UserContext);
  // if (!loggedIn || !user) {
  //   return <Navigate to="/loginPage" />;
  // } else {
  //   return children;
  // }

  if (!loggedIn) {
    return <Navigate to="/loginPage" />;
  } else {
    return children;
  }
}
export default PrivateRoute;
