import React from 'react';
import { useSpring, animated, easings } from 'react-spring';
import "./slide.css";
import "../effect.css";

function TopToBottom(props) {
    
    const springProp = useSpring({
        from: {
            top: "-100%"
        },
        to: {
            top: "0"
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
            <animated.div className="img-container animated fly-in slide-to-bottom" style={springProp}>
                <img src={props.images[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default TopToBottom;