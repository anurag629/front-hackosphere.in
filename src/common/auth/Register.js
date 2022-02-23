import React, { useState } from "react";
import { Link } from "react-router-dom";

// Registration Component

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tnc, setTnc] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  // method to handle form values on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      tnc: tnc,
    };
    setInputs([...inputs, newEntry]);
    setFormErrors(validate(inputs));
    //   setName("");
    //   setEmail("");
    //   setPassword("");
    //   setConfirmPassword("");
    //   setTnc(false);
  };

  const validate = (values) => {
    const errors = {};
    //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Confirm Password should be same as Password";
    }
    return errors;
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
        <p>{formErrors.name}</p>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>{formErrors.password}</p>
        <div>
          <input
            type="password"
            name="confirmPssword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p>{formErrors.confirmpassword}</p>
        <div>
          <input type="checkbox" name="tnc" value={tnc} />
          <label>I accept the terms and privacy policy</label>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
