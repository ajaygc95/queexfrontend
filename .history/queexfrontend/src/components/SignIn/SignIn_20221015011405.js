import React, { useState } from "react";
import "./SignIn.css";
function SignIn() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
  });

  return (
    <>
      <div className="signin-container">
        <h1>Sign In </h1>
        <form action="" className="signin-form">
          <div className="signin-field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="signin-input"
            />
          </div>
          <div className="signin-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your Username"
              className="signin-input"
            />
          </div>
          <button className="signin-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
