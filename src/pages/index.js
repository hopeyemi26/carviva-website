import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import Header from "../components/headers/header";
import HomeMidSection from "../components/contents/home";
import Footer from "../components/layout/footer";

// import "../components/style.scss";

const IndexPage = () => (
  <div className="homepage">
    <Helmet />
    <Header />
    <HomeMidSection />
    <Footer />
  </div>
);

export default IndexPage;
