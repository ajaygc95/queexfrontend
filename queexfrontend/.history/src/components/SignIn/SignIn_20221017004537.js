import React, { useState } from "react";
import "./SignIn.css";
import { loginUser } from "../contexts/Action/UserAction";

function SignIn(props) {
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

  // const [message, setMessage] = useState({
  //   loading: false,
  //   error: null,
  //   success: false,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(dispatch, valuess);
    // setErros(validateLoginInfo(values));
  };

  // const dispatch = useAuthDispatch();

  return (
    <>
      <div className="signin-container">
        <form action="" className="signin-form">
          <h1>Sign In </h1>
          <hr />
          <div className="signin-field">
            <label>Username</label>
            <input
              name="username"
              type="username"
              placeholder="Enter your Username"
              className="signin-input"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="signin-field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="signin-input"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button className="signin-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
