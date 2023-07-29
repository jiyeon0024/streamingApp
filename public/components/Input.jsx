import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <input
      className={`input || ${props.className}`}
      onChange={(e) => {
        props.onChange(e.currentTarget.value);
      }}
      placeholder={props.placeholder}
    ></input>
  );
}

export default Input;
