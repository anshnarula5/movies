import {REMOVE_ALERT, SET_ALERT} from "../types"

export const setAlert = ({message, type}) => (dispatch) =>  {
    dispatch({type: SET_ALERT, payload: {message, type}})
    setTimeout(() => {
        dispatch({type : REMOVE_ALERT})
    }, 3000)
} 