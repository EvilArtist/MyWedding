import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./column.css";
import "../effect.css";

function Column(index, width, params) {
    const style = {
        from: params.from(index),
        to: params.to(index),
        delay:(params.getDelay && params.getDelay(index)) || params.delay || 2000,
        config: {
            duration: params.duration || 500,
        }
    };
    const lastIndex = params.lastIndex || params.numberOfCols - 1;
    if (index === lastIndex) {
        console.log(style);
        style.onRest = () => {
            console.log('Complete');
            params.onTransitionEnded && params.onTransitionEnded();
        }
    }
    const springStyle = useSpring(style);
    return (<div className="img-container animated column" style={{ width: width + '%', left: width * index + '%'}} key={index}>
        <animated.div className="columns-container" style={springStyle}>
            <img src={params.image[1]} alt="background" className={'nextImage part-' + index} 
                style={{width: params.numberOfCols + '00%', left: -index + '00%'}}/>
        </animated.div>
    </div>);
}

function ColumnEffect(props) {
    const params = {...props};
    const width = 100 / params.numberOfCols;
    const columns = [...Array(params.numberOfCols).keys()];
    return <div className="effect-container">
        <div className="img-container opacity" >
            <img src={params.image[0]} alt="background" className='currentImage' />
        </div>
        {columns.map(index => 
            Column(index, width, params))
        }
    </div>
}

export default ColumnEffect;