import React, {Component} from 'react';
import {connect} from "react-redux";

import * as types from '../../constants/ActionTypes.js';
import Canvas from '../canvas';

class Game extends Component {
    constructor(props) {
        super(props);
        const cell = Math.floor(document.getElementById('snake').offsetWidth / 25)
        this.state = {
            container: cell * 25,
            cellSize: cell,
            interval: 110,
            snakeBody: [
                {
                    x: 0,
                    y: 0
                },
                {
                    x: cell,
                    y: 0
                }
            ]
        };

        this.gameControls = this.gameControls.bind(this);
        this.snakeBody = this.snakeBody.bind(this);
        this.gameClear = this.gameClear.bind(this);
        this.gameHarder = this.gameHarder.bind(this);
    };

    random(min, max) {
        const rand = Math.floor(Math.random() * (max - min) + min);
        return (Math.round( rand / this.state.cellSize) * this.state.cellSize);
    }

    gameControls() {
        this.direction = 'right';
        document.onkeydown = (e) => {
            let btn = e.keyCode;
            if ([38,39,40,37].indexOf(btn) >= 0) e.preventDefault();

            if (btn === 39 && this.direction !== 'left') this.direction = 'right';
            if (btn === 40 && this.direction !== 'top') this.direction = 'bottom';
            if (btn === 37 && this.direction !== 'right') this.direction = 'left';
            if (btn === 38 && this.direction !== 'bottom') this.direction = 'top';
                
        };
    };

    newApple() {
        this.apple = {
            x: this.random(0, this.state.container - this.state.cellSize),
            y: this.random(0, this.state.container - this.state.cellSize)
        };
    };

    snakeBody(body, tail, head, eatenApple) {
        switch (this.direction) {
            case 'right':
                Object.assign(tail, {
                    x: head.x === this.state.container - this.state.cellSize ? 0 : head.x + this.state.cellSize,
                    y: head.y
                });
                break;
            case 'left':
                Object.assign(tail, {
                    x: head.x === 0 ? this.state.container - this.state.cellSize : head.x - this.state.cellSize,
                    y: head.y
                });
                break;
            case 'top':
                Object.assign(tail, {
                    x: head.x,
                    y: head.y === 0 ? this.state.container - this.state.cellSize : head.y - this.state.cellSize
                });
                break;
            case 'bottom':
                Object.assign(tail, {
                    x: head.x,
                    y: head.y === this.state.container - this.state.cellSize ? 0 : head.y + this.state.cellSize
                });
                break;
            default:
                break;
        }
        body.push(tail)
        body.splice(0,eatenApple);
        return body;
    };

    gameBegin() {
        this.timer = setInterval(()=>{
            const body = this.state.snakeBody,
                  tail = {x:body[0].x, y:body[0].y},
                  head = body[body.length - 1];
            
            let eatenApple = 1;

            body.forEach((item, num) => {
                if(num !== body.length - 1 && item.x === head.x && item.y === head.y) {
                    this.gameClear();
                    this.props.endGame();
                }

                if(item.x === this.apple.x && item.y === this.apple.y) {
                    eatenApple = 0;
                    this.newApple();
                    this.props.upUserScore();
                    this.gameHarder();
                }
            });

            const newBody = this.snakeBody(body, tail, head, eatenApple);

            this.setState({
                snakeBody: newBody
            });
        },this.state.interval)
    };

    gameHarder() {
        if(this.props.score > 0 && this.props.score % 50 === 0) {
            this.gameClear();
            this.setState({
                interval: this.state.interval - 5
            });
            this.gameBegin();
        }
    };

    gameClear() {
        clearInterval(this.timer);
    };

    componentWillMount() {
        this.newApple();
        this.gameBegin();
        this.gameControls();
    };

    render() {
        return (            
            <Canvas 
                container={this.state.container}
                body={this.state.snakeBody}
                cellSize={this.state.cellSize}
                apple={this.apple}
             />
        );
    };
}

export default connect(
    state => ({
        score: state.score.score
    }),
    dispatch => ({
        endGame: () => {
            dispatch({
                type: types.END_GAME,
                payload: false
            })
        },
        upUserScore: () => {
            dispatch({
                type: types.SCORE_UP
            })
        }
    })
)(Game);