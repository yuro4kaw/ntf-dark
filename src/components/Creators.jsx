import React from "react";
import SectionTitle from "./SectionTitle";
import CreatorCard from "./CreatorCard";
import Button from "./Button";

const Creators = () => {
  return (
    <section id="creators" className="creators container">
      <SectionTitle text="Top Creators" red />
      <div className="creators-cards">
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
      </div>
      <Button text="View All" large white />
    </section>
  );
};

export default Creators;
