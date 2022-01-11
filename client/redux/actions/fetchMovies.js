import axios from "axios";

const API_KEY = "3075ded08ee9e418eafcfb6da8a1d5ea"

export const fetchTrending = () => async (dispatch) => {
    try {
    dispatch({ type: "TRENDING_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
      );
    dispatch({ type: "TRENDING_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchTop = () => async (dispatch) => {
    try {
    dispatch({ type: "TOP_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );
    dispatch({ type: "TOP_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchAction = () => async (dispatch) => {
    try {
    dispatch({ type: "ACTION_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
      );
    dispatch({ type: "ACTION_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchComedy = () => async (dispatch) => {
    try {
    dispatch({ type: "COMEDY_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
      );
    dispatch({ type: "COMEDY_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchHorror = () => async (dispatch) => {
    try {
    dispatch({ type: "HORROR_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
      );
    dispatch({ type: "HORROR_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchRomance = () => async (dispatch) => {
    try {
    dispatch({ type: "ROMANCE_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
      );
    dispatch({ type: "ROMANCE_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};

export const fetchDocumentaries = () => async (dispatch) => {
    try {
    dispatch({ type: "DOC_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
      );
    dispatch({ type: "DOC_SUCCESS", payload: res.data.results });
  } catch (error) {
  }
};
