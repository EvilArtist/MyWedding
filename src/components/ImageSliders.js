import React from 'react';
import SlideImage from './SlideImage';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://cdn2.wanderlust.co.uk/media/1006/shutterstock_1724207551.jpg",
                "https://hub.wtm.com/wp-content/uploads/2017/05/16.05-Ecotourism-wildlife-conservation-and-SDGs-1200x720.jpg", 
                "https://cdn.scholarshipplanet.info/wp-content/uploads/2017/11/stock-photo-112283295-e1514950612692-1200x720.jpg",
                "https://thuocchon.vn/wp-content/uploads/2020/03/sunlight-water-nature-grass-photography-branch-599361-wallhere.com_-e1584904186712-1200x720.jpg",
                "https://fofweb.org/wp-content/uploads/2021/05/PB203994_w2000_5x3_q30-1200x720.jpg"
            ] 
        };
    }

    componentDidMount() {
        console.log(this.el);
        
    }
    render() {
        const imageItems = this.state.images.map((image, index) => 
            <SlideImage key={index} imageURL={image} />
        );
        return (
            <div className="slider-container">
                <div className="background background1"></div>
                <div className="background background2"></div>
                <div id="sliderFrame">
                    <div id="slider">
                        {imageItems}
                    </div>
                </div>
            </div>
        );
      }
}

export default ImageSlider;