import React from 'react';
import { imageSlider } from "../library/js-image-slider";

class ImageSlider extends React.Component {
    componentDidMount() {
        console.log(this.el);
        
    }
    render() {
        return (
            <div className="slider-container">
                <div className="background background1"></div>
                <div className="background background2"></div>
                <div id="sliderFrame">
                    <div id="slider">
                        <img src="https://cdn2.wanderlust.co.uk/media/1006/shutterstock_1724207551.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132370209580000000"/>
                        <img src="https://hub.wtm.com/wp-content/uploads/2017/05/16.05-Ecotourism-wildlife-conservation-and-SDGs-1200x720.jpg" />
                        <img src="https://cdn.scholarshipplanet.info/wp-content/uploads/2017/11/stock-photo-112283295-e1514950612692-1200x720.jpg" alt="" />
                        <img src="https://thuocchon.vn/wp-content/uploads/2020/03/sunlight-water-nature-grass-photography-branch-599361-wallhere.com_-e1584904186712-1200x720.jpg" alt="" />
                        <img src="https://fofweb.org/wp-content/uploads/2021/05/PB203994_w2000_5x3_q30-1200x720.jpg" alt="" />
                    </div>
                </div>
            </div>
        );
      }
}

export default ImageSlider;