import { combineReducers } from 'redux';
import topText from './topText';
import bottomText from './bottomText';
import backgroundImage from './backgroundImage';

const memoRooshApp = combineReducers({
    topText,
    bottomText,
    backgroundImage
});

export default memoRooshApp;