import React from "react";
import SectionTitle from "./SectionTitle";
import NftCard from "./NftCard";

const Auctions = () => {
  return (
    <section className="auction">
      <SectionTitle text="Live Auctions" red />
      <div className="auction-cards">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </section>
  );
};

export default Auctions;
