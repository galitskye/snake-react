import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
    Icon
} from 'react-materialize';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Mount')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={5}>
                        <div className="game-wrapper">
                            <canvas id="snake">HTML5 not supported!</canvas>
                        </div>
                    </Col>
                    <Col s={7}>
                        <h1>
                            Hello Username!
                        </h1>
                        <h4>Welcome into "React-Snake Game"</h4>
                        <p></p>
                        <div>
                            <Button className="btn-large">Start game<Icon left>directions</Icon></Button>
                            <Button className="btn-large red lighten-3">Restart<Icon left>ev_station</Icon></Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
