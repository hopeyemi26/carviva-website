import React from "react";
import { IoIosClose } from "react-icons/io";

const modalTerms = ({ onclose }) => (
  <div className="modal-wrapper is-relative">
    <div className="modal_header">
      <h4 className="has-text-primary has-text-centered is-block">
        Terms & Conditions
        <span className="is-block">Last updated: December 4th, 2019</span>
      </h4>
      <button className="btn" onClick={onclose}>
        <IoIosClose size="1.4rem" />
      </button>
    </div>
    <div className="container is-relative">
      <div className="columns">
        <div className="column modal-text">
          <div className="holder">
            <h5>1. Acknowledgements</h5>
            <p>
              <span>1.1</span>The terms of this EULA apply to the App or any of
              the services accessible through the App (Services), including any
              updates or supplements to the App or any Service, unless they come
              with separate terms, in which case those terms apply. If any
              open-source software is included in the App or any Service, the
              terms of an open-source licence may override some of the terms of
              this EULA.
            </p>
            <p>
              <span>1.2</span>We may change these terms at any time by sending
              you an SMS/ notification with details of the change or notifying
              you of a change when you next start the App. The new terms may be
              displayed on-screen and you may be required to read and accept
              them to continue your use of the Services.
            </p>
            <p>
              <span>1.3</span>From time to time updates to the App may be issued
              through the Appstore. Depending on the update, you may not be able
              to use the Services until you have downloaded or streamed the
              latest version of the App and accepted any new terms.
            </p>
            <p>
              <span>1.4</span> You will be assumed to have obtained permission
              from the owners of the mobile telephone or handheld devices that
              are controlled, but not owned, by you and described in 2.2(a)
              (Devices) and to download the App onto the Devices. You and they
              may be charged by your and their service providers for internet
              access on the Devices. You accept responsibility in accordance
              with the terms of this EULA for the use of the App or any Service
              on or in relation to any Device, whether or not it is owned by
              you.
            </p>
            <p>
              <span>1.5</span> By using the App or any of the Services, you
              consent to us collecting and using technical information about the
              Devices and related software, hardware and peripherals for
              Services that are internet-based or wireless to improve our
              products and to provide any Services to you.
            </p>
            <p>
              <span>1.6</span>The App or any Service may contain links to other
              independent third-party websites (Third-party Sites). Third-party
              Sites are not under our control, and we are not responsible for
              and do not endorse their content or their privacy policies (if
              any). You will need to make your own independent judgement
              regarding your interaction with any Third-party Sites, including
              the purchase and use of any products or services accessible
              through them.
            </p>
            <p>
              <span>1.7</span> Any words following the terms including, include,
              in particular or for example or any similar phrase shall be
              construed as illustrative and shall not limit the generality of
              the related general words.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default modalTerms;
