import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { logout } = useContext(UserContext);
  return (
    <div>
      <p>default page</p>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
