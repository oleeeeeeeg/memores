import * as ActionTypes from './../constants/ActionTypes';

export default function topText(state = 'Top text', action) {
    switch (action.type) {
    case ActionTypes.SET_TOP_TEXT:
        return action.value;
    default:
        return state;
    }
}