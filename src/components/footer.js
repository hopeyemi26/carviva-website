import React from "react";
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";

import "./style.scss";
import logo from "../images/logo.png";
import appStoreBadge from "../images/app-store.png";
import playStoreBadge from "../images/play-store.png";
import carOwner from "../images/footer_car_owner.png";
import partner from "../images/footer_partner.png";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            facebook
            instagram
          }
        }
      }
    `}
    render={data => (
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
                      <h4 className="has-text-primary">Autocare Partners</h4>
                      <p>Get on the service providers network on Carviva.</p>
                      <button className="has-background-white has-text-primary">
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
                    <a href="/" className="button is-text">
                      <img src={appStoreBadge} alt="appstore" />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.carviva.mobile"
                      target="_blank"
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
            <div class="columns">
              <div class="column is-one-fifth">
                <img src={logo} alt="logo" />
              </div>
              <div class="column">
                <a href="/" className="navbar-item has-text-white">
                  how it works
                </a>
                <a href="/" className="navbar-item has-text-white">
                  autocare partners
                </a>
                <a href="/" className="navbar-item has-text-white">
                  Faq
                </a>
                <a href="/" className="navbar-item has-text-white">
                  terms and conditions
                </a>
                <a href="/" className="navbar-item has-text-white">
                  about us
                </a>
                <a href="/" className="navbar-item has-text-white">
                  contact us
                </a>
              </div>
              <div class="column social is-one-quarter">
                <span>Connect on Social Media</span>
                <a
                  href={data.site.siteMetadata.facebook}
                  className="button is-text"
                >
                  <FaFacebookSquare color="#fff" size={16} />
                </a>
                <a
                  href={data.site.siteMetadata.instagram}
                  className="button is-text"
                >
                  <FaInstagram color="#fff" size={16} />
                </a>
                <a
                  href={data.site.siteMetadata.twitter}
                  className="button is-text"
                >
                  <FaTwitter color="#fff" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
