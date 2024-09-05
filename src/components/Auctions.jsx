import React from "react";
import SectionTitle from "./SectionTitle";
import NftCard from "./NftCard";
import Button from "./Button";
import { Carousel } from "@mantine/carousel";
import Arrow from "./../images/icons/Arrow.svg";
import auctionsJson from "./../json/AuctionsData.json"

const AuctionsData = auctionsJson;

const PrevIcon = () => {
  return (
    <div>
      <img style={{ rotate: "180deg" }} src={Arrow} alt="<-" />
    </div>
  );
};

const NextIcon = () => {
  return (
    <div>
      <img src={Arrow} alt="->" />
    </div>
  );
};

const Auctions = () => {
  return (
    <section id="auctions" className="auction">
      <SectionTitle text="Live Auctions" red />
      <Carousel
        className="auction-cards"
        align="start"
        slideSize={"38%"}
        previousControlIcon={<PrevIcon />}
        nextControlIcon={<NextIcon />}
        containScroll={`trimSnaps`}
        dragFree
      >
        {AuctionsData.map((card, index) => (
          <Carousel.Slide key={index}>
            <NftCard
              time={card.time}
              title={card.title}
              username={card.username}
              bid={card.bid}
              likes={card.likes}
              image={card.image}
              avatar={card.avatar}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Button className="standart" white large text="View All" />
    </section>
  );
};

export default Auctions;
