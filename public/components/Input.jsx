import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input
      className={`input || ${props.className}`}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
    ></input>
  );
}

export default Input;
