import React from 'react'

const Button = (props) => {
  return (
    <button className={`button ${props.yellow && "yellow"} ${props.large && "large"} ${props.card && "card-button"}`}>{props.text}</button>
  )
}

export default Button;