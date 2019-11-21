import React from "react";
import image1 from "../../images/about-image1.png";
import image2 from "../../images/about-image2.png";
import image11 from "../../images/about-image11.png";
import image22 from "../../images/about-image22.png";
import lowerBG from "../../images/lower-bg.jpg";
import easyUse from "../../images/easy_use.png";
import funImg from "../../images/fun.png";
import innovationImg from "../../images/innovation.png";
import teamWorkImg from "../../images/teamwork.png";

const AboutMidSection = () => (
  <>
    <div className="about-midsection">
      <div className="columns about-box">
        <div className="column">
          <img src={image1} className="is-hidden-touch" alt="about us" />
          <img src={image11} alt="about us" className="is-hidden-desktop" />
        </div>
        <div className="column">
          <div className="info">
            <h3 className="has-text-primary">Who we are</h3>
            <p>
              Our vision is to bring quality Autocare to millions of people who
              still do not have access to modern garages, genuine parts, trained
              technicians and expert service.
            </p>
            <p>
              At Carviva, we believe that all car owners and car users deserve
              an enjoyable autocare experience and should not be limited by
              pricing, their location or because they drive older car models.
            </p>
            <p>
              With Carviva, at the tap of a button on a smart phone, you can buy
              fuel, oil and service appointments such as car wash, car
              diagnostics, lube change, wheels balancing, alignment e.t.c can be
              booked and paid for on-the-go and from the comfort of homes and
              offices.
            </p>
          </div>
        </div>
      </div>
      <div className="columns about-box">
        <div className="column">
          <img src={image22} alt="about us" className="is-hidden-desktop" />
        </div>
        <div className="column">
          <div className="info is-pulled-right is-hidden-touch">
            <h3 className="has-text-primary">Why we exist</h3>
            <p>
              An estimated 70% of car owners in Nigeria have a preference for
              roadside mechanics and struggle with making the much needed
              transition to servicing their cars in modern service centers.
            </p>
            <p>
              Roadside is cheap and readily available. But over time, it is
              costly, erodes trust and limits access to quality care and genuine
              parts especially when services are rendered by ill- equipped
              “traditional” mechanics.
            </p>
            <p>
              With Carviva, our best in class platform drives a proactive
              maintenance culture. We bring an efficient solution that minimizes
              breakdown, saves time, saves money and ensures mechanics are not
              taking advantage of car owners.
            </p>
          </div>
          <div className="info is-hidden-desktop">
            <h3 className="has-text-primary">Why we exist</h3>
            <p>
              An estimated 70% of car owners in Nigeria have a preference for
              roadside mechanics and struggle with making the much needed
              transition to servicing their cars in modern service centers.
            </p>
            <p>
              Roadside is cheap and readily available. But over time, it is
              costly, erodes trust and limits access to quality care and genuine
              parts especially when services are rendered by ill- equipped
              “traditional” mechanics.
            </p>
            <p>
              With Carviva, our best in class platform drives a proactive
              maintenance culture. We bring an efficient solution that minimizes
              breakdown, saves time, saves money and ensures mechanics are not
              taking advantage of car owners.
            </p>
          </div>
        </div>
        <div className="column is-hidden-touch">
          <img className="is-pulled-right" src={image2} alt="about us" />
        </div>
      </div>
    </div>
    <div className="why-join">
      <img src={lowerBG} alt="bg" />
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h2 className="title has-text-primary">The Carviva Core Values</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column feat">
            <img src={easyUse} alt="Quality Care" />
            <h3>Quality Care</h3>
            <p>
              Our customers mean so much to us. We will go to the moon and back
              to see them smile. We strive to enhance their autocare experience
              with quick and quality service.
            </p>
          </div>
          <div className="column feat">
            <img src={funImg} alt="Best Prices" />
            <h3>Fun</h3>
            <p>
              Yes! We are on a mission of making car owners smile. We believe a
              fun and friendly environment makes that mission a lot easier in
              delivering an enjoyable autocare experience.
            </p>
          </div>
          <div className="column feat">
            <img src={innovationImg} alt="Easy to use" />
            <h3>Innovation</h3>
            <p>
              Innovation got us here and we ain’t stopping now. We believe
              impossible is nothing as we keep making things better by being
              different and embracing new ideas.
            </p>
          </div>
          <div className="column feat">
            <img src={teamWorkImg} alt="viva Rewards" />
            <h3>Team Work</h3>
            <p>
              Our success is anchored on collective network of our valued
              partners and contributions of our team members and other key
              stakeholders - one for all; all for one takes us further and
              farther.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutMidSection;
