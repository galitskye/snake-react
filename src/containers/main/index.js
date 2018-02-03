import React from 'react';

import {
Row,
Col
} from 'react-materialize';

import User from '../../components/user';
import StartGame from '../../components/startGame';

const Main = () => {
    return (
        <div>
            <Row>
                <Col s={5}>
                    <div className="game-wrapper" id="snake">
                        <StartGame />
                    </div>
                </Col>
                <Col s={7}>
                    <User />
                </Col>
            </Row>
        </div>
    );
}

export default Main;