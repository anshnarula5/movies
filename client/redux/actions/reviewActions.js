import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CREATE_REVIEWS_FAIL,
  CREATE_REVIEWS_REQUEST,
  CREATE_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  LIKE_REVIEW_FAIL,
  LIKE_REVIEW_REQUEST,
  LIKE_REVIEW_SUCCESS,
} from "../types";

const URL = "https://guarded-bayou-79443.herokuapp.com/api/review"

export const getReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEWS_REQUEST });
    const res = await axios.get(`${URL}/${id}`);
    dispatch({ type: GET_REVIEWS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createReview = ({review, tmdbId}) => async (dispatch) => {
  try {
    dispatch({type: CREATE_REVIEWS_REQUEST});
    console.log({review, tmdbId})
    const userInfo = await AsyncStorage.getItem("userInfo");
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(userInfo).token}`,
      },
    };
    const res = await axios.post(`${URL}`, {review, tmdbId}, config);
    dispatch({ type: CREATE_REVIEWS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error)
    dispatch({
      type: CREATE_REVIEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const likeReview = (id) => async (dispatch) => {
  try {
    dispatch({type: LIKE_REVIEW_REQUEST});
    const userInfo = await AsyncStorage.getItem("userInfo");
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(userInfo).token}`,
      },
    };
    const res = await axios.put(`${URL}/like/${id}`, {}, config);
    dispatch({ type: LIKE_REVIEW_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error)
    dispatch({
      type: LIKE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

