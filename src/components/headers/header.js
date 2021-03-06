import React from "react";

import phonePlaceholder from "../../images/phone.png";
import appStoreBadge from "../../images/app-store.png";
import playStoreBadge from "../../images/play-store.png";
import Navbar from "../layout/navbar";

const Header = ({ siteTitle }) => (
  <section className="hero home-header is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="intro">
              <h1 className="title has-text-white is-2">
                Tap a Button. <br />
                Get Quick Autocare <br />
                Near You
              </h1>
              <p className="subtitle has-text-white is-5 is-spaced">
                Download the Carviva app to get started
              </p>
              <span className="is-block download-app">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-text"
                >
                  <img src={appStoreBadge} alt="appstore" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.carviva.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-text"
                >
                  <img src={playStoreBadge} alt="appstore" />
                </a>
              </span>
            </div>
          </div>
          <div className="column phone-holder" id="signup">
            <figure className="image">
              <img src={phonePlaceholder} alt="phone" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
