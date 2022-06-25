import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./slide.css";
import "../effect.css";

function LeftToRightCreate(props) {
    
    const springProp = useSpring({
        from: {
            left: "-100%"
        },
        to: {
            left: "0"
        },
        delay: (props.delay || 2000) + (props.duration || 500),
        config: {
            duration: props.duration || 500,
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
            transform: "translate(0%, -50%) scale(0.2)"
        },
        delay: props.delay || 2000,
        config: {
            duration: 2 * ( props.duration || 500 ),
        }
    });
    return (
        <div className="effect-container">
        <img src={props.image[0]} alt="background" className='blur-background' />
            <animated.div className="img-container animated creative-background" style={backgroundProp}>
                <img src={props.image[0]} alt="background" className='currentImage' />
            </animated.div>
            <animated.div className="img-container animated fly-in slide-to-right" style={springProp}>
                <img src={props.image[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default LeftToRightCreate;