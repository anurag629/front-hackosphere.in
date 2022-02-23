import React, { useState } from "react";
import { Link } from "react-router-dom";

//Forget Password Component

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email };
    setInputs([...inputs, newEntry]);
    setEmail("");
  };

  return (
    <div>
      <h5>Forgot your password?</h5>
      <p>Enter your email and we'll send you a reset link</p>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
        <button type="submit">Send reset link</button>
      </form>

      <Link to="/recoverpassword">I can't my password using this link</Link>
    </div>
  );
};

export default ForgetPassword;
