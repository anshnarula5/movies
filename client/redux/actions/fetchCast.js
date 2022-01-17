import axios from "axios";

export const fetchPerson = (id) => async (dispatch) => {
    try {
    dispatch({ type: "GET_PERSON_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
      );
      dispatch({type: "GET_PERSON_SUCCESS", payload: res.data});
      console.log(res.data)
  } catch (error) {
  }
};
