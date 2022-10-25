import react from "react";

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


