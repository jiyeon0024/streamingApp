import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return <Navigate to="/loginPage" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
