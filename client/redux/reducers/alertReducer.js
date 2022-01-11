import {REMOVE_ALERT, SET_ALERT} from "../types";

export const alertReducer = (state = {alert: {}}, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_ALERT:
            return {alert: payload};
        case REMOVE_ALERT:
            return {alert: {}};
        default:
            return state;
    }
}