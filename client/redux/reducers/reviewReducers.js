import { GET_REVIEWS_FAIL, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "../types";

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
