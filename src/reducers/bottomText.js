import * as ActionTypes from './../constants/ActionTypes';

export default function bottomText(state = 'Bottom text', action) {
    switch (action.type) {
    case ActionTypes.SET_BOTTOM_TEXT:
        return action.value;
    default:
        return state;
    }
}