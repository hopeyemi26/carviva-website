import React, { useState } from "react";
import useForm from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";
import Modal from "react-modal";
import ModaTerms from "./contents/modalTerms";

const PartnerForm = props => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Terms and Conditions"
      >
        <ModaTerms onclose={() => setModal(false)} />
      </Modal>
      <div className="become-partner">
        <p className="title is-4 has-text-primary">
          Become an Autocare Partner
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    name="fname"
                    className="input is-medium is-static is-success"
                    type="text"
                    placeholder="First Name"
                    ref={register({ required: true })}
                    value={props.fname}
                  />
                </p>
                {errors.fname && <span>This field is required</span>}
              </div>
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input is-medium is-static"
                    type="text"
                    placeholder="Last Name"
                    value={props.lname}
                    name="lname"
                    ref={register({ required: true })}
                  />
                </p>
                {errors.lname && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium is-static"
                type="email"
                placeholder="Email"
                value={props.email}
                name="email"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
            </div>
            {errors.email && <span>This is not a valid email.</span>}
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium is-static"
                type="tel"
                placeholder="Phone Number"
                value={props.phone}
                name="phone"
                ref={register({ required: true })}
              />
            </div>
            {errors.phone && <span>This field is required</span>}
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium is-static"
                type="text"
                placeholder="Business Name"
                value={props.bizName}
                name="bizName"
                ref={register({ required: true })}
              />
            </div>
            {errors.bizName && <span>This field is required</span>}
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium is-static"
                type="text"
                placeholder="Business Address"
                value={props.bizAddress}
                name="bizAddress"
                ref={register({ required: true })}
              />
            </div>
            {errors.bizAddress && <span>This field is required</span>}
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input is-medium is-static"
                    type="text"
                    placeholder="Zone (Ikeja, Surulere, Ikoyi etc)"
                    value={props.zone}
                    name="zone"
                    ref={register({ required: true })}
                  />
                </p>
                {errors.zone && <span>This field is required</span>}
              </div>
              <div className="field is-medium">
                <p className="control is-expanded">
                  <input
                    className="input is-medium is-static"
                    type="text"
                    placeholder="State"
                    value={props.state}
                    name="state"
                    ref={register({ required: true })}
                  />
                </p>
                {errors.state && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <p>
            By Signing up, I agree to Carviva's{" "}
            <strong>
              <a
                href="/"
                className="has-text-primary"
                onClick={e => {
                  e.preventDefault();
                  setModal(true);
                }}
              >
                Terms of Use
              </a>
            </strong>{" "}
            & acknowledge that I have read the{" "}
            <strong>
              <a
                href="/"
                className="has-text-primary"
                onClick={e => {
                  e.preventDefault();
                  setModal(true);
                }}
              >
                Privacy Policy
              </a>
            </strong>
            .
          </p>
          <div
            className="field is-grouped is-hidden-touch"
            style={{
              justifyContent: "space-between",
              marginTop: "1rem"
            }}
          >
            <div className="control">
              {isLoading ? (
                <button
                  style={{ cursor: "default" }}
                  className="button is-link has-background-primary"
                >
                  <BeatLoader
                    sizeUnit={"px"}
                    size={10}
                    color={"#fff"}
                    loading={isLoading}
                  />
                </button>
              ) : (
                <button
                  style={{ cursor: "default" }}
                  className="button is-link has-background-primary"
                >
                  Sign Up
                </button>
              )}
            </div>
            <div className="control">
              <span>Already have an account? </span>
              <a
                href="https://sp.mycarviva.com/"
                className="button has-text-primary has-text-weight-semibold"
              >
                Sign in
              </a>
            </div>
          </div>
          <div
            className="field is-hidden-desktop"
            style={{
              marginTop: "1rem"
            }}
          >
            <div className="control">
              <button className="button is-link has-background-primary">
                Sign up
              </button>
            </div>
            <div className="control" style={{ marginTop: "1rem" }}>
              <span>Already have an account? </span>
              <a
                href="https://sp.mycarviva.com/"
                className="button has-text-primary has-text-weight-semibold"
              >
                Sign in
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PartnerForm;
