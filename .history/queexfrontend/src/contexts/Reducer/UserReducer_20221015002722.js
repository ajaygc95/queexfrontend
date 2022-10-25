import react from "react";
import { ACTION_TYPES } from "./UserActionTypes";

const user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

const token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).auth_token
  : "";

export const initialState = {
  user: "",
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
            toek
        }
  }
};
