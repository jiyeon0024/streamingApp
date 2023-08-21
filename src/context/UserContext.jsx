import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState({});

  const login = async (email, password) => {
    const response = await fetch("../user.json");
    const data = await response.json();
    // console.log(data.users);

    data.users.forEach((i) => {
      if (i.email === email && i.password === password) {
        setLoggedIn(true);
        setUser(i);
        localStorage.setItem("user", JSON.stringify(i));

        return;
        // } else if (email === "" && password === "") {
        //   setLoggedIn(false);
        //   return;
      }
    });

    // console.log(loggedIn);
    // console.log(user);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    console.log("logout");
    // localStorage.removeItem("user");

    // setUser("");
    localStorage.removeItem("user");

    return;
  };

  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : {};
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorage.getItem("user") ? true : false;
  });

  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     setLoggedIn(true);
  //     setUser(JSON.parse(localStorage.getItem("user")));
  //   }
  // }, []);

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
