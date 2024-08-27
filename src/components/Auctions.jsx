import React from "react";
import SectionTitle from "./SectionTitle";
import NftCard from "./NftCard";
import Button from "./Button";
import { Carousel } from "@mantine/carousel";
import Arrow from "./../images/icons/Arrow.svg";

const PrevIcon = () => {
  return (
    <div>
      <img style={{rotate: "180deg"}} src={Arrow} alt="<-" />
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
    <section className="auction">

  
      <SectionTitle text="Live Auctions" red />
      <Carousel className="auction-cards" align="start" slideSize={"38%"} previousControlIcon={<PrevIcon />} nextControlIcon={<NextIcon />}>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <NftCard />
        </Carousel.Slide>
      </Carousel>
      <Button className="standart" white large text="View All" />
    </section>
  );
};

export default Auctions;
