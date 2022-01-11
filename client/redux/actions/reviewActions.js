import axios from "axios";
import {
  GET_REVIEWS_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
} from "../types";

export const getReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEWS_REQUEST });
    const res = await axios.get(`http://192.168.1.5:5000/api/review/${id}`);
    console.log(res.data);
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
