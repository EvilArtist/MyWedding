import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import "./slide.css";
import "../effect.css";

function RightToLeftCreate(props) {
    
    const springProp = useSpring({
        from: {
            left: "100%"
        },
        to: {
            left: "0"
        },
        delay: (props.delay || 2000) ,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        },
        onRest: () => {
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });
    const backgroundProp = useSpring({
        from: {
            transform: "translate(-50%, -50%) scale(1.0)"
        },
        to: {
            transform: "translate(-100%, -50%) scale(0.2)"
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
            easing: easings.easeInOutQuart,
        }
    });
    return (
        <div className="effect-container">
        <img src={props.images[0]} alt="background" className='blur-background' />
            <animated.div className="img-container animated creative-background" style={backgroundProp}>
                <img src={props.images[0]} alt="background" className='currentImage' />
            </animated.div>
            <animated.div className="img-container animated fly-in slide-to-left" style={springProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default RightToLeftCreate;