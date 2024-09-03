import React from "react";
import CollectionCard from "./CollectionCard";
import { Carousel } from "@mantine/carousel";
import Button from "./Button";
import Arrow from "./../images/icons/Arrow.svg";
import SectionTitle from "./SectionTitle";

import collectionsJson from "./../json/CollectionsData.json";

const CollectionsData = collectionsJson;

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

const PopularCollections = () => {
  return (
    <section className="popular">
      <SectionTitle text="Popular Collections" red />
      <Carousel
        className="auction-cards"
        align="start"
        slideSize={"40%"}
        previousControlIcon={<PrevIcon />}
        nextControlIcon={<NextIcon />}
        containScroll={`trimSnaps`}
        dragFree
      >
        {CollectionsData.map((card, index) => (
          <Carousel.Slide key={index}>
            <CollectionCard
              username={card.username}
              image={card.image}
              avatar={card.avatar}
              nftId={card.nftId}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Button text="View All" large white />
    </section>
  );
};

export default PopularCollections;
