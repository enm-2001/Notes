import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const login = (email, password) => async (dispatch) => {   // redux thunk enables us to nest our functions
    try {
      dispatch({ type: USER_LOGIN_REQUEST });   //to call reducer USER_LOGIN_REQUEST
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logout = () => async (dispatch) => {
    // const navigate = useNavigate();
      localStorage.removeItem("userInfo");
      // navigate("/");
      dispatch({ type: USER_LOGOUT});
  }

  export const register = (name, email, password, pic) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/api/users",
        { name, pic, email, password },
        config
      );
  
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  