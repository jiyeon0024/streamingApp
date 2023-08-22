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
          value={inputData}
          placeholder="Search for TV series"
        />

        {filtered && filtered.length !== 29 && inputData !== "" ? (
          <div className="result">
            <span className="margin">Found </span>
            <span className="margin">{filtered.length} </span>
            <span className="margin">
              {filtered.length == 1 ? "result" : "results"}
            </span>
            <span className="margin"> for '{}'</span>
          </div>
        ) : null}
        <h1 className="trending">TV Series</h1>
        <div className="movieWrap">
          {filtered.map((i) => {
            if (i.category === "TV Series") {
              return <MovieCard2 i={i}></MovieCard2>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TvPage;
