import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../../src/context/MoviesContext";
import "./MovieCard.css";
import { UserContext } from "../context/UserContext";

function MovieCard({ i, checkBookmark }) {
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
          <img src="src/assets/icon-play.svg" className="playIcon"></img>
          <p className="playTitle">Play</p>
        </div>
      ) : null}

      <img src={i.thumbnail.regular.large} className="thumbnail"></img>

      <div
        className="bookMark"
        onMouseEnter={() => setPlay(false)}
        onClick={checkBookmark}
      >
        {bookmarks ? (
          <img
            onClick={addBookmark}
            src="src/assets/icon-bookmark-full.svg"
            alt=""
          />
        ) : (
          <img
            onClick={removeBookmark}
            src="src/assets/icon-bookmark-empty.svg"
            alt=""
          />
        )}
      </div>

      <div className="movieInfo">
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

export default MovieCard;
