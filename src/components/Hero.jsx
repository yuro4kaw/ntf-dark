import React, { useEffect, useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import CardImage from "./../images/nfts/Image1.png";
import { Link } from "react-router-dom";
import ArrowDown from "./../images/icons/ArrowDown.svg";
import axios from "axios";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const apiUrl =
      "http://local.loc/wp-json/wp/v2/pages/27?acf_format=standard&_fields=acf,id";

    axios
      .get(apiUrl)
      .then((res) => {
        const result = res.data.acf;
        setHeroData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!heroData || !heroData.stats) {
    return <div>Loading...</div>;
  }
  
  if (heroData.enable_hero) {
    return (
      <section className="hero container">
        <div>
          <h1>{heroData.hero_title}</h1>
          <div className="hero-buttons">
            <Button text={heroData.button1} yellow large />
            <Button text={heroData.button2} white large />
          </div>
          <div className="hero-counters">
            <Counter
              value={heroData.stats.result1}
              description={heroData.stats.text1}
            />
            <Counter
              value={heroData.stats.result2}
              description={heroData.stats.text2}
            />
            <Counter
              value={heroData.stats.result3}
              description={heroData.stats.text3}
            />
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

          <img
            className="nft"
            src={heroData.hero_image}
            alt="NFT"
            width={558}
            height={718}
          />

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
  }
};

export default Hero;
