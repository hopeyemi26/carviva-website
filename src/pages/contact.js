import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import ContactHeader from "../components/headers/contact";
import ContactMidSection from "../components/contents/contact";
import Footer from "../components/layout/footer";

const ContactPage = () => (
  <div className="contact">
    <Helmet />
    <ContactHeader />
    <ContactMidSection />
    <Footer />
  </div>
);

export default ContactPage;
