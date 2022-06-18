import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./slide.css";
import "../effect.css";

function RightToLeft(props) {
    
    const springProp = useSpring({
        from: {
            left: "100%"
        },
        to: {
            left: "0"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
        },
        onRest: () => {
            console.log("Complete");
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });
    return (
        <div className="effect-container">
            <div className="img-container">
                <img src={props.image[0]} alt="background" className='currentImage' />
            </div>
            <animated.div className="img-container animated fly-in slide-to-left" style={springProp}>
                <img src={props.image[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default RightToLeft;