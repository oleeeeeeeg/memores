import * as ActionTypes from './../constants/ActionTypes';

export default function memImage(state = '', action) {
    switch (action.type) {
    case ActionTypes.SET_MEM_IMAGE:
        return action.value;
    default:
        return state;
    }
}