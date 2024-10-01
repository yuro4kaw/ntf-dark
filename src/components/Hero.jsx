import React, { useEffect, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import CardImage from "./../images/nfts/Image1.png";
import { Link } from "react-router-dom";
import ArrowDown from "./../images/icons/ArrowDown.svg";
import axios from "axios";

const Hero = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const apiUrl = "http://local.loc/wp-json/wp/v2/posts";

    axios
      .get(apiUrl)
      .then((res) => {
        const result = res.data[0].title.rendered;
        setTitle(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="hero container">
      <div>
        <h1>{title}</h1>
        <div className="hero-buttons">
          <Button text="Explore" yellow large />
          <Button text="Create" white large />
        </div>
        <div className="hero-counters">
          <Counter value="32k+" description="Artworks" />
          <Counter value="20k+" description="Auctions" />
          <Counter value="12k+" description="Creators" />
        </div>
      </div>

      <div className="nft-wrapper">
        <div className="nft-top">
          <div>
            <p className="nft-top-text">Current Bid</p>
            <p className="nft-top-value">0.99 ETH</p>
          </div>

          <div>
            <p className="nft-top-text">Ends in</p>
            <p className="nft-top-value">25 hrs</p>
          </div>
        </div>

        <img className="nft" src={CardImage} alt="NFT" />

        <div className="nft-bottom">
          <div>
            <p className="nft-bottom-text">Artist</p>
            <Link className="nft-bottom-username" to="https://instagram.com">
              @wzard
            </Link>
          </div>

          <Button text="Start Bid" yellow />
        </div>
      </div>

      <div className="arrow">
        <img src={ArrowDown} alt="Down" />
      </div>
    </section>
  );
};

export default Hero;
