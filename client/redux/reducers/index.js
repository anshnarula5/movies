import { combineReducers } from "redux";
import {alertReducer} from "./alertReducer";
import {
  actionReducer,
  comedyReducer,
  documentaryReducer,
  horrorReducer,
  movieDetailsReducer,
  romanceReducer,
  topReducer,
  trendingReducer,
} from "./movieReducers";
import {createReviewsReducer, getReviewsReducer} from "./reviewReducers";
import {loginReducer, registerReducer, userInfoReducer} from "./userReducers";

const rootReducer = combineReducers({
  trending: trendingReducer,
  top: topReducer,
  action: actionReducer,
  comedy: comedyReducer,
  horror: horrorReducer,
  documentary: documentaryReducer,
  romance: romanceReducer,
  movieDetails: movieDetailsReducer,
  getReviews: getReviewsReducer,
  login: loginReducer,
  register: registerReducer,
  userInfo: userInfoReducer,
  alert: alertReducer,
  createReview : createReviewsReducer
});

export default rootReducer;
