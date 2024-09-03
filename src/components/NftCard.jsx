import React from "react";
import Avatar from "./../images/avatars/Avatar1.svg";
import Heart from "./../images/icons/Heart.svg";
import Button from "./Button";

import image1 from "./../images/nfts/Image2.png";
import image2 from "./../images/nfts/Image3.png";
import image3 from "./../images/nfts/Image4.png";
import image4 from "./../images/nfts/Image5.png";
import image5 from "./../images/nfts/Image6.png";

import avatar1 from "./../images/avatars/Avatar1.svg"
import avatar2 from "./../images/avatars/Avatar2.svg"
import avatar3 from "./../images/avatars/Avatar3.svg"
import avatar4 from "./../images/avatars/Avatar4.svg"

const images = {
  Nft1: image1,
  Nft2: image2,
  Nft3: image3,
  Nft4: image4,
  Nft5: image5,
};

const avatars = {
  Avt1: avatar1,
  Avt2: avatar2,
  Avt3: avatar3,
  Avt4: avatar4,
};

const NftCard = (props) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={images[props.image]} alt="NFT" />
        <div className="card-timer">{props.time}</div>
      </div>

      <div className="card-info">
        <div className="card-info-main">
          <div className="card-info-user">
            <img src={avatars[props.avatar]} alt="Avatar" />
            <div>
              <p className="card-info-title">{props.title}</p>
              <p className="card-info-username">by {props.username}</p>
            </div>
          </div>
          <div className="card-info-likes">
            <img src={Heart} alt="Heart" />
            {props.likes}
          </div>
        </div>

        <div className="card-info-bid">
          <p className="card-info-bid-text">Current Bid</p>
          <p className="card-info-bid-price">{props.bid}</p>
        </div>
      </div>

      <Button card text="Place a Bid" />
    </div>
  );
};

export default NftCard;
