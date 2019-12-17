import React from "react";
import { IoIosClose } from "react-icons/io";

const modalPartnerReq = ({ onclose }) => (
  <div className="modal-wrapper is-relative">
    <div className="modal_header">
      <h4 className="has-text-primary has-text-centered is-block">
        Autocare Partner Requirements
      </h4>
      <button className="btn" onClick={onclose}>
        <IoIosClose size="1.4rem" />
      </button>
    </div>
    <div className="container is-relative">
      <div className="columns">
        <div className="column modal-text">
          <div className="holder requirements">
            <h4>
              <span>1.</span> Nigeria RC or BN Registration Number.
            </h4>
            <h4>
              <span>2.</span> Valid and active Bank Account.
            </h4>
            <h4>
              <span>3.</span> Valid Mobile Phone Number.
            </h4>
            <h4>
              <span>4.</span> Active email address.
            </h4>
            <h4>
              <span>5.</span> Membership of NATA/MOMTAN Association.
            </h4>
            <h4>
              <span>6.</span> Mobile phone or laptop/tab with internet
              connectivity.
            </h4>
            <h4>
              <span>7.</span> Clean workshop and traceable physical address.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default modalPartnerReq;
