import { combineReducers } from 'redux';

const topText = (state = 'Top text', action) => {
    switch (action.type) {
    case 'SET_TOP_TEXT':
        return action.value;
    default:
        return state;
    }
};
const bottomText = (state = 'Bottom text', action) => {
    switch (action.type) {
    case 'SET_BOTTOM_TEXT':
        return action.value;
    default:
        return state;
    }
};

const memoRooshApp = combineReducers({
    topText,
    bottomText
});

export default memoRooshApp;