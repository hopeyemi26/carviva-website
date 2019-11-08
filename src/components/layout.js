import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import HomeMidSection from "./home";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="body">
    <Helmet />
    <Header />
    <HomeMidSection />
    <Footer />
  </div>
);

export default Layout;
