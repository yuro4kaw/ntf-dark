import React from "react";
import NftImage from "./../images/nfts/Image2.png";

import image1 from "./../images/nfts/Image2.png";
import image2 from "./../images/nfts/Image3.png";
import image3 from "./../images/nfts/Image4.png";
import image4 from "./../images/nfts/Image5.png";
import image5 from "./../images/nfts/Image6.png";

import avatar1 from "./../images/avatars/Avatar1.svg";
import avatar2 from "./../images/avatars/Avatar2.svg";
import avatar3 from "./../images/avatars/Avatar3.svg";
import avatar4 from "./../images/avatars/Avatar4.svg";

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

const CollectionCard = (props) => {
  return (
    <div className="cl-card">
      <div className="cl-card-image-wrapper">
        <img src={images[props.image]} alt="NFT" />
      </div>

      <div className="cl-card-info">
        <div className="cl-card-info-main">
          <div className="cl-card-info-user">
            <img src={avatars[props.avatar]} alt="Avatar" />
            <p className="card-info-username">{props.username}</p>
          </div>

          <p>{props.nftId}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
