import React from "react";
import avatar1 from "./../images/avatars/Avatar1.svg";

const CreatorCard = () => {
  return (
    <div className="cr-card">
      <div className="cr-card-left">
        <img src={avatar1} alt="" />
        <div className="cr-card-info">
          <span className="cr-card-main">Wzard Dee</span>
          <span className="cr-card-sub">4.89 ETH</span>
        </div>
      </div>
      <div className="cr-card-right">
        <span className="cr-card-main">33</span>
        <span className="cr-card-sub">Items</span>
      </div>
    </div>
  );
};

export default CreatorCard;
