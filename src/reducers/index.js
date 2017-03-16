import { combineReducers } from 'redux';
import topText from './topText';
import bottomText from './bottomText';
import textSize from './textSize';
import backgroundImage from './backgroundImage';
import memImage from './memImage';

const memoResApp = combineReducers({
    topText,
    bottomText,
    textSize,
    backgroundImage,
    memImage
});

export default memoResApp;