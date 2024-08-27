import React from "react";

import coinbase from "./../images/partners/coinbase.svg"
import blockchain from "./../images/partners/blockchain.svg"
import binance from "./../images/partners/binance.svg"
import bitmex from "./../images/partners/bitmex.svg"

const Partners = () => {
  return (
    <section className="partners container">
      <img src={coinbase} alt="coinbase" />
      <img src={blockchain} alt="blockchain" />
      <img src={binance} alt="binance" />
      <img src={bitmex} alt="bitmex" />
    </section>
  );
};

export default Partners;
