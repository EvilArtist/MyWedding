import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import "./slide.css";
import "../effect.css";

function ToCenter(props) {
    
    const leftSideProp = useSpring({
        from: {
            left: "-50%"
        },
        to: {
            left: "0"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        },
    });
    const rightSideProp = useSpring({
        from: {
            left: "100%"
        },
        to: {
            left: "50%"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        },
        onRest: () => {
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });
    return (
        <div className="effect-container">
            <div className="img-container">
                <img src={props.images[0]} alt="background" className='currentImage' />
            </div>
            <animated.div className="img-container animated left-side fly-in slide-to-left" style={leftSideProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
            <animated.div className="img-container animated right-side fly-in slide-to-right" style={rightSideProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default ToCenter;