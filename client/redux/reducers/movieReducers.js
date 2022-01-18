export const trendingReducer = (state = { trending: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TRENDING_REQUEST":
      return { loading: true };
    case "TRENDING_SUCCESS":
      return { loading: false, trending: payload };
    default:
      return state;
  }
};
export const topReducer = (state = { top: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOP_REQUEST":
      return { loading: true };
    case "TOP_SUCCESS":
      return { loading: false, top: payload };
    default:
      return state;
  }
};
export const actionReducer = (state = { action: [] }, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "ACTION_REQUEST":
      return { loading: true };
    case "ACTION_SUCCESS":
      return { loading: false, action: payload };
    default:
      return state;
  }
};
export const comedyReducer = (state = { comedy: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "COMEDY_REQUEST":
      return { loading: true };
    case "COMEDY_SUCCESS":
      return { loading: false, comedy: payload };
    default:
      return state;
  }
};
export const horrorReducer = (state = { horror: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HORROR_REQUEST":
      return { loading: true };
    case "HORROR_SUCCESS":
      return { loading: false, horror: payload };
    default:
      return state;
  }
};
export const romanceReducer = (state = { romance: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ROMANCE_REQUEST":
      return { loading: true };
    case "ROMANCE_SUCCESS":
      return { loading: false, romance: payload };
    default:
      return state;
  }
};
export const documentaryReducer = (state = { documentary: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DOC_REQUEST":
      return { loading: true };
    case "DOC_SUCCESS":
      return { loading: false, documentary: payload };
    default:
      return state;
  }
};

export const movieDetailsReducer = (state = { details: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DETAILS_REQUEST":
      return { loading: true };
    case "GET_DETAILS_SUCCESS":
      return {loading: false, details: payload};
      case "CLEAR_DETAILS":
        return {details : {}}
    default:
      return state;
  }
};

export const personReducer = (state = { person: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PERSON_REQUEST":
      return { loading: true };
    case "GET_PERSON_SUCCESS":
      return {loading: false, person: payload};
    case "CLEAR_PERSON":
      return {person : {}}
    default:
      return state;
  }
};

export const searchMovieReducer = (state = {  movies : [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_SEARCH_MOVIES_REQUEST":
      return { loading: true };
    case "GET_SEARCH_MOVIES_SUCCESS":
      return { loading: false,  movies : payload.movies };
    default:
      return state;
  }
};

export const searchPeopleReducer = (state = {people : [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_SEARCH_PEOPLE_REQUEST":
      return { loading: true };
    case "GET_SEARCH_PEOPLE_SUCCESS":
      return { loading: false,  people : payload.people };
    default:
      return state;
  }
};
