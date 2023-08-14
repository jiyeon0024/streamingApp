import React from "react";
import "./SearchInput.css";
import Input from "./Input";

function SearchInput(props) {
  return (
    <div className="searchInputWrap">
      <img
        className="searchIcon"
        src="src/assets/icon-search.svg"
        alt=""
        onClick={props.onClick}
      />
      <Input
        className="searchInput"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></Input>
    </div>
  );
}

export default SearchInput;
