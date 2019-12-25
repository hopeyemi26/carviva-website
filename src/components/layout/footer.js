import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin
} from "react-icons/fa";
import Modal from "react-modal";
import ModalAppTerms from "../contents/modalAppTerms";
import ModalFaq from "../contents/modalFaq";
import { StaticQuery, graphql } from "gatsby";
import logo from "../../images/logo.png";
import appStoreBadge from "../../images/app-store.png";
import playStoreBadge from "../../images/play-store.png";
import carOwner from "../../images/footer_car_owner.png";
import partner from "../../images/footer_partner.png";

const Footer = () => {
  const [modal, setModal] = useState(false);
  const [faqModal, setFaqModal] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query SocialQuery {
          site {
            siteMetadata {
              twitter
              facebook
              instagram
              linkedIn
            }
          }
        }
      `}
      render={data => (
        <>
          <Modal
            ariaHideApp={false}
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            contentLabel="Terms and Conditions"
          >
            <ModalAppTerms onclose={() => setModal(false)} />
          </Modal>
          <Modal
            ariaHideApp={false}
            isOpen={faqModal}
            onRequestClose={() => setFaqModal(false)}
            contentLabel="Frequently Asked Questions"
          >
            <ModalFaq onclose={() => setFaqModal(false)} />
          </Modal>
          <footer className="footer is-relative">
            <div className="get-started is-relative">
              <h2 className="title">GET STARTED</h2>
            </div>
            <div className="has-background-primary is-relative">
              <div className="container">
                <div className="columns">
                  <div className="column is-three-fifths is-offset-one-fifth has-text-centered has-background-white">
                    <div className="columns">
                      <div className="column">
                        <img src={carOwner} alt="Car Owner" />
                        <div className="info">
                          <h4 className="has-text-primary">Car Owner</h4>
                          <p>Sign up to start using Carviva.</p>
                          <button className="has-background-primary has-text-white">
                            Get Started
                          </button>
                        </div>
                      </div>
                      <div className="column">
                        <img src={partner} alt="Partner" />
                        <div className="info">
                          <h4 className="has-text-primary">
                            Autocare Partners
                          </h4>
                          <p>
                            Get on the service providers network on Carviva.
                          </p>
                          <button
                            onClick={() => navigate("/partners/")}
                            className="has-background-white has-text-primary"
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter has-text-centered">
                    <p className="title is-5 has-text-white">
                      Download Carviva to get started
                      <span className="is-block download-app">
                        <a
                          href="/"
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
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="has-background-black">
              <div className="container">
                <div className="columns">
                  <div className="column is-one-fifth">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="column">
                    <a
                      href="/#how-it-works"
                      className="navbar-item has-text-white"
                    >
                      how it works
                    </a>
                    <Link
                      to="/partners/"
                      className="navbar-item has-text-white"
                    >
                      Autocare partners
                    </Link>
                    <a
                      onClick={e => {
                        e.preventDefault();
                        setFaqModal(true);
                      }}
                      className="navbar-item has-text-white"
                    >
                      Faq
                    </a>
                    <a
                      onClick={e => {
                        e.preventDefault();
                        setModal(true);
                      }}
                      className="navbar-item has-text-white"
                    >
                      terms and conditions
                    </a>
                    <Link to="/about/" className="navbar-item has-text-white">
                      About us
                    </Link>
                    <Link to="/contact/" className="navbar-item has-text-white">
                      contact us
                    </Link>
                  </div>
                  <div className="column social is-one-quarter">
                    <span>Connect on Social Media</span>
                    <a
                      href={data.site.siteMetadata.facebook}
                      className="button is-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookSquare color="#fff" size={16} />
                    </a>
                    <a
                      href={data.site.siteMetadata.instagram}
                      className="button is-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram color="#fff" size={16} />
                    </a>
                    <a
                      href={data.site.siteMetadata.twitter}
                      className="button is-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter color="#fff" size={16} />
                    </a>
                    <a
                      href={data.site.siteMetadata.linkedIn}
                      className="button is-text"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin color="#fff" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    />
  );
};

export default Footer;
