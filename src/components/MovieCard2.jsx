import React, { useContext, useState, useEffect } from "react";

import "./MovieCard2.css";
import { MoviesContext } from "../../src/context/MoviesContext";

function MovieCard2({ i, checkBookmark }) {
  const { bookmarks, addBookmark, removeBookmark } = useContext(MoviesContext);
  const [play, setPlay] = useState(false);
  console.log(i);

  return (
    <div
      className="movieBox2"
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      {play ? (
        <div className="play">
          <img src="assets/assets/icon-play.svg" className="playIcon"></img>
          <p className="playTitle">Play</p>
        </div>
      ) : null}

      <img src={i.thumbnail.regular.large} className="thumbnail"></img>

      <div className="bookMark" onMouseEnter={() => setPlay(false)}>
        {console.log(bookmarks?.find((movie) => movie?.title === i.title))}
        {bookmarks?.find((movie) => movie?.title === i.title) !== undefined ? (
          <img
            onClick={() => removeBookmark(i.title)}
            src="assets/assets/icon-bookmark-full.svg"
            alt=""
          />
        ) : (
          <img
            onClick={() => addBookmark(i.title)}
            src="assets/assets/icon-bookmark-empty.svg"
            alt=""
          />
        )}
      </div>

      <div className="movieInfo2">
        <div className="details">
          <p>{i.year}</p>
          <span className="dot">.</span>
          {i.category === "Movie" ? (
            <img src="assets/assets/icon-category-movie.svg" alt="" />
          ) : (
            <img src="assets/assets/icon-category-tv.svg" alt="" />
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
