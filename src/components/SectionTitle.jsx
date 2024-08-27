import React from "react";

const SectionTitle = (props) => {
  return (
    <div className='title'>
      <h2 className={`title-text ${props.red && 'red'}`}>{props.text}</h2>
    </div>
  );
};

export default SectionTitle;
