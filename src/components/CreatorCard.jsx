import React from "react";
import avatar1 from "./../images/avatars/Avatar1.svg";

const CreatorCard = (props) => {
  return (
    <div className="cr-card">
      <div className="cr-card-left">
        <img src={props.img} alt="Creator" />
        <div className="cr-card-info">
          <span className="cr-card-main">{props.name}</span>
          <span className="cr-card-sub">{props.subtext}</span>
        </div>
      </div>
      <div className="cr-card-right">
        <span className="cr-card-main">{props.count}</span>
        <span className="cr-card-sub">Items</span>
      </div>
    </div>
  );
};

export default CreatorCard;
