import { combineReducers } from "redux";
import {alertReducer} from "./alertReducer";
import {
  actionReducer,
  comedyReducer,
  documentaryReducer,
  horrorReducer,
  movieDetailsReducer,
  personReducer,
  romanceReducer,
  searchMovieReducer,
  searchPeopleReducer,
  searchReducer,
  topReducer,
  trendingReducer,
} from "./movieReducers";
import {createReviewsReducer, getReviewsReducer, likeReviewReducer} from "./reviewReducers";
import {favouriteReducer, getFavReducer, getWatchlistReducer, loginReducer, registerReducer, userInfoReducer, watchlistReducer} from "./userReducers";

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
  createReview: createReviewsReducer,
  likeReview: likeReviewReducer,
  person: personReducer,
  searchMovie: searchMovieReducer,
  searchPeople: searchPeopleReducer,
  favourite: favouriteReducer,
  watchlist: watchlistReducer,
  wlList: getWatchlistReducer,
  favList : getFavReducer
});

export default rootReducer;
