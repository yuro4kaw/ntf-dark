import React from "react";

const HowItWorksCard = (props) => {
  return (
    <div className="works-card">
      <div className="works-card-image">
        <img src={props.src} alt={props.text} />
      </div>
    </div>
  );
};

export default HowItWorksCard;
