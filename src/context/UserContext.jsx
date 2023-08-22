import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : {};
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("user") ? true : false;
  });

  const login = async (email, password) => {
    const response = await fetch("../user.json");
    const data = await response.json();

    data.users.forEach((i) => {
      if (i.email === email && i.password === password) {
        setLoggedIn(true);
        setUser(i);
        localStorage.setItem("user", JSON.stringify(i));

        return;
      }
    });
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");

    return;
  };

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        login,
        user,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
