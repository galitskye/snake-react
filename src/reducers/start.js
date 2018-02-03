import * as types from '../constants/ActionTypes.js';
import * as R from 'ramda';

const initialState = {
    start: false
};

export default function start(state = initialState, { type, payload }) {
    switch (type) {
        case types.START_GAME:
            return R.merge(state, {'start':payload});
        case types.END_GAME:
            return R.merge(state, {'start':payload});
        default:
            return state;
    }
}