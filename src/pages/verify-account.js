import React from "react";
import { navigate } from "gatsby";

const VerifyAccount = ({ location }) => {
  const status = location.search;
  if (status === "") {
    navigate("/");
  } else {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <div className="verify-page">
      {status === "?true" && (
        <h3>
          Your account has been successfully verified.
          <span>You will be redirected in 3 seconds</span>
        </h3>
      )}
      {status === "?false" && (
        <h3>
          Your account is already verified.
          <span>You will be redirected in 3 seconds</span>
        </h3>
      )}
    </div>
  );
};

export default VerifyAccount;
