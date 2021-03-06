import React from "react";
import Navbar from "../layout/navbar";
import PartnerForm from "../partnerform";

const PartnersHeader = () => (
  <section className="hero home-header is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="intro">
              <h1 className="title has-text-white is-2">
                Grow your Numbers <br />
                with Carviva
              </h1>
              <p className="subtitle has-text-white is-5 is-spaced">
                Tap into a large community of car owners <br /> to make more
                money for your service <br /> centre.
              </p>
            </div>
          </div>
          <div className="column phone-holder">
            <PartnerForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersHeader;
