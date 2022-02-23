import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Login Component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  //const [isSubmit, setIsSubmit] = useState(false);

  // method to handle form values on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setInputs([...inputs, newEntry]);
    setFormErrors(validate(inputs));
    //setIsSubmit(true);
    // setEmail("");
    // setPassword("");
  };

  // useEffect(() => {
  //   console.log(formErrors);

  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(inputs);
  //   }
  // }, [formErrors]);
  //method to handle form validations
  const validate = (values) => {
    const errors = {};
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    return errors;
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
        <p>{formErrors.email}</p>
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
        <p>{formErrors.password}</p>
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
