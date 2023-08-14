import React from "react";
import { useContext, useState } from "react";

import Sidebar from "../components/Sidebar";
import SearchInput from "../components/SearchInput";
import MovieCard2 from "../components/MovieCard2";
import { MoviesContext } from "../context/MoviesContext";

function MoviesPage() {
  const { data, setFiltered, filtered } = useContext(MoviesContext);
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState([]);
  let newInputData = [];

  return (
    <div className="wrap">
      <Sidebar></Sidebar>

      <div className="mainContentBox">
        <SearchInput
          value={inputData}
          placeholder="Search for movies "
          onChange={(e) => {
            // console.log(inputData);
            setInputData(e.target.value);

            if (e.target.value === "") {
              setFiltered(data);
              setResult([]);
              return;
            }
            console.log(inputData);
            console.log(result);

            let movies = data.map((i) => {
              if (
                i.title
                  .toLowerCase()
                  .trim()
                  .includes(inputData.toLowerCase().trim()) &&
                i.category == "Movie"
              ) {
                return i.title;
              }
            });
            setResult(movies);
          }}
          onClick={(e) => {
            e.preventDefault();
            let _inputData = inputData.toLowerCase().trim();

            newInputData = data.filter(
              (i) =>
                i.title.toLowerCase().trim().includes(_inputData) &&
                i.category == "Movie"
            );
            // console.log(newInputData[0].title);

            setFiltered(newInputData);
            setResult([]);
          }}
        ></SearchInput>
        <div className="inputList">
          {result.map((i) => {
            return (
              <p
                className="list"
                onClick={() => {
                  setInputData(i);
                  setResult([]);
                }}
              >
                {i}
              </p>
            );
          })}
        </div>
        {console.log(filtered.length)}
        {filtered && filtered.length !== 29 ? (
          <div className="result">
            <span className="margin">Found </span>
            <span className="margin">{filtered.length} </span>
            <span className="margin">
              {filtered.length == 1 ? "result" : "results"}
            </span>
            <span className="margin"> for '{inputData}'</span>
          </div>
        ) : null}

        {/* {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="trending">Trending</h1>
        )} */}
        <h1 className="trending">Movies</h1>
        <div className="movieWrap">
          {filtered.map((i) => {
            if (i.category === "Movie") {
              return <MovieCard2 i={i}></MovieCard2>;
            }
          })}
        </div>
        {/* {filtered && filtered.length != 29 ? (
          <h1 className="trending"></h1>
        ) : (
          <h1 className="recommend">Recommended for you</h1>
        )}
        <div className="movieWrap flexWrap">
          {filtered.map((i) => {
            if (i.category === "Movie" && i.isTrending === false) {
              return <MovieCard i={i}></MovieCard>;
            }
          })}
        </div> */}
      </div>
    </div>
  );
}

export default MoviesPage;
