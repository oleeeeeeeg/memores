import { combineReducers } from 'redux';

const defaultReducer = (state = 'HELLO WORLD', action) => {
    switch (action.type) {
    default:
        return state;
    }
};

const memoRooshApp = combineReducers({
    defaultReducer
});

export default memoRooshApp;