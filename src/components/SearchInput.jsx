import React, { useState } from "react";
import "./SearchInput.css";
import Input from "./Input";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

function SearchInput({ category = "", placeholder }) {
  const [inputData, setInputData] = useState("");
  const { data, setFiltered, bookmarks } = useContext(MoviesContext);
  const [result, setResult] = useState([]);

  return (
    <div className="searchInputWrap">
      <img
        className="searchIcon"
        src="assets/assets/icon-search.svg"
        alt=""
        onClick={(e) => {
          e.preventDefault();

          let _inputData = inputData.toLowerCase().trim();

          let newInputData;
          if (category === "Bookmarks") {
            newInputData = bookmarks.filter((i) =>
              i.title.toLowerCase().includes(_inputData)
            );
          } else {
            data.filter((i) =>
              i.title.toLowerCase().includes(_inputData.toLowerCase()) &&
              category !== ""
                ? i.category === category
                : true
            );
          }

          // console.log(newInputData[0].title);

          setFiltered(newInputData);
          setResult([]);
        }}
      />
      <Input
        className="searchInput"
        value={inputData}
        placeholder={placeholder}
        onChange={(e) => {
          // console.log(inputData);
          setInputData(e.target.value);

          if (e.target.value === "") {
            setFiltered(data);
            setResult([]);
            return;
          }
          // console.log(inputData);
          // console.log(result);
          let movies;
          if (category === "Bookmarks") {
            movies = bookmarks.map((i) => {
              if (i.title.toLowerCase().includes(inputData.toLowerCase())) {
                return i.title;
              }
            });
          } else {
            movies = data.map((i) => {
              if (
                i.title.toLowerCase().includes(inputData.toLowerCase()) &&
                category !== ""
                  ? i.category === category
                  : true
              ) {
                return i.title;
              }
            });
          }
          setResult(movies);
        }}
      />
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
    </div>
  );
}

export default SearchInput;
