import './App.css';
import FlipCard from './components/FlipCard';
import ImageSlider from "./components/ImageSliders";
import Header from "./components/Header";
import React, { useState } from 'react';
import HowWeKnow from './components/HowWeKnow';
import Upcomming from './components/Upcomming';

function App() {
    const [cardShow, setCardShow] = useState(false);
    return (
        <div className="App">
            <div className="header-container">
                <Header showCard={() => setCardShow(!cardShow)} />
            </div>
            <div className='slide-container'>
                <ImageSlider />
                <Upcomming />
            </div>
        
            {cardShow &&  <div className="invitation-card-viewer">
                <FlipCard />
            </div>}

            <HowWeKnow />

            <svg className="svg">
                <clipPath id="heart" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.16 C0.448,0.066,0.362,0,0.259,0 C0.112,0,0,0.123,0,0.283 C0,0.594,0.155,0.642,0.5,1 C0.845,0.642,1,0.594,1,0.283 C1,0.123,0.888,0,0.741,0 C0.638,0,0.552,0.066,0.5,0.16"></path>
                </clipPath>
            </svg>
        </div>
    );
}

export default App;
