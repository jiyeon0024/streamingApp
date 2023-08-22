import React from "react";
import { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import MovieCard2 from "../components/MovieCard2";
import { MoviesContext } from "../context/MoviesContext";

function BookmarksPage() {
  const { filtered, bookmarks } = useContext(MoviesContext);

  return (
    <div className="wrap">
      <Sidebar />

      <div className="mainContentBox">
        <SearchInput
          category={"Bookmarks"}
          // value={inputData}
          placeholder="Search for bookmarked shows"
        />

        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="trending">Bookmarked Movies</h1>
        )}

        <div className="movieWrap">
          {filtered && filtered.length != 29 ? (
            <>
              {(bookmarks && filtered).map((i, index) => {
                if (i?.category === "Movie") {
                  return <MovieCard2 kye={i.title + index} i={i}></MovieCard2>;
                }
              })}
            </>
          ) : (
            <>
              {bookmarks.map((i, index) => {
                if (i?.category === "Movie") {
                  return <MovieCard2 key={i.title + index} i={i}></MovieCard2>;
                }
              })}
            </>
          )}
        </div>
        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="recommend">Bookmarked TV Series</h1>
        )}
        <div className="movieWrap flexWrap">
          {filtered && filtered.length != 29 ? (
            <>
              {(bookmarks && filtered).map((i) => {
                if (i?.category === "TV Series") {
                  return <MovieCard2 i={i}></MovieCard2>;
                }
              })}
            </>
          ) : (
            <>
              {bookmarks.map((i) => {
                if (i?.category === "TV Series") {
                  return <MovieCard2 i={i}></MovieCard2>;
                }
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookmarksPage;
