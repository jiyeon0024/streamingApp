import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

export function MoviesContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

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
    const bookmark = data.find((i) => i.title === title);
    setBookmarks([...bookmarks, bookmark]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  const removeBookmark = (title) => {
    const newBookmarks = bookmarks.filter((i) => i.title !== title);
    setBookmarks(newBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  const checkBookmark = () => {
    if (bookmarks) {
      setBookmarks(false);
    } else {
      setBookmarks(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    let bookmarks = localStorage.getItem("bookmarks");
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
        checkBookmark,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
