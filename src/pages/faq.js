import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import Footer from "../components/layout/footer";
import Faq from "../components/faq";
import questions from "../owners.json";

const FaqPage = () => (
  <div className="about">
    <Helmet />
    <Faq title="Frequently Asked Question" questions={questions} />
    <Footer />
  </div>
);

export default FaqPage;
