import React, { useState } from "react";
import { Link } from "gatsby";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import scrollTo from "gatsby-plugin-smoothscroll";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="hero-head">
      <div className="header-social-links is-hidden-mobile">
        <p className="has-text-white">Connect on Social Media</p>
        <a
          className="navbar-item"
          href="https://www.facebook.com/mycarviva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <FaFacebookSquare />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.instagram.com/mycarviva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <FaInstagram />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.twitter.com/mycarviva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <FaTwitter />
          </span>
        </a>
        <a
          className="navbar-item"
          href="https://www.linkedin.com/company/mycarviva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon has-text-white">
            <FaLinkedin />
          </span>
        </a>
      </div>
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand is-centered">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Logo-1" />
            </Link>
            <a
              role="button"
              className="navbar-burger"
              data-target="navMenuu"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setNav(true)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end is-uppercase">
              <Link to="/" className="navbar-item has-text-white">
                Home
              </Link>
              <a
                className="navbar-item has-text-white"
                onClick={() => scrollTo("#how-it-works")}
              >
                How it works
              </a>
              <Link to="/partners/" className="navbar-item has-text-white">
                Autocare partners
              </Link>
              <Link to="/contact/" className="navbar-item has-text-white">
                Contact us
              </Link>
              <div className="navbar-item">
                <Link
                  to="/partners/"
                  className="button is-primary is-medium is-inverted has-text-weight-semibold"
                >
                  get started
                </Link>
              </div>
              <div className="navbar-item">
                <Link
                  to="/"
                  className="button is-white is-outlined is-medium has-text-weight-semibold"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar-menu mobile-menu is-hidden-desktop"
          id="navMenu"
          style={nav ? { display: "block" } : { display: "none" }}
        >
          <button id="closeNav" onClick={() => setNav(false)}>
            <IoIosClose color="#fff" size="3rem" />
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/partners/">Partners</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/partners/" className="btn-start has-text-primary">
                Get Started
              </Link>
            </li>
            <li>
              <Link to="/" className="btn-login">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
