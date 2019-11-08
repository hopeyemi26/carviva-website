import React from "react";
import "./style.scss";
import hangerLogo from "../images/hanger_logo.png";
import image1 from "../images/homepage_image1.png";
import image2 from "../images/homepage_image2.png";
import image3 from "../images/homepage_image3.png";
import howItWorks1 from "../images/how-it-works-1.png";
import howItWorks2 from "../images/how-it-works-2.png";
import howItWorks3 from "../images/how-it-works-3.png";
import lowerBG from "../images/lower-bg.jpg";
import easyUse from "../images/easy_use.png";
import bestPrices from "../images/best_prices.png";
import qualityCare from "../images/quality_care.png";
import vivaRewards from "../images/viva_rewards.png";

import FuelIcon from "../assets/fuel-icon.svg";
import OilChangeIcon from "../assets/oilchange-icon.svg";
import CarWashIcon from "../assets/carwash-icon.svg";
import WheelsIcon from "../assets/wheels-icon.svg";
import RepairsIcon from "../assets/repair-icon.svg";
import DiagnosisIcon from "../assets/diagnosis-icon.svg";
import TowingIcon from "../assets/towing-icon.svg";
import PaintIcon from "../assets/paint-icon.svg";

const HomeMidSection = () => (
  <div className="home-midsection">
    <div className="first-section">
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
            <button>
              <div className="box">
                <FuelIcon />
              </div>
              <span>buy fuel</span>
            </button>
            <button>
              <div className="box">
                <OilChangeIcon />
              </div>
              <span>oil change</span>
            </button>
            <button>
              <div className="box">
                <CarWashIcon />
              </div>
              <span>car wash</span>
            </button>
            <button>
              <div className="box">
                <WheelsIcon />
              </div>
              <span>wheels</span>
            </button>
            <button>
              <div className="box">
                <RepairsIcon />
              </div>
              <span>repairs</span>
            </button>
            <button>
              <div className="box">
                <DiagnosisIcon />
              </div>
              <span>diagnosis</span>
            </button>
            <button>
              <div className="box">
                <TowingIcon />
              </div>
              <span>towing</span>
            </button>
            <button>
              <div className="box">
                <PaintIcon />
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

        <div className="how-it-works has-text-centered" id="how-it-works">
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
    </div>

    <div className="why-join">
      <img src={lowerBG} alt="bg" />
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

        <div className="columns">
          <div className="column feat">
            <img src={qualityCare} alt="Quality Care" />
            <h3>Get Quality Care</h3>
            <p>
              With our wide network, enjoy expert autocare near you on all car
              brands and older car models.
            </p>
          </div>
          <div className="column feat">
            <img src={bestPrices} alt="Best Prices" />
            <h3>Best Prices</h3>
            <p>
              We aim to save money for car owners by offering best prices on
              autocare service.
            </p>
          </div>
          <div className="column feat">
            <img src={easyUse} alt="Easy to use" />
            <h3>Easy to Use</h3>
            <p>
              Access quick autocare and save time with an app that is easy to
              use, reliable and convenient.
            </p>
          </div>
          <div className="column feat">
            <img src={vivaRewards} alt="viva Rewards" />
            <h3>Viva Rewards</h3>
            <p>
              Enjoy reward points on autocare service and invite friends to
              unlock an array of exciting prizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeMidSection;
