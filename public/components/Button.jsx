import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`btn && ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
