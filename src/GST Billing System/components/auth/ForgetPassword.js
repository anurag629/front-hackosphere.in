import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [store, setStore] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email };
    setStore([...store, newEntry]);
    console.log(store);
    setEmail("");
  };

  return (
    <div>
      <h5>Forgot your password?</h5>
      <p>Enter your email and we'll send you a reset link</p>

      <form action="" onSubmit={submitForm}>
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
