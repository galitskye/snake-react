import { combineReducers } from 'redux';
import start from './start';
import score from './score';

export default combineReducers({
    start,
    score
})