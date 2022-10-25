import React from "react";
import { Button } from "../Button/Button";

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
            <input className="input-item"></input>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input className="input-item"></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input className="input-item"></input>
          </div>
          <div className="input-field">
            <label>Re Enter Password</label>
            <input className="input-item"></input>
          </div>
          <button className="submit" buttonStyle="btn--secondary">
            Submit
          </button>
        </from>
      </div>
    </>
  );
}

export default Signup;
