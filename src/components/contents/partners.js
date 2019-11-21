import React from "react";
import ReactSwipe from "react-swipe";
import Faq from "../faq";
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

const PartnersMidSection = () => {
  return (
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
                    welcome your first customer and start getting more business
                    from our community of car users.
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
                      To get started, simply provide an email address, business
                      name and valid mobile phone number to signup on our
                      partner network.
                    </p>
                    <a href="/" className="has-text-primary">
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
                    <a href="/" className="has-text-primary">
                      See Requirements
                    </a>
                  </div>
                  <div className="column">
                    <h5>
                      <CarModelIcon /> <br />
                      Car Make & Models
                    </h5>
                    <p>
                      We encourage our partners to extend quality care to older
                      car models (year 2000) for community members to benefit
                      more.
                    </p>
                    <a href="/" className="has-text-primary">
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
  );
};

export default PartnersMidSection;
