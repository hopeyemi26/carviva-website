import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import PartnersHeader from "../components/headers/partners";
import PartnersMidSection from "../components/contents/partners";
import Footer from "../components/layout/footer";

const PartnersPage = () => (
  <div className="partners">
    <Helmet />
    <PartnersHeader />
    <PartnersMidSection />
    <Footer />
  </div>
);

export default PartnersPage;
