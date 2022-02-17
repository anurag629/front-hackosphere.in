import React, { useState } from "react";
import { Link } from "react-router-dom";

// Login Component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState([]);

  // method to handle form values on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setInputs([...inputs, newEntry]);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h5>Log in</h5>
      <p>
        or <Link to="/register">Create an account</Link>
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="checkbox" name="" value="" />
          <label>Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/forgetpassword">Forget Password?</Link>
    </>
  );
};

export default Login;
