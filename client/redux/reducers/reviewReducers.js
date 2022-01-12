import { CREATE_REVIEWS_FAIL, CREATE_REVIEWS_REQUEST, CREATE_REVIEWS_SUCCESS, GET_REVIEWS_FAIL, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "../types";

export const getReviewsReducer = (state = { reviews: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_REVIEWS_REQUEST:
      return { loading: true };
    case GET_REVIEWS_SUCCESS:
          return {loading: false, reviews: payload};
      case GET_REVIEWS_FAIL:
          return {loading : false, error : payload}
    default:
      return state;
  }
};

export const createReviewsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_REVIEWS_REQUEST:
      return { loading: true };
    case CREATE_REVIEWS_SUCCESS:
          return {loading: false, success: true};
      case CREATE_REVIEWS_FAIL:
          return {loading : false, error : payload}
    default:
      return state;
  }
};
