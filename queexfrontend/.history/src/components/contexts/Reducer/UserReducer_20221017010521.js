import react from "react";
import { ACTION_TYPES } from "./UserActionTypes";

const user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initialState = {
  user: user,
  // userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
  registerMessage: null,
  is_authenticated: false,
  signOnSuccess: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
        signOnSuccess: false,
        errorMessage: null,
      };

    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...initialState,
        token: action.payload.token,
        loading: false,
        is_authenticated: true,
        // user: action.payload.user.username,
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_REGISTER":
      console.log("request register");
      return {
        ...initialState,
        loading: true,
        registerMessage: null,
      };
    case "REGISTER_ERROR":
      console.log("register error");
      return {
        ...initialState,
        loading: false,
        registerMessage: action.error,
      };

    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        loading: false,
        signOnSuccess: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
