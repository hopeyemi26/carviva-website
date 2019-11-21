import React from "react";
import "../components/style.scss";
import Helmet from "../components/layout/helmet";
import Footer from "../components/layout/footer";

const NotFoundPage = () => (
  <div>
    <Helmet />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <Footer />
  </div>
);

export default NotFoundPage;
