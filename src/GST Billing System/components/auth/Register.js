import React, { useState } from "react";
import { Link } from "react-router-dom";

// Registration Component

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputs, setInputs] = useState([]);

  // method to handle form values on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    setInputs([...inputs, newEntry]);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <h5>Register</h5>
      <p>
        Have an account? <Link to="/">Login</Link>
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="checkbox" name="" value="" />
          <label>I accept the terms and privacy policy</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
