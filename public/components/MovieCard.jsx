import React, { useContext } from "react";
import { MoviesContext } from "../../src/context/MoviesContext";
import "./MovieCard.css";

function MovieCard({ i }) {
  return (
    <div className="movieBox">
      <img src={i.thumbnail.regular.large} className="thumbnail"></img>
      <div className="movieInfo">
        <p>{i.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
