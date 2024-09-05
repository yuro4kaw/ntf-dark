import React from "react";
import logo from "./../images/Logo.svg";
import youtube from "./../images/socials/YouTube.svg";
import twitter from "./../images/socials/Twitter.svg";
import facebook from "./../images/socials/FaceBook.svg";
import google from "./../images/socials/Google.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const iconsData = [
    { src: youtube, alt: "YouTube", url: "https://www.youtube.com" },
    { src: twitter, alt: "Twitter", url: "https://www.twitter.com" },
    { src: facebook, alt: "Facebook", url: "https://www.facebook.com" },
    { src: google, alt: "Google", url: "https://www.google.com" },
  ];

  const menuData = [
    {
      title: "About Us",
      items: [
        { name: "About NFTs", url: "/about-nfts" },
        { name: "Live Auctions", url: "/live-auctions" },
        { name: "NFT Blog", url: "/nft-blog" },
        { name: "Activity", url: "/activity" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Help & Support", url: "/help-support" },
        { name: "Item Details", url: "/item-details" },
        { name: "Author Profile", url: "/author-profile" },
        { name: "Collection", url: "/collection" },
      ],
    },
  ];

  return (
    <footer className="container">
      <div className="left">
        <img src={logo} alt="Logo" />
        <div className="main">
          <p>
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.{" "}
          </p>
          <div className="icons">
            {iconsData.map((icon, index) => (
              <Link
                to={icon.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <img src={icon.src} alt={icon.alt} />
              </Link>
            ))}
          </div>
          <p className="copyrights">All rights reserved @{year}</p>
        </div>
      </div>

      <div className="lists">
      {menuData.map((menu, index) => (
          <div key={index}>
            <h4>{menu.title}</h4>
            <ul>
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
