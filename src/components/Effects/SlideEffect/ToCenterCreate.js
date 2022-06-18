import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./slide.css";
import "../effect.css";

function ToCenterCreate(props) {
    
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
        },
        onRest: () => {
            console.log("Complete");
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });
    const zoomInSideProp = useSpring({
        from: {
            transform: "100%"
        },
        to: {
            left: "50%"
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
            <img src={props.image[0]} alt="background" className='currentImage' />
            <animated.div className="img-container animated left-side creative-background" style={leftSideProp}>
                <img src={props.image[0]} alt="background" className='nextImage' />
            </animated.div>
            <animated.div className="img-container animated left-side fly-in slide-to-left" style={leftSideProp}>
                <img src={props.image[1]} alt="background" className='nextImage' />
            </animated.div>
            <animated.div className="img-container animated right-side fly-in slide-to-right" style={rightSideProp}>
                <img src={props.image[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default ToCenterCreate;