import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    const response = await fetch("../user.json");
    const data = await response.json();
    console.log(data.users);

    data.users.forEach((i) => {
      if (i.email === email && i.password === password) {
        setUser(i);
        setLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(i));
        return;
      } else if (email === "" && password === "") {
        setLoggedIn(false);
      }
    });
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedIn, login, user, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
