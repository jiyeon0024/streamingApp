import React, { useContext, useState, useEffect } from "react";

import "./MovieCard2.css";
import { MoviesContext } from "../../src/context/MoviesContext";

function MovieCard2({ i, setBookmarkData }) {
  const [play, setPlay] = useState(false);

  const [isBookMark, setIsBookMark] = useState(false);
  let bookmarks = [];

  function handleBookmark() {
    if (localStorage.getItem("bookmark")) {
      bookmarks = JSON.parse(localStorage.getItem("bookmark"));
      console.log(bookmarks);
      if (bookmarks && bookmarks.includes(i.title)) {
        bookmarks = bookmarks.filter((item) => item != i.title);
        setIsBookMark(false);
      } else {
        setIsBookMark(true);
        bookmarks.push(i.title);
      }
      localStorage.setItem("bookmark", JSON.stringify(bookmarks));
    } else {
      localStorage.setItem("bookmark", JSON.stringify([i.title]));
      setIsBookMark(true);
    }
  }

  const checkBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmark"));
    if (bookmarks && bookmarks.includes(i.title)) {
      setIsBookMark(true);
    }
  };

  useEffect(() => {
    checkBookmark();
  }, []);

  return (
    <div
      className="movieBox2"
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      {play ? (
        <div className="play">
          <img src="src/assets/icon-play.svg" className="playIcon"></img>
          <p className="playTitle">Play</p>
        </div>
      ) : null}

      <img src={i.thumbnail.regular.large} className="thumbnail"></img>

      <div
        className="bookMark"
        onMouseEnter={() => setPlay(false)}
        onClick={() => {
          handleBookmark();
          setBookmarkData(bookmarks);
        }}
      >
        {isBookMark ? (
          <img src="src/assets/icon-bookmark-full.svg" alt="" />
        ) : (
          <img src="src/assets/icon-bookmark-empty.svg" alt="" />
        )}
      </div>

      <div className="movieInfo2">
        <div className="details">
          <p>{i.year}</p>
          <span className="dot">.</span>
          {i.category === "Movie" ? (
            <img src="src/assets/icon-category-movie.svg" alt="" />
          ) : (
            <img src="src/assets/icon-category-tv.svg" alt="" />
          )}

          <p>{i.category}</p>
          <span className="dot">.</span>
          <p>{i.rating}</p>
        </div>

        <p className="title">{i.title}</p>
      </div>
    </div>
  );
}

export default MovieCard2;
