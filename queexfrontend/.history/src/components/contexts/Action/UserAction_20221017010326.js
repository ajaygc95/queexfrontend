import axios from "axios";
import { getAuth, getuser } from "../../../constants";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    axios.post(getAuth, loginPayload).then((response) => {
      console.log(response.data);
      if (response.data.token) {
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.username);
        // history.pushState("/");
      }
    });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}
