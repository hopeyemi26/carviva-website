import React from "react";
import { IoIosClose } from "react-icons/io";

const modalFaq = ({ onclose }) => (
  <div className="modal-wrapper">
    <button className="btn" onClick={onclose}>
      <IoIosClose size="1.4rem" />
    </button>
    <div className="container">
      <h4 className="has-text-primary has-text-centered is-block">
        Terms & Conditions
        <span className="is-block">Last updated: December 4th, 2019</span>
      </h4>
      <div className="columns">
        {/* <div className="column is-three-quarters modal-text"> */}
        <div className="column modal-text">
          <div className="holder">
            <h5>1. Contract</h5>
            <p>
              These Terms of Use (“Terms”) govern the access or use by you, an
              individual, from within any country in the world (excluding the
              United States and its territories and possessions and Mainland
              China) of applications, websites, content, products, and services
              (the “Services”) made available by Uber B.V., a private limited
              liability company established in the Netherlands, having its
              offices at Mr. Treublaan 7, 1097 DP, Amsterdam, the Netherlands,
              registered at the Amsterdam Chamber of Commerce under number
              56317441 (“Uber”).
            </p>
            <h5>
              PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE
              SERVICES.
            </h5>
            <p>
              Your access and use of the Services constitutes your agreement to
              be bound by these Terms, which establishes a contractual
              relationship between you and Uber. If you do not agree to these
              Terms, you may not access or use the Services. These Terms
              expressly supersede prior agreements or arrangements with you.
              Uber may immediately terminate these Terms or any Services with
              respect to you, or generally cease offering or deny access to the
              Services or any portion thereof, at any time for any reason.
            </p>
            <p>
              Supplemental terms may apply to certain Services, such as policies
              for a particular event, activity or promotion, and such
              supplemental terms will be disclosed to you in connection with the
              applicable Services. Supplemental terms are in addition to, and
              shall be deemed a part of, the Terms for the purposes of the
              applicable Services. Supplemental terms shall prevail over these
              Terms in the event of a conflict with respect to the applicable
              Services.
            </p>
            <p>
              Uber may amend the Terms related to the Services from time to
              time. Amendments will be effective upon Uber’s posting of such
              updated Terms at this location or the amended policies or
              supplemental terms on the applicable Service. Your continued
              access or use of the Services after such posting constitutes your
              consent to be bound by the Terms, as amended.Your continued access
              or use of the Services after such posting constitutes your consent
              to be bound by the Terms, as amended.
            </p>
          </div>
        </div>
        {/* <div className="column">
          <div className="modal-nav">
            <h6 className="has-text-primary">Terms</h6>
          </div>
        </div> */}
      </div>
    </div>
  </div>
);

export default modalFaq;
