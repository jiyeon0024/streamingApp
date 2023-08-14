import React from "react";

function Img(props) {
  return (
    <img
      className={props.className}
      alt=""
      onClick={props.onClick}
      src={props.src}
    />
  );
}

export default Img;
