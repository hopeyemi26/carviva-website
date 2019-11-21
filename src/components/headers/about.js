import React from "react";
import Navbar from "../layout/navbar";
import LadyImage from "../../images/about-lady.png";

const AboutHeader = () => (
  <section className="hero home-header is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="intro">
              <h1 className="title has-text-white is-2">
                Experience a smarter <br />
                and rewarding Autocare
              </h1>
              <p className="subtitle has-text-white is-5 is-spaced">
                We have best prices from a large network <br /> of providers
                with great mechanics!
              </p>
            </div>
          </div>
          <div className="column phone-holder is-hidden-desktop">
            <img src={LadyImage} alt="About us" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeader;
