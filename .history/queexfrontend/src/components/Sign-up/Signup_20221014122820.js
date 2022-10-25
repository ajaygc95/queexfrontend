import React from "react";

import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <from className="form-container">
          <div className="input-field">
            <label>First Name</label>
            <input></input>
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input></input>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input></input>
          </div>
        </from>
      </div>
    </>
  );
}

export default Signup;
