import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import AboutHeader from "../components/headers/about";
import AboutMidSection from "../components/contents/about";
import Footer from "../components/layout/footer";

const AboutPage = () => (
  <div className="about">
    <Helmet />
    <AboutHeader />
    <AboutMidSection />
    <Footer />
  </div>
);

export default AboutPage;
