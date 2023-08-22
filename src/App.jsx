import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Sidebar from "./components/Sidebar";
import SearchInput from "./components/SearchInput";
import { MoviesContext } from "./context/MoviesContext";
import MovieCard from "./components/MovieCard";
import MovieCard2 from "./components/MovieCard2";

function App() {
  const { filtered } = useContext(MoviesContext);

  return (
    <div className="wrap">
      <Sidebar />

      <div className="mainContentBox">
        <SearchInput placeholder="Search for movies or TV series" />

        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="trending">Trending</h1>
        )}

        <div className="movieWrap">
          {filtered.map((i, index) => {
            if (i.isTrending === true) {
              return <MovieCard key={i.title + index} i={i}></MovieCard>;
            }
          })}
        </div>
        {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="recommend">Recommended for you</h1>
        )}
        <div className="movieWrap flexWrap">
          {filtered.map((i, index) => {
            if (i.isTrending === false) {
              return <MovieCard2 key={i.title + index} i={i}></MovieCard2>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
