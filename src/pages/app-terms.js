import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import Footer from "../components/layout/footer";
import ModalAppTerms from "../components/contents/modalAppTerms";

const TermsPage = () => (
  <div className="about">
    <Helmet />
    <ModalAppTerms />
    <Footer />
  </div>
);

export default TermsPage;
