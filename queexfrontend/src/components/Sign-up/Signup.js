import React, { useState } from "react";
import { registerUser } from "../contexts/Action/UserAction";
import {
  useAuthDispatch,
  useAuthState,
} from "../../components/contexts/AuthContext";
import { Message } from "semantic-ui-react";

import {
  FormItem,
  SignInButton,
  SignInContainer,
  SignInWrapper,
  StyledForm,
  StyledHr,
  StyledInput,
  ErrorsSignUp,
  Topq,
  YesAccount,
  NavLinksTopQ,
  LabelForm,
  HeaderTitle,
} from "../SignIn/SigninStyles";
import { useNavigate } from "react-router-dom";
import validateLoginInfo from "../FormUtil/ValidateInfo";
import ProductTable from "../ProductTable/ProductTable";

function SignUp(props) {
  const token = localStorage.getItem("token");
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const [message, setMessage] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const dispatch = useAuthDispatch();

  const { loading, errorMessage, signOnSuccess, is_authenticated } =
    useAuthState();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateLoginInfo(values));

    if (Object.keys(errors).length === 0) {
      console.log(values);
      registerUser(dispatch, values, navigate);
    } else {
      console.log("else called");
    }
  };

  return (
    <>
      <SignInContainer>
        {token && token != "" && token != undefined ? (
          <ProductTable></ProductTable>
        ) : (
          <SignInWrapper>
            <StyledForm>
              <HeaderTitle>Sign Up </HeaderTitle>
              <Topq>
                <YesAccount>Already have an Account?</YesAccount>
                <NavLinksTopQ to="/sign-in">Sign In</NavLinksTopQ>
              </Topq>
              <StyledHr />
              {errorMessage && (
                <Message negative size="large">
                  <Message.Header>Failed to register </Message.Header>
                  <p>Please verify your inforamtion and retry</p>
                </Message>
              )}
              <FormItem>
                <LabelForm>First Name</LabelForm>
                <StyledInput
                  name="first_name"
                  type="first_name"
                  placeholder="Enter your first name"
                  value={values.first_name}
                  onChange={handleChange}
                ></StyledInput>
                {errors.first_name && (
                  <ErrorsSignUp> {errors.first_name}</ErrorsSignUp>
                )}
              </FormItem>
              <FormItem>
                <LabelForm>Last Name</LabelForm>
                <StyledInput
                  name="last_name"
                  type="last_name"
                  placeholder="Enter your last name"
                  value={values.last_name}
                  onChange={handleChange}
                ></StyledInput>
                {errors.last_name && (
                  <ErrorsSignUp> {errors.last_name}</ErrorsSignUp>
                )}
              </FormItem>
              <FormItem>
                <LabelForm>Username</LabelForm>
                <StyledInput
                  name="username"
                  type="username"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                ></StyledInput>
                {errors.username && (
                  <ErrorsSignUp> {errors.username}</ErrorsSignUp>
                )}
              </FormItem>
              <FormItem>
                <LabelForm>Email</LabelForm>
                <StyledInput
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                ></StyledInput>
                {errors.email && <ErrorsSignUp> {errors.email}</ErrorsSignUp>}
              </FormItem>
              <FormItem>
                <LabelForm>Password:</LabelForm>
                <StyledInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                ></StyledInput>
                {errors.password && (
                  <ErrorsSignUp> {errors.password}</ErrorsSignUp>
                )}
              </FormItem>
              <FormItem>
                <LabelForm>Re-Enter Password</LabelForm>
                <StyledInput
                  name="password2"
                  type="password"
                  placeholder="Re-enter your password"
                  value={values.password2}
                  onChange={handleChange}
                ></StyledInput>
                {errors.password2 && (
                  <ErrorsSignUp> {errors.password2}</ErrorsSignUp>
                )}
              </FormItem>
              {loading ? (
                <div class="ui active centered inline loader"></div>
              ) : (
                ""
              )}
              <SignInButton onClick={handleSubmit}> Sign In</SignInButton>
            </StyledForm>
          </SignInWrapper>
        )}
      </SignInContainer>
    </>
  );
}

export default SignUp;

// <>
//   <div className="signin-container">
//     <form action="" className="signin-form">
//       <h1>Sign In </h1>
//       <hr />
//       <div className="signin-field">
//         <LabelForm>Username</LabelForm>
//         <input

//         />
//       </div>
//       <div className="signin-field">
//         <LabelForm>Password</LabelForm>
//         <input
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           className="signin-input"
//           value={values.password}
//           onChange={handleChange}
//         />
//       </div>
//       <button className="signin-button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </form>
//   </div>
// </>
