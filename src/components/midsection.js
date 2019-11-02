import React from "react";
import "./style.scss";
import hangerLogo from "../images/hanger_logo.png";
import fuelIcon from "../images/fuel-icon.png";
import image1 from "../images/homepage_image1.png";
import image2 from "../images/homepage_image2.png";
import image3 from "../images/homepage_image3.png";
import howItWorks1 from "../images/how-it-works-1.png";
import howItWorks2 from "../images/how-it-works-2.png";
import howItWorks3 from "../images/how-it-works-3.png";

// import FuelIcon from "../images/fuel.svg";

const Midsection = () => (
  <div>
    <div className="home-midsection">
      <div className="container">
        <div className="columns hanger-logo">
          <div className="column is-half is-offset-one-quarter has-text-centered">
            <img src={hangerLogo} alt="logo" />
            <h2 className="title has-text-primary is-spaced is-family-sans-serif">
              Make your car go the extra mile
            </h2>
            <p className="subtitle has-text-white">
              CarViva is a platform that connects car users and car owners to a
              wide network of modern OEM workshops, garages and autocare service
              providers across Nigeria.
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column is-10 icon-nav is-offset-1 has-text-centered">
            <button className="">
              <div className="box">
                <img src={fuelIcon} alt="icon" />
                {/* <FuelIcon /> */}
              </div>
              <span>buy fuel</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>oil change</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>car wash</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>wheels</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>repairs</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>diagnosis</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>towing</span>
            </button>
            <button>
              <div className="box">
                <img src={fuelIcon} alt="icon" />
              </div>
              <span>paint car</span>
            </button>
            <div className="line"></div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={image1} alt="image" />
          </div>
          <div className="column">
            <img src={image2} alt="image" />
          </div>
          <div className="column">
            <img src={image3} alt="image" />
          </div>
        </div>

        <div className="how-it-works has-text-centered">
          <h3 className="title has-text-primary is-3">How it works</h3>
          <div className="columns">
            <div className="column">
              <img src={howItWorks1} alt="How it works" />
              <div className="summary has-text-left">
                <h3 className="title is-1 has-text-primary">01.</h3>
                <h4 className="subtitle has-text-white">Request Autocare</h4>
                <p className="has-text-white">
                  Tap service icons and select car make/model to search for
                  service centers near you.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={howItWorks2} alt="How it works" />
              <div className="summary has-text-left">
                <h3 className="title is-1 has-text-primary">02.</h3>
                <h4 className="subtitle has-text-white">Book and Visit</h4>
                <p className="has-text-white">
                  Pick a service center nearby with best price.Tap ‘Book Now’ to
                  visit service center location.
                </p>
              </div>
            </div>
            <div className="column">
              <img src={howItWorks3} alt="How it works" />
              <div className="summary has-text-left">
                <h3 className="title is-1 has-text-primary">03.</h3>
                <h4 className="subtitle has-text-white">Enjoy Expert Care</h4>
                <p className="has-text-white">
                  Provide booking details at service center, pay cash or with
                  card and rate provider on job completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-join">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title has-text-primary">Why join Carviva</h2>

              <div className="stats columns has-background-white">
                <div className="column">
                  <p className="has-text-primary is-inline-block">
                    100+ <span>Service Centers</span>
                  </p>
                </div>
                <div className="column">
                  <p className="has-text-primary is-inline-block">
                    20 <span>Lagos Zones live on Carviva</span>
                  </p>
                </div>
                <div className="column">
                  <p className="has-text-primary is-inline-block">
                    1000+ <span>Downloads by Users</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Midsection;
