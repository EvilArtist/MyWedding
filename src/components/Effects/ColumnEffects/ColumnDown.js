import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./column.css";
import "../effect.css";
function ColumnDown(index, width, params) {
    const style = {
        from: params.from(index),
        to: params.to(index),
        delay:(params.getDelay && params.getDelay(index)) || params.delay || 2000,
        config: {
            duration: params.duration || 500,
        }
    };
    const lastIndex = params.lastIndex;
    if (index === lastIndex) {
        console.log(style);
        style.onRest = () => {
            console.log('Complete');
            params.onTransitionEnded && params.onTransitionEnded();
        }
    }
    const springStyle = useSpring(style);
    return (<animated.div className="img-container animated column"  style={springStyle} key={index}>
        <div className="columns-container" style={springStyle}>
            <img src={params.image[1]} alt="background" className={'nextImage part-' + index} 
                style={{width: params.numberOfCols + '00%', left: -index + '00%'}}/>
        </div>
    </animated.div>);
}
function ColumnDownToLeft(props) {
    const width = 100 / props.numberOfCols;
    const params = {
        ...props,
        from: index => {
            return {
                top: '-100%',
                width: width + '%',
                left: width * index + '%'
            };
        },
        to: _ => {
            return { top: '0' };
        },
        getDelay: index => (params.delay || 2000) + 200 * (props.numberOfCols - index),
        lastIndex: 0
    };
    const columns = [...Array(params.numberOfCols).keys()];
    return <div className="effect-container">
        <div className="img-container opacity" >
            <img src={params.image[0]} alt="background" className='currentImage' />
        </div>
        {columns.map(index => ColumnDown(index, width, params))}
    </div>
}

function ColumnDownToRight(props) {
    const width = 100 / props.numberOfCols;
    const params = {
        ...props,
        from: index => {
            return {
                top: '-100%',
                width: width + '%',
                left: width * index + '%'
            };
        },
        to: _ => {
            return { top: '0' };
        },
        getDelay: index => (params.delay || 2000) + 200 * index,
        lastIndex: props.numberOfCols - 1
    };
    const columns = [...Array(params.numberOfCols).keys()];
    return <div className="effect-container">
        <div className="img-container opacity" >
            <img src={params.image[0]} alt="background" className='currentImage' />
        </div>
        {columns.map(index => ColumnDown(index, width, params))}
    </div>
}
export {
    ColumnDownToLeft,
    ColumnDownToRight
};