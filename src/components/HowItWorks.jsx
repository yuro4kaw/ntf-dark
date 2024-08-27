import React from "react";
import SectionTitle from "./SectionTitle";
import Wallet from "./../images/icons/Wallet.svg";
import Collection from "./../images/icons/Collection.svg";
import Plus from "./../images/icons/Plus.svg";
import Chart from "./../images/icons/Chart.svg";
import ArrowPurple from "./../images/icons/PurpleArrow.svg";


import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  return (
    <section className="container works">
      <SectionTitle text="How it works" />
      <div className="works-cards">
        <HowItWorksCard src={Wallet} text="Set up your wallet" />
        <img src={ArrowPurple} alt="->" />
        <HowItWorksCard src={Collection} text="Create your collection" />
        <img src={ArrowPurple} alt="->" />
        <HowItWorksCard src={Plus} text="Add your NFTs" />
        <img src={ArrowPurple} alt="->" />
        <HowItWorksCard src={Chart} text="List them for sale" />
      </div>
      <div className="works-cards-text">
        <p>Set up your wallet</p>
        <p>Create your collection</p>
        <p>Add your NFTs</p>
        <p>List them for sale</p>
      </div>
    </section>
  );
};

export default HowItWorks;
