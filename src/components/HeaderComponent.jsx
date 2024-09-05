import React from "react";
import "./../styles/App.css";

import Logo from "./../images/Logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header container">
      <img src={Logo} alt="Logo" width={66} height={66} />

      <div className="header-right">
        <nav>
          <ul className="header-nav">
            <li>
              <a href="#auctions">Auctions</a>
            </li>
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#creators">Creators</a>
            </li>
          </ul>
        </nav>

        <Button text="Connect Wallet" />
      </div>
    </div>
  );
};

export default HeaderComponent;
