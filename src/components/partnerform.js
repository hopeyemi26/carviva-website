import React from "react";

const PartnerForm = () => (
  <div className="become-partner">
    <p className="title is-4 has-text-primary">Become an Autocare Partner</p>
    <form>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input is-medium is-static is-success"
                type="text"
                placeholder="First Name"
              />
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input is-medium is-static"
                type="text"
                placeholder="Last Name"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-medium is-static"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-medium is-static"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-medium is-static"
            type="text"
            placeholder="Business Name"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="input is-medium is-static"
            type="text"
            placeholder="Business Address"
          />
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input
                class="input is-medium is-static"
                type="text"
                placeholder="City"
              />
            </p>
          </div>
          <div class="field is-medium">
            <p class="control is-expanded">
              <input
                class="input is-medium is-static"
                type="text"
                placeholder="State"
              />
            </p>
          </div>
        </div>
      </div>
      <p>
        By proceeding, I agree to Uber's{" "}
        <a href="/" className="has-text-primary">
          Terms of Use
        </a>{" "}
        & acknowledge that I have read the{" "}
        <a href="/" className="has-text-primary">
          Privacy Policy
        </a>
        .
      </p>
      <div
        class="field is-grouped"
        style={{
          justifyContent: "space-between",
          marginTop: "1rem"
        }}
      >
        <div class="control">
          <button class="button is-link has-background-primary">Sign up</button>
        </div>
        <div class="control">
          <span>Already have an account? </span>
          <a href="/" class="button has-text-primary has-text-weight-semibold">
            Sign in
          </a>
        </div>
      </div>
    </form>
  </div>
);

export default PartnerForm;
