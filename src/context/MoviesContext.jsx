import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [data, setData] = useState([]);

  function getData() {
    fetch("../data.json")
      .then((data) => data.json())
      .then((val) => {
        setData(val);
      });
  }
  //   console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <MoviesContext.Provider value={{ data }}>{children}</MoviesContext.Provider>
  );
}
