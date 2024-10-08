import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import CreatorCard from "./CreatorCard";
import Button from "./Button";
import axios from "axios";

const Creators = () => {
  const [creatorsData, setCreatorsData] = useState(null);

  useEffect(() => {
    const apiUrl =
      "http://local.loc/wp-json/wp/v2/creators?acf_format=standard&_fields=acf,id";

    axios
      .get(apiUrl)
      .then((res) => {
        const result = res.data;
        setCreatorsData(result.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  if (creatorsData) {
    return (
      <section id="creators" className="creators container">
        <SectionTitle text="Top Creators" red />
        <div className="creators-cards">
          {creatorsData.map((card, key) => (
            <CreatorCard
              key={key}
              name={card.acf.creator_name_1}
              img={card.acf.creator_img_1}
              subtext={card.acf.creator_subtext_1}
              count={card.acf.creator_items_count_1}
            />
          ))}
        </div>
        <Button text="View All" large white />
      </section>
    );
  }
};

export default Creators;
