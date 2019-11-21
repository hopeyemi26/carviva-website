import React from "react";
import Navbar from "../layout/navbar";
import contactImage from "../../images/contact-map.png";

const ContactHeader = () => (
  <section className="hero home-header is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="intro">
              <h1 className="title has-text-white is-2">
                Got questions?
                <br />
                Contact Us
              </h1>
              <p className="subtitle has-text-white is-5 is-spaced">
                We aim to be everywhere! <br />
                Just tap a button to get quick autocare <br /> near you at best
                prices.
              </p>
            </div>
          </div>
          <div className="column phone-holder">
            <img src={contactImage} alt="Maps" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactHeader;
