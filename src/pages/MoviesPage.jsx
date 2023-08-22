import React from "react";
import { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import MovieCard2 from "../components/MovieCard2";
import { MoviesContext } from "../context/MoviesContext";

function MoviesPage() {
  const { filtered } = useContext(MoviesContext);

  return (
    <div className="wrap">
      <Sidebar />

      <div className="mainContentBox">
        <SearchInput category={"Movie"} placeholder="Search for movies " />

        <h1 className="trending">Movies</h1>
        <div className="movieWrap">
          {filtered.map((i, index) => {
            if (i.category === "Movie") {
              return <MovieCard2 key={i.title + index} i={i}></MovieCard2>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviesPage;
