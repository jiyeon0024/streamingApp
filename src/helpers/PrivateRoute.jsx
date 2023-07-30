import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loggedIn, user } = useContext(UserContext);

  if (!loggedIn && !user) {
    return <Navigate to="/loginPage" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
