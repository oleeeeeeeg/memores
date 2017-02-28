import * as ActionTypes from './../constants/ActionTypes';

export default function backgroundImage(state = '', action) {
    switch (action.type) {
    case ActionTypes.SET_BACKGROUND_IMAGE:
        return action.value;
    default:
        return state;
    }
}