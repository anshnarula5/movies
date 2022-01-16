import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from "../types";

const URL = "https://guarded-bayou-79443.herokuapp.com/api/users"

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });
      const res = await axios.post(URL, {
        name,
        email,
        password,
      });
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      await AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
    } catch (error) {
      console.log(error)
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
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const res = await axios.post(`${URL}/login`, {
        email,
        password,
      });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      await AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
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

export const getUserInfo = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_INFO_REQUEST });
    const userInfo = await AsyncStorage.getItem("userInfo");
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(userInfo).token}`,
      },
    };
    const res = await axios.get(`${URL}`, config);
    dispatch({ type: USER_INFO_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
