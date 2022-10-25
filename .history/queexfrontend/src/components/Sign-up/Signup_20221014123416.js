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
            <input className="input-item"></input>
          </div>
          <div className="input-field">
            <label>Last Name</label>
            < className="input-item"></>
          </div>
          <div className="input-field">
            <label>Email</label>
            <inputinput className="input-item"></inputinput>
          </div>
          <div className="input-field">
            <label>Password</label>
            <inputinput className="input-item"></inputinput>
          </div>
          <div className="input-field">
            <label>Re Enter Password</label>
            <inputinput className="input-item"></inputinput>
          </div>
        </from>
      </div>
    </>
  );
}

export default Signup;
