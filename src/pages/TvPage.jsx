import React from "react";
import { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import MovieCard2 from "../components/MovieCard2";
import { MoviesContext } from "../context/MoviesContext";

function TvPage() {
  const { filtered } = useContext(MoviesContext);
  return (
    <div className="wrap">
      <Sidebar />

      <div className="mainContentBox">
        <SearchInput
          category={"TV Series"}
          placeholder="Search for TV series"
        />

        <h1 className="trending">TV Series</h1>
        <div className="movieWrap">
          {filtered.map((i, index) => {
            if (i.category === "TV Series") {
              return <MovieCard2 key={i.title + index} i={i}></MovieCard2>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TvPage;
