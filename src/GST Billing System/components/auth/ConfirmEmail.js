import React from "react";

const ConfirmEmail = () => {
  return (
    <div>
      <h4>Please check your email!</h4>
      <p>
        An email has been sent to xyz@abc.com.Please click on the included link
        to reset your password.
      </p>

      <input type="button">Return to login</input>
    </div>
  );
};

export default ConfirmEmail;
