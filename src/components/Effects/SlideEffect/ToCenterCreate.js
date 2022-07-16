import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import "./slide.css";
import "../effect.css";

function ToCenterCreate(props) {
    
    const leftSideProp = useSpring({
        from: {
            left: "0%"
        },
        to: {
            left: "-50%"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        },
    });
    const rightSideProp = useSpring({
        from: {
            left: "50%"
        },
        to: {
            left: "100%"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
        }
    });
    const zoomInSideProp = useSpring({
        from: {
            transform: "translate(-50%, -50%) scale(0)"
        },
        to: {
            transform: "translate(-50%, -50%) scale(1)"
        },
        delay: (props.delay || 2000) + 20,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        },
        onRest: () => {
            console.log("Complete");
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });
    return (
        <div className="effect-container">
            <img src={props.images[1]} alt="background" className='blur-background' />
            <animated.div className="img-container animated left-side fly-in slide-to-left" style={leftSideProp}>
                <img src={props.images[0]} alt="background" className='background' />
            </animated.div>
            <animated.div className="img-container animated right-side fly-in slide-to-right" style={rightSideProp}>
                <img src={props.images[0]} alt="background" className='background' />
            </animated.div>
            <animated.div className="img-container animated creative-background" style={zoomInSideProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default ToCenterCreate;