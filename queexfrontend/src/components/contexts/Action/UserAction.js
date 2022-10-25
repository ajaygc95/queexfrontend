import axios from "axios";
import { getAuth, getuser } from "../../../constants";

export async function loginUser(dispatch, loginPayload, navigate) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });

    axios
      .post(getAuth, loginPayload)
      .then((response) => {
        if (response.data.access) {
          dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
          localStorage.setItem("token", response.data.access);
          // localStorage.setItem("user", response.data.user.username);
          navigate("/inventory");
        }
      })
      .catch((error) => {
        console.log("There is error in endpoit", error);
        dispatch({ type: "LOGIN_ERROR", error: error });
      });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function registerUser(dispatch, loginPayload, navigate) {
  try {
    dispatch({ type: "REQUEST_REGISTER" });
    axios
      .post(getuser, loginPayload)
      .then((response) => {
        console.log("User created");
        console.log(response.data.token);
        navigate("/sign-in");
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "REGISTER_ERROR", error: error });
      });
  } catch (error) {
    console.log("this is from catch", error);
    dispatch({ type: "REGISTER_ERROR", error: error });
  }
}

export async function logout(dispatch, navigate) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/");
}
