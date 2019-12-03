import React from "react";
import { IoIosClose } from "react-icons/io";
import Faq from "../faq";
import questions from "../../owners.json";

const modalFaq = ({ onclose }) => (
  <div className="modal-wrapper is-relative">
    <div className="modal_header">
      <h4 className="has-text-primary has-text-centered is-block">
        Frequently Asked Questions
      </h4>
      <button className="btn" onClick={onclose}>
        <IoIosClose size="1.4rem" />
      </button>
    </div>
    <div className="container is-relative">
      <Faq questions={questions} />
    </div>
  </div>
);

export default modalFaq;
