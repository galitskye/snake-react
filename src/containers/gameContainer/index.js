import React from 'react';

import Game from '../../components/game';

const GameContainer = (props) => {
    if(props.start) {
        return <Game />;
    } else {
        return (
            <h4 className="start-game">Please, press "Start game"!</h4>
        );
    }
}

export default GameContainer;