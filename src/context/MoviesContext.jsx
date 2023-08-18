import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [inputFilterData, setInputFilterData] = useState("");

  function getData() {
    fetch("../data.json")
      .then((data) => data.json())
      .then((val) => {
        setData(val);
        setFiltered(val);
      });
  }
  //   console.log(data);

  const addBookmark = (title) => {
    const bookmark = data.find((i) => i?.title === title);
    setBookmarks([...bookmarks, bookmark]);
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, bookmark]));
  };

  const removeBookmark = (title) => {
    const newBookmarks = bookmarks.filter((i) => i?.title !== title);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    let bookmarks = localStorage.getItem("bookmarks");
    console.log(bookmarks);
    if (bookmarks) {
      setBookmarks(JSON.parse(bookmarks));
    }
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        data,
        filtered,
        setFiltered,
        addBookmark,
        removeBookmark,
        bookmarks,
        setBookmarks,
        setInputFilterData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
