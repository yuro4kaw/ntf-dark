import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { Carousel } from "@mantine/carousel";
import Arrow from "./../images/icons/Arrow.svg";
import categoriesJson from "./../json/CategoriesData.json"
import CategoryCard from "./CategoryCard";

const CategoriesData = categoriesJson;

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

const Categories = () => {
  return (
    <section className="categories">
      <SectionTitle text="Explore By Categories" purple />
      <Carousel
        className="categories-cards"
        align="start"
        slideSize={"38%"}
        previousControlIcon={<PrevIcon />}
        nextControlIcon={<NextIcon />}
        containScroll={`trimSnaps`}
        dragFree
      >
        {CategoriesData.map((card, index) => (
          <Carousel.Slide key={index}>
            <CategoryCard
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

export default Categories;
