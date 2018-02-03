import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as types from '../../constants/ActionTypes.js';

import {
    Button,
    Icon
} from 'react-materialize';

class User extends Component {
    render() {
        return (
            <div className="user-info">
                <h1>
                    Hello Username!
                </h1>
                <h4>Welcome into "React-Snake Game"</h4>
                <div>
                    <Button
                        className="btn-large"
                        onClick={
                            () => {
                                this.props.startGame();
                                this.props.restartUserScore();
                            }
                        }
                    >Start game<Icon left>directions</Icon>
                    </Button>
                </div>
                <p>Use keyboard directions to change snake direction!</p>
                <h4 className="user-score">
                    Your score: {this.props.score}
                </h4>
            </div>
        );
    };
}

export default connect(
    state => ({
        score: state.score.score
    }),
    dispatch => ({
        startGame: () => {
            dispatch({
                type: types.START_GAME,
                payload: true
            })
        },
        restartUserScore: () => {
            dispatch({
                type: types.SCORE_RESTART,
                payload: 0
            })
        }
    })
)(User);
