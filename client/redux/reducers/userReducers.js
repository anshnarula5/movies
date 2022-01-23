import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_INFO_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  FAVOURITE_REQUEST,
  FAVOURITE_SUCCESS,
  WATCHLIST_REQUEST,
  WATCHLIST_SUCCESS,
  GET_FAV_REQUEST,
  GET_FAV_SUCCESS,
  GET_WATCHLIST_REQUEST,
  GET_WATCHLIST_SUCCESS,
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
    case LOGOUT:
      const logout = async () => {
        await AsyncStorage.removeItem("userInfo");
      };
      logout();
      return {};
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case REGISTER_FAIL:
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

export const favouriteReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FAVOURITE_REQUEST:
      return { loading: true };
    case FAVOURITE_SUCCESS:
      return { loading: false, success: true };
    default:
      return state;
  }
};

export const watchlistReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case WATCHLIST_REQUEST:
      return { loading: true };
    case WATCHLIST_SUCCESS:
      return { loading: false, success: true };
    default:
      return state;
  }
};

export const getWatchlistReducer = (state = {watchlist : []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WATCHLIST_REQUEST:
      return { loading: true };
    case GET_WATCHLIST_SUCCESS:
      return { loading: false, watchlist: payload };
    default:
      return state;
  }
};

export const getFavReducer = (state = {fav : []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FAV_REQUEST:
      return { loading: true };
    case GET_FAV_SUCCESS:
      return { loading: false, fav: payload };
    default:
      return state;
  }
};
