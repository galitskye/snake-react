import React, {Component} from 'react';
import {connect} from "react-redux";

import GameContainer from '../../containers/gameContainer';

class StartGame extends Component {
    render() {
        return (            
            <GameContainer start={this.props.start}/>
        );
    };
}

export default connect(
    state => ({
        start: state.start.start
    }),
    dispatch => ({})
)(StartGame);