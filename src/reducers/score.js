import * as types from '../constants/ActionTypes.js';
import * as R from 'ramda';

const initialState = {
    score: 0
};

export default function start(state = initialState, { type, payload }) {
    switch (type) {
        case types.SCORE_UP:
            return R.merge(state, {'score':state.score + 10});
        case types.SCORE_RESTART:
            return R.merge(state, {'score':payload});
        default:
            return state;
    }
}