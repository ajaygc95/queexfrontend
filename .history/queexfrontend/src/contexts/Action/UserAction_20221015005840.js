import axios from "axios";
import { getAuth, getuser } from "../../../constants";

export async function loginUser(dispatch, loginPayload) {
    try {
        dispatch({type: "REQUEST_LOGIN"});
        axios.post(getAuth, loginPayload).then((response) => {
            if(response.data.token){
                dispatch({type:"LOGIN_SUCCESS", payload: response.data});
                localStorage.setItem("token", response.data.token);
                
            }
        })
    }
}