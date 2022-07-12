import React from 'react';
import {Slide, count as effectsCount, Opacity, Column} from './Effects/effect';
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
                    <GetEffect effect={this.state.effect} 
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

function GetEffect(props) {
    const effect = props.effect;

    if (effect === 0) {
        return <Slide.LeftToRight delay={props.delay} duration={props.duration}
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 1) {
        return <Slide.RightToLeft delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 2) {
        return <Slide.TopToBottom delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 3) {
        return <Slide.BottomToTop delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 4) {
        return <Opacity.SatureEffect delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 5) {
        return <Opacity.FadeEffect delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 6) {
        return <Slide.LeftToRightCreate delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 7) {
        return <Slide.RightToLeftCreate delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 8) {
        return <Slide.ToCenter delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 9) {
        return <Slide.ToCenterCreate delay={props.delay} duration={props.duration} 
            image={props.images} onTransitionEnded={props.onTransitionEnded}/>
    } else if (effect === 10) {
        return <Column.SlideToRight delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 10) {
        return <Column.SlideToRight delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 11) {
        return <Column.SlideToLeft delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 12) {
        return <Column.DownToLeft delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else if (effect === 13){
        return <Column.DownToRight delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    } else {
        return <Column.DownToRight delay={props.delay} duration={props.duration} 
        image={props.images} onTransitionEnded={props.onTransitionEnded} numberOfCols={8}/>
    }
}

function getRndInteger(min, max) {
    //return  Math.floor(Math.random() * (13 - 10 + 1) ) + 10
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
export default TestComponent;