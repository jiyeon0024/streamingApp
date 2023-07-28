import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input
      className="input"
      onChange={props.onChange}
      placeholder={props.placeholder}
    ></input>
  );
}

export default Input;
