import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../src/context/MoviesContext";
import "./MovieCard.css";
import { UserContext } from "../context/UserContext";

function MovieCard({ i }) {
  const [play, setPlay] = useState(false);
  const { bookmarks, addBookmark, removeBookmark } = useContext(MoviesContext);
  return (
    <div
      className="movieBox"
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

      <div className="movieInfo">
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

export default MovieCard;
