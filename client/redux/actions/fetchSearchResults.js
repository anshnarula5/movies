import axios from "axios";

export const fetchSearchMovieResults = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SEARCH_MOVIES_REQUEST" });
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
    );
      dispatch({type: "GET_SEARCH_MOVIES_SUCCESS", payload: {movies: res.data.results} });
  } catch (error) {}
};

export const fetchSearchPeopleResults = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SEARCH_PEOPLE_REQUEST" });
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/person?query=${keyword}&api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
    );
      dispatch({type: "GET_SEARCH_PEOPLE_SUCCESS", payload: {people: response.data.results} });
  } catch (error) {}
};
