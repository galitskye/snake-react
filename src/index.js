import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import App from './components/App';
import './scss/styles.css';

const store = createStore(test);

function test(state = [], {type, payload}) {
    if(type === 'NEW_HEAD') {
        return [
            ...state,
            payload
        ]
    }
    return state;
}

store.subscribe(() => {
     console.log('subscribe', store.getState());
});

store.dispatch({
    type: 'NEW_HEAD',
    payload: [1,4]
});

store.dispatch({
    type: 'NEW_HEAD',
    payload: [2,4]
});

ReactDOM.render(<App />, document.getElementById('root'));
