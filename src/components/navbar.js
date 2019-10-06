import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

import "./style.scss";
import logo from "../images/logo.png";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <div className="header-social-links">
      <p className="has-text-white">Connect on Social Media</p>
      <a className="navbar-item" href="/home.html">
        <span className="icon has-text-white">
          <FaFacebookSquare />
        </span>
      </a>
      <a className="navbar-item" href="/">
        <span className="icon has-text-white">
          <FaInstagram />
        </span>
      </a>
      <a className="navbar-item" href="/">
        <span className="icon has-text-white">
          <FaTwitter />
        </span>
      </a>
    </div>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Logo-1" />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end is-uppercase">
            <a href="/" className="navbar-item has-text-white">
              Home
            </a>
            <a href="/" className="navbar-item has-text-white">
              How it works
            </a>
            <a href="/" className="navbar-item has-text-white">
              Autocare partners
            </a>
            <a href="/" className="navbar-item has-text-white">
              contact us
            </a>
            <div className="navbar-item">
              <a
                href="/"
                className="button is-primary is-medium is-inverted has-text-weight-semibold"
              >
                get started
              </a>
            </div>
            <div className="navbar-item">
              <a
                href="/"
                className="button is-white is-outlined is-medium has-text-weight-semibold"
              >
                login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
