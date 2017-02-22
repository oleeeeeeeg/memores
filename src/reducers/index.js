import { combineReducers } from 'redux';
import topText from './topText';
import bottomText from './bottomText';

const memoRooshApp = combineReducers({
    topText,
    bottomText
});

export default memoRooshApp;