import React from "react";
import { FaGithub } from "react-icons/fa";

import phonePlaceholder from "../images/phone.png";
import appStoreBadge from "../images/app-store-badge.png";
import playStoreBadge from "../images/google-play-badge.png";
import Navbar from "./navbar";

import "./style.scss";

const Header = ({ siteTitle }) => (
  <section className="hero home-header is-fullheight-with-navbar">
    {/* <div className="first-overlay">
      <img src={firstOverlay} alt="Logo-1" />
    </div>
    <div className="second-overlay"></div> */}
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <div className="columns">
          <div className="column is-three-fifths">
            <h1 className="title has-text-white is-2">
              Tap a Button. <br />
              Get Quick Autocare <br />
              Near You
            </h1>
            <p className="subtitle has-text-white is-5 is-spaced">
              Download the Carviva app to get started
            </p>
            <span className="is-block download-app">
              <a href="/" className="button is-text">
                <img src={appStoreBadge} alt="appstore" />
              </a>
              <a href="/" className="button is-text">
                <img src={playStoreBadge} alt="appstore" />
              </a>
            </span>
          </div>
          <div className="column phone-holder">
            <figure class="image">
              <img src={phonePlaceholder} alt="phone" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
