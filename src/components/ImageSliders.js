import React from 'react';
import {Effect, count as effectsCount} from './Effects/effect';

class ImageSlider extends React.Component {
    images = [
        "/images/slide/Bia.jpg"
    ];
    constructor(props) {
        super(props);
        for (let i = 1; i < 20; i++) {
            this.images.push(`/images/slide/Anh${i}.jpg`);
        }
        this.state = {
            effect: this.getRndInteger(0, effectsCount - 1),
            activeIndex: 0,
            slideImage: [
                this.images[0],
                this.images[1]
            ],
        };
    }
    toggleEffect = () => {
        let effect = this.getRndInteger(0, effectsCount - 1);
        while (effect === this.state.effect) {
            effect = this.getRndInteger(0, effectsCount - 1);
        }
        
        let activeIndex = this.state.activeIndex + 1;
        if (activeIndex >= this.images.length) {
            activeIndex = 0;
        }
        let nextIndex = activeIndex + 1;
        if (nextIndex >= this.images.length) {
            nextIndex = 0;
        }
        this.setState({
            effect: effect,
            activeIndex: activeIndex,
            slideImage: [
                this.images[activeIndex],
                this.images[nextIndex]
            ]
        });
    }
    getRndInteger(min, max) {
        //return  Math.floor(Math.random() * (13 - 10 + 1) ) + 10
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    render() {
        return (
            <div className='gallery'>
                <Effect effect={this.state.effect} 
                    images={this.state.slideImage}
                    onTransitionEnded={this.toggleEffect}
                    delay={2200}
                    duration={1000}/>
            </div>
        );
    }
}
export default ImageSlider;