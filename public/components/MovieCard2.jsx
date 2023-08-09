import React, { useContext, useState } from "react";

import "./MovieCard2.css";

function MovieCard2({ i }) {
  const [play, setPlay] = useState(false);
  const [bookMark, setBookMark] = useState(false);

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

      <div className="bookMark" onMouseEnter={() => setPlay(false)}>
        <img src="src/assets/icon-bookmark-empty.svg" alt="" />
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