import { createContext, useState } from "react";

export const UserContext = createContext(null);

function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <UserContext.Provider value={{ handleLogin, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
