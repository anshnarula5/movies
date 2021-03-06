import axios from "axios";

export const fetchDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAILS_REQUEST" });
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
    );
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
    );
    res.data.cast = response.data.cast;
    dispatch({ type: "GET_DETAILS_SUCCESS", payload: res.data });
  } catch (error) {}
};
