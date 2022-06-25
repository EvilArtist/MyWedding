import React from 'react';
import { useSpring, animated } from 'react-spring';
import "./opacity.css";
import "../effect.css";

function SatureEffect(props) {
    
    const outProp = useSpring({
        from: {
            filter: "contrast(100%) brightness(100%)",
            opacity: 1
        },
        to: {
            filter: "contrast(300%) brightness(500%)",
            opacity: 1
        },
        delay: props.delay || 2000,
        config: {
            duration: props.duration || 500,
        }
    });
    const inProp = useSpring({
        from: {
            filter: "contrast(200%) brightness(500%)",
            opacity: 0
        },
        to: {
            filter: "contrast(100%) brightness(100%)",
            opacity: 1
        },
        delay: (props.delay || 2000) + (props.duration || 500),
        config: {
            duration: props.duration || 500,
        },
        onRest: () => {
            console.log('Complete');
            props.onTransitionEnded && props.onTransitionEnded();
        }
    });

    return (
        <div className="effect-container">
        <img src={props.image[0]} alt="background" className='blur-background' />
            <animated.div className="img-container animated opacity fadePit" style={outProp}>
                <img src={props.image[0]} alt="background" className='currentImage' />
            </animated.div>
            <animated.div className="img-container animated opacity fadeIn" style={inProp}>
                <img src={props.image[1]} alt="background" className='nextImage' />
            </animated.div>
        </div>
    );
}
export default SatureEffect;