import React, { useEffect, useState } from "react";
import "./SearchInput.css";
import Input from "./Input";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

function SearchInput({ category = "", placeholder }) {
  const [inputData, setInputData] = useState("");
  const { data, setFiltered, bookmarks } = useContext(MoviesContext);
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    let _inputData = e.target.value;
    setInputData(_inputData);
  };

  useEffect(() => {
    if (inputData === "") {
      setFiltered(data);
      setResult([]);
      return;
    }
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
          (category !== "" ? i.category === category : true)
        ) {
          return i.title;
        }
      });
    }
    setResult(movies);
  }, [inputData]);

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
            newInputData = data.filter(
              (i) =>
                i.title.toLowerCase().includes(_inputData.toLowerCase()) &&
                (category !== "" ? i.category === category : true)
            );
          }

          setFiltered(newInputData);
          setResult([]);
        }}
      />
      <Input
        className="searchInput"
        value={inputData}
        placeholder={placeholder}
        onChange={handleChange}
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
