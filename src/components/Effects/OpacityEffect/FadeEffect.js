import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import "./opacity.css";
import "../effect.css";

function FadeEffect(props) {
    
    const outProp = useSpring({
        from: {
            opacity: 1
        },
        to: {
            opacity: 0
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
        }
    });
    const inProp = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
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
            <img src={props.images[0]} alt="background" className='blur-background' />
            <animated.div className="img-container animated opacity fadePit" style={outProp}>
                <img src={props.images[0]} alt="background" className='currentImage' />
            </animated.div>
            <animated.div className="img-container animated opacity fadeIn" style={inProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default FadeEffect;