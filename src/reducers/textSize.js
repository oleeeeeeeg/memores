import * as ActionTypes from './../constants/ActionTypes';

export default function textSize(state = 50, action) {
    switch (action.type) {
    case ActionTypes.SET_TEXT_SIZE:
        return action.value;
    default:
        return state;
    }
}