import React, { useState } from "react";
import { IoIosPin } from "react-icons/io";
import Modal from "react-modal";
import GoogleMapReact from "google-map-react";
import Faq from "../faq";
import questions from "../../owners.json";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

const ContactMidSection = () => {
  const [map, setMap] = useState(false);

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={map}
        onRequestClose={() => setMap(false)}
        contentLabel="Find us on the Map"
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCK_4fZKdjxO7wy6nv2EQaEXOp1_So5rlU"
          }}
          defaultCenter={{ lat: 6.6195948, lng: 3.3653967 }}
          defaultZoom={11}
        >
          <AnyReactComponent lat={6.6195948} lng={3.3653967} text="CarViva" />
        </GoogleMapReact>
      </Modal>
      <div className="contact-section">
        <div className="contact-info">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h3 className="has-text-white">Support & Faq</h3>
                <p>
                  <a
                    className="has-text-primary"
                    href="mailto:support@mycarviva.com"
                  >
                    support@mycarviva.com
                  </a>
                </p>
              </div>
              <div className="column">
                <h3 className="has-text-white">
                  Autocare Partner Registration
                </h3>
                <p>
                  <a
                    className="has-text-primary"
                    href="mailto:info@mycarviva.com"
                  >
                    info@mycarviva.com
                  </a>
                </p>
              </div>
              <div className="column">
                <h3 className="has-text-white">Office Address</h3>
                <p>Hub43, CMD Road, Magodo Phase 2, Lagos.</p>
                <button
                  className="has-text-primary is-transparent"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMap(true)}
                >
                  <IoIosPin color="#EB5757" size="1rem" /> Find on Map
                </button>
              </div>
              <div className="column">
                <h3 className="has-text-white">Official Hours</h3>
                <p>Mondays to Fridays: 9am to 3pm</p>
                <h3 className="has-text-white">Phone Numbers</h3>
                <p>
                  <a className="has-text-primary" href="tel:+2348097577777">
                    +234 809 757 7777
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Faq questions={questions} title="Top questions for Car Owners" />
      </div>
    </>
  );
};

export default ContactMidSection;
