import * as ActionTypes from './../constants/ActionTypes';

export const setTopText = (value) => {
    return {
        type: ActionTypes.SET_TOP_TEXT,
        value
    };
};
export const setBottomText = (value) => {
    return {
        type: ActionTypes.SET_BOTTOM_TEXT,
        value
    };
};
export const setBackgroundImage = (value) => {
    return {
        type: ActionTypes.SET_BACKGROUND_IMAGE,
        value
    };
};