import React from "react";
import "./../styles/App.css";

import Logo from "./../images/Logo.svg";
import Button from "./Button";

const HeaderComponent = () => {
  return (
    <div className="header container">
      <img src={Logo} alt="Logo" width={66} height={66} />

      <div className="header-right">
        <nav>
          <ul className="header-nav">
            <li className="active">Explore</li>
            <li>Creators</li>
            <li>Community</li>
          </ul>
        </nav>

        <Button text="Connect Wallet" />
      </div>
    </div>
  );
};

export default HeaderComponent;
