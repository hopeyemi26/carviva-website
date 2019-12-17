import React, { useState } from "react";
import ReactSwipe from "react-swipe";
import Modal from "react-modal";
import Faq from "../faq";
import questions from "../../partners.json";
import ModalVehicleReq from "../contents/modalVehicleReq";
import ModalPartnerReq from "../contents/modalPartnerReq";
import hangerLogo from "../../images/hanger_logo.png";
import image1 from "../../images/partners_image1.jpg";
import image2 from "../../images/homepage_image2.png";
import image3 from "../../images/partners_image3.jpg";
import CalendarIcon from "../../assets/calendar.svg";
import LocationIcon from "../../assets/location.svg";
import UserIcon from "../../assets/user.svg";
import StarIcon from "../../assets/star.svg";
import RequireIcon from "../../assets/requirements.svg";
import CarModelIcon from "../../assets/carmodel.svg";

const PartnersMidSection = () => {
  const [modal, setModal] = useState(false);
  const [partner, setPartner] = useState(false);

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Vehicle Requirements"
      >
        <ModalVehicleReq onclose={() => setModal(false)} />
      </Modal>
      <Modal
        ariaHideApp={false}
        isOpen={partner}
        onRequestClose={() => setPartner(false)}
        contentLabel="Partner Requirements"
      >
        <ModalPartnerReq onclose={() => setPartner(false)} />
      </Modal>
      <div className="home-midsection partner-section">
        <div className="first-section">
          <div className="container">
            <div className="columns hanger-logo">
              <div className="column is-half is-offset-one-quarter has-text-centered">
                <img src={hangerLogo} alt="logo" />
                <h2 className="title has-text-primary is-spaced is-family-sans-serif">
                  Make more Money. Grow your Business
                </h2>
                <p className="subtitle has-text-white">
                  CarViva is a platform that connects car users and car owners{" "}
                  <br /> to a wide network of modern OEM workshops, garages and{" "}
                  <br /> autocare service providers across Nigeria.
                </p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-10 icon-nav is-offset-1">
                <div className="columns">
                  <div className="column">
                    <h5>
                      <CalendarIcon /> <br />
                      List your workshop for free
                    </h5>
                    <p>
                      Become an autocare partner today. List your garage or
                      workshop for free to join our expanding network of service
                      partners.
                    </p>
                  </div>
                  <div className="column">
                    <h5>
                      <LocationIcon /> <br />
                      Choose location and Set Prices
                    </h5>
                    <p>
                      You can add an unlimited number of locations as service
                      centers. Set prices to match your autocare service bouquet
                      and you are almost ready
                    </p>
                  </div>
                  <div className="column">
                    <h5>
                      <UserIcon /> <br />
                      Make more money
                    </h5>
                    <p>
                      Now that your service center is active; you are ready to
                      welcome your first customer and start getting more
                      business from our community of car users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="columns">
              <ReactSwipe
                className="carousel is-hidden-desktop"
                swipeOptions={{
                  continuous: false,
                  widthOfSiblingSlidePreview: 40
                }}
              >
                <div className="column">
                  <img src={image1} alt="gallery" />
                </div>
                <div className="column">
                  <img src={image2} alt="gallery" />
                </div>
                <div className="column">
                  <img src={image3} alt="gallery" />
                </div>
              </ReactSwipe>
              <div className="column is-hidden-mobile">
                <img src={image1} alt="gallery" />
              </div>
              <div className="column is-hidden-mobile">
                <img src={image2} alt="gallery" />
              </div>
              <div className="column is-hidden-mobile">
                <img src={image3} alt="gallery" />
              </div>
            </div>

            <div className="how-it-works" id="how-it-works">
              <h3 className="title has-text-primary is-3 has-text-centered">
                How do I get started?
              </h3>
              <div className="columns">
                <div className="column is-10 icon-nav is-offset-1">
                  <div className="columns">
                    <div className="column">
                      <h5>
                        <StarIcon /> <br />
                        Create Partner Account
                      </h5>
                      <p>
                        To get started, simply provide an email address,
                        business name and valid mobile phone number to signup on
                        our partner network.
                      </p>
                      <a href="#signup" className="has-text-primary">
                        Sign up online
                      </a>
                    </div>
                    <div className="column">
                      <h5>
                        <RequireIcon /> <br />
                        Autocare Partner requirements
                      </h5>
                      <p>
                        We aim to get as many autocare partners as possible to
                        join our network. Our basic requirements are listed here
                        to let you know what is needed to join in Nigeria.
                      </p>
                      <a
                        href=""
                        onClick={() => setPartner(true)}
                        className="has-text-primary"
                      >
                        See Requirements
                      </a>
                    </div>
                    <div className="column">
                      <h5>
                        <CarModelIcon /> <br />
                        Car Make & Models
                      </h5>
                      <p>
                        We encourage our partners to extend quality care to
                        older car models (year 2000) for community members to
                        benefit more.
                      </p>
                      <a
                        href=""
                        onClick={() => setModal(true)}
                        className="has-text-primary"
                      >
                        Vehicle requirements
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq questions={questions} title="Top questions from Partners" />
      </div>
    </>
  );
};

export default PartnersMidSection;
