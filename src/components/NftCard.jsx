import React from "react";
import NftImage from "./../images/nfts/Image2.png";
import Avatar from "./../images/avatars/Avatar1.svg";
import Heart from "./../images/icons/Heart.svg";
import Button from "./Button";

const NftCard = () => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={NftImage} alt="NFT" />
        <div className="card-timer">03:18:24</div>
      </div>

      <div className="card-info">
        <div className="card-info-main">
          <div className="card-info-user">
            <img src={Avatar} alt="Avatar" />
            <div>
              <p className="card-info-title">Virtual Art</p>
              <p className="card-info-username">by @wzard</p>
            </div>
          </div>
          <div className="card-info-likes">
            <img src={Heart} alt="Heart" />
            98
          </div>
        </div>

        <div className="card-info-bid">
          <p className="card-info-bid-text">Current Bid</p>
          <p className="card-info-bid-price">4.89 ETH</p>
        </div>
      </div>

      <Button card text="Place a Bid" />
    </div>
  );
};

export default NftCard;
