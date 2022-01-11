import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const res = await axios.post("http://192.168.1.5:5000/api/users", {
        name,
        email,
        password,
      });
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const login =
  ({email, password }) =>
    async (dispatch) => {
      console.log({email, password})
    try {
      dispatch({type: LOGIN_REQUEST});
      const res = await axios.post("http://192.168.1.5:5000/api/users/login", {
        email,
        password,
      });
      console.log(res.data)
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
      await AsyncStorage.setItem("userInfo", JSON.stringify(res.data))
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
