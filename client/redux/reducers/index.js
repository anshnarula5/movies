import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
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
import {getReviewsReducer} from "./reviewReducers";
import {loginReducer} from "./userReducers";



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
  login : loginReducer
});

export default rootReducer;
