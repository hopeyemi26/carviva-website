import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import Footer from "../components/layout/footer";
import ModalTerms from "../components/contents/modalTerms";

const TermsPage = () => (
  <div className="about">
    <Helmet />
    <ModalTerms />
    <Footer />
  </div>
);

export default TermsPage;
