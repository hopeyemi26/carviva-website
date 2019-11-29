import React from "react";
import { IoIosClose } from "react-icons/io";
import vehicleReq from "../../images/ve-req.jpeg";

const modalVehicleReq = ({ onclose }) => (
  <div className="modal-wrapper is-relative">
    <div className="modal_header">
      <h4 className="has-text-primary has-text-centered is-block">
        Our Vehicle Requirements
        <span className="is-block">All Car Brands and Year 2000 upwards.</span>
      </h4>
      <button className="btn" onClick={onclose}>
        <IoIosClose size="1.4rem" />
      </button>
    </div>
    <div className="container is-relative">
      <div className="columns">
        <div className="column modal-text">
          <div className="holder">
            <img src={vehicleReq} alt="Vehicle Requirement" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default modalVehicleReq;
