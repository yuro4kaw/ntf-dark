import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`button ${props.yellow && "yellow"} ${
        props.hidden && "hidden"
      } ${props.medium && "medium"} ${props.large && "large"} ${
        props.big && "big"
      } ${props.centered && "centered"} ${props.white && "white"} ${
        props.card && "card-button"
      } ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
