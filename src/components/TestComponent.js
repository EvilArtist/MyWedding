import React from 'react';
import {Effect, count as effectsCount} from './Effects/effect';
class TestComponent extends React.Component {
    images = [
        "https://cdn2.wanderlust.co.uk/media/1006/shutterstock_1724207551.jpg",
        "https://hub.wtm.com/wp-content/uploads/2017/05/16.05-Ecotourism-wildlife-conservation-and-SDGs-1200x720.jpg", 
        "https://cdn.scholarshipplanet.info/wp-content/uploads/2017/11/stock-photo-112283295-e1514950612692-1200x720.jpg",
        "https://thuocchon.vn/wp-content/uploads/2020/03/sunlight-water-nature-grass-photography-branch-599361-wallhere.com_-e1584904186712-1200x720.jpg",
        "https://fofweb.org/wp-content/uploads/2021/05/PB203994_w2000_5x3_q30-1200x720.jpg"
    ];
    constructor(props) {
        super(props);
        this.state = {
            effect: getRndInteger(0, effectsCount - 1),
            activeIndex: 0,
            slideImage: [
                this.images[0],
                this.images[1]
            ],
        };
    }
    toggleEffect = () => {
        console.log("Complete");
        let effect = getRndInteger(0, effectsCount - 1);
        while (effect === this.state.effect) {
            effect = getRndInteger(0, effectsCount - 1);
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
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Test Component {this.state.effect}</h1>
                <div className='gallery'>
                    <Effect effect={this.state.effect} 
                        images={this.state.slideImage}
                        onTransitionEnded={this.toggleEffect}
                        delay={2200}
                        duration={1000}/>
                </div>
                <button onClick={this.toggleEffect}>
                  Change effect
                </button>
            </div>
        );
    }
}

function getRndInteger(min, max) {
    //return  Math.floor(Math.random() * (13 - 10 + 1) ) + 10
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
export default TestComponent;