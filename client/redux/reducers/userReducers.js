import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from "../types";

export const loginReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case LOGIN_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export const userInfoReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_INFO_REQUEST:
      return { loading: true };
    case USER_INFO_SUCCESS:
      return { loading: false, userInfo: payload };
    case USER_INFO_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
