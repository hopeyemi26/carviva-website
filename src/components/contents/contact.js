import React, { useState } from "react";
import { IoIosPin } from "react-icons/io";
import Modal from "react-modal";
import GoogleMapReact from "google-map-react";
import Faq from "../faq";

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

const questions = [
  {
    id: 1,
    title: "Why should I become a Carviva Autocare Partner?",
    text:
      "Be part of a big market. List with Nigeria’s largest community of car owners, enjoy wide coverage by adding unlimited service centers of your choice anywhere across Nigeria."
  },
  {
    id: 2,
    title: "How do I join Carviva Community?",
    text:
      "Simply have a clean and functional garage or workshop then create an account with us."
  },
  {
    id: 3,
    title: "Does it take long to Signup?",
    text:
      "It takes only 5 minutes to create an account. This quick setup allows you to be ready to receive autocare requests from car owners within 3hours once verification is completed."
  },
  {
    id: 4,
    title: "What are Autocare Partner signup and workshop requirements?",
    text:
      "Be a registered business entity with RC number or business name registration. Have a verified Bank account matching your business name. Agree to our fair pricing terms, commission structure, custom care policy and payouts schedule."
  },
  {
    id: 5,
    title: "What is fair and transparent Pricing by Carviva?",
    text:
      "Our Autocare Partners are required to provide upfront pricing on all services for car owners to have an idea of charges or cost to be paid during booking process."
  },
  {
    id: 6,
    title: "Does Carviva charge listing or monthly Fees?",
    text:
      "No. Listing fees are free forever and there are no monthly commitment fees. Our low platform access fees of N1000 is free for first 12 months of partner operation."
  },
  {
    id: 7,
    title: "How do I get paid and when?",
    text:
      "Fast payout is done weekly to designated Bank accounts provided by Autocare Partners."
  },
  {
    id: 8,
    title: "What if I’m not ready with a Brick and mortar service Centre?",
    text:
      "Not to worry as Carviva will work with bigger service centers to provide roadside service opportunities for interested individual mechanics to signup using bikes, tricycles and mini vans."
  },
  {
    id: 9,
    title: "How much will an Autocare Partner pay Carviva?",
    text:
      "We adopt a low discount structure. We support our Autocare Partners to make more as carviva takes only 20% commission on service payments or in some cases; small fixed fees on lowly priced autocare service."
  },
  {
    id: 10,
    title: "How do car owners pay for Service?",
    text:
      "Car owners pay cash on service delivery at service center or via prepaid card payments before visiting service center."
  }
];

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
