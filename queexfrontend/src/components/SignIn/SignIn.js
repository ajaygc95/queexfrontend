import React, { useState } from "react";
import { loginUser } from "../contexts/Action/UserAction";
import {
  useAuthDispatch,
  useAuthState,
} from "../../components/contexts/AuthContext";
import { Label, Message } from "semantic-ui-react";

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
} from "./SigninStyles";
import { useNavigate } from "react-router-dom";
import validateLoginInfo from "../FormUtil/ValidateForm";
import { FormLabel } from "@mui/material";

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
      loginUser(dispatch, values, navigate);
    } else {
      console.log("else called");
    }
  };

  return (
    <>
      <SignInContainer>
        <SignInWrapper>
          <StyledForm>
            <HeaderTitle>Sign In </HeaderTitle>
            <Topq>
              <YesAccount>Dont' have an Account?</YesAccount>
              <NavLinksTopQ to="/sign-up">Sign Up</NavLinksTopQ>
            </Topq>
            <StyledHr />
            {errorMessage && (
              <Message negative size="large">
                <Message.Header>Login Failed</Message.Header>
                <p>Please verify your Username and password and try again</p>
              </Message>
            )}
            <FormItem>
              <LabelForm>Username:</LabelForm>
              <StyledInput
                name="username"
                type="username"
                placeholder="Enter your Username"
                value={values.username}
                onChange={handleChange}
              ></StyledInput>
              {errors.username && (
                <ErrorsSignUp> {errors.username}</ErrorsSignUp>
              )}
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
            {loading ? (
              <div class="ui active centered inline loader"></div>
            ) : (
              ""
            )}
            <SignInButton onClick={handleSubmit}> Sign In</SignInButton>
          </StyledForm>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
}

export default SignIn;
