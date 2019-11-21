import React from "react";
import GoogleMapReact from "google-map-react";
import Navbar from "../layout/navbar";
import contactImage from "../../images/contact-map.png";

const ReactMapComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {text}
  </div>
);

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
          <div className="column phone-holder" style={{ height: "402px" }}>
            {/* <img src={contactImage} alt="Maps" /> */}
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCWhYZKXyWvBHf01TzjI5OnnwXajZAKtWQ"
              }}
              defaultCenter={{ lat: 6.6195948, lng: 3.3653967 }}
              defaultZoom={11}
            >
              <ReactMapComponent
                lat={6.6195948}
                lng={3.3653967}
                text="CarViva"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactHeader;
