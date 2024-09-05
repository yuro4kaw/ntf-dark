import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const Newsletter = () => {
  return (
    <section className="newsletter container">
      <SectionTitle text="Ready for Next NFT Drop?" />
      <form action="submit" style={{ zIndex: 100 }}>
        <input
          className="newsletter-input"
          type="text"
          placeholder="info@gmail.com"
        />

        <Button text="Subscribe" type="submit" big yellow />
      </form>
    </section>
  );
};

export default Newsletter;
