import React from "react";

const Button = (props) => {
  return (
    <button
      className={`button ${props.yellow && "yellow"} ${props.hidden && "hidden"} ${
        props.medium && "medium"
      } ${props.large && "large"} ${props.centered && "centered"} ${props.white && "white"} ${
        props.card && "card-button"
      } ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
