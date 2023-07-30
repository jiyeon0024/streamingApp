import React from "react";
import "./SearchInput.css";
import Input from "./Input";

function SearchInput() {
  return (
    <div className="searchInputWrap">
      <img className="searchIcon" src="src/assets/icon-search.svg" alt="" />
      <Input
        className="searchInput"
        placeholder="Search for movies or TV series"
      ></Input>
    </div>
  );
}

export default SearchInput;
