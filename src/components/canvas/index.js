import React from 'react';
import { Stage, Rect, Layer, Animation } from 'react-konva';

function Canvas(props) {

    return (
        <Stage
                width={props.container}
                height={props.container}
            >
            <Layer>
            <Rect
                    x={props.apple.x}
                    y={props.apple.y}
                    width={props.cellSize}
                    height={props.cellSize}
                    fill="#ee6e73"
                ></Rect>
                {
                    props.body.map((item, num) => {
                        return (
                            <Rect
                                x={item.x}
                                y={item.y}
                                key={num}
                                width={props.cellSize}
                                height={props.cellSize}
                                fill="#000"
                            ></Rect>
                        )
                    })
                }
            </Layer>
        </Stage>
    );
}

export default Canvas;