import './App.css';
import FlipCard from './components/FlipCard';
import ImageSlider from "./components/ImageSliders";
import Header from "./components/Header";
import React, { useState, useRef } from 'react';
import HowWeKnow from './components/HowWeKnow';
import Upcomming from './components/Upcomming';
import LoveGrowup from './components/LoveGrowUp';
import InvitationCard from './components/InvitationCard';
import PartyCard from './components/PartyCard';
import guestList from './data.json';
import { exportComponentAsPNG } from 'react-component-export-image';


const ComponentToPrint = React.forwardRef((props, ref) => (
    <div className="full-card-container" ref={ref}>
        <InvitationCard cardType={props.invitation.type}/>
        <PartyCard invitation={props.invitation}/>
    </div>
));

function App() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let id = params.get('gid');
    const [cardShow, setCardShow] = useState(!!id);
    const [saving, setSaveStatus] = useState('prepare');
    const componentRef = useRef();
    
    const saveCard = () => {
        setSaveStatus('saving');
        exportComponentAsPNG(componentRef, {
            fileName: 'Thiệp mời.png',
        }).then(() => {

        }).finally(() => {
            setSaveStatus('done');
        });
    };

    const invitation = guestList.find(guest => guest.id === id) || guestList[0];
    return (
        <div className="App">
            {!cardShow && <div className="header-container">
                <Header showCard={() => setCardShow(!cardShow)} />
            </div>
            }
            {!cardShow &&
            <div className='slide-container'>
                <ImageSlider />
            </div>}
        
            {cardShow &&  <div className="invitation-card-viewer">
                <FlipCard invitation={invitation}/>
                <div className="button-group">
                    <button className="btn btn-left" onClick={() => setCardShow(!cardShow)}>Đóng</button>
                    {saving === 'saving' ? 
                        <button className="btn btn-right">
                             <div className='btn-saving'>
                                <div className='progress'></div>
                                <span>Đang lưu thiệp</span>
                            </div>
                        </button> : 
                        <button className="btn btn-right " 
                        onClick={() =>  saveCard()}>
                             <span>Lưu thiệp</span>
                        </button>}
                </div>
            </div>}
            {cardShow ?<div className="full-card-hide">
                <ComponentToPrint ref={componentRef} invitation={invitation}/>
            </div>:''}
            {/* <HowWeKnow />
            <LoveGrowup /> */}
            <div className="story-container poem-container">
                <div className="story-header">
                    Cảm ơn tất cả đã đem chúng tôi đến bên nhau
                </div>
                <div className='video-container'>
                    <iframe width="100%" src="https://www.youtube.com/embed/pYBZRz2H6tc" 
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <svg className="svg">
                <clipPath id="heart" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.16 C0.448,0.066,0.362,0,0.259,0 C0.112,0,0,0.123,0,0.283 C0,0.594,0.155,0.642,0.5,1 C0.845,0.642,1,0.594,1,0.283 C1,0.123,0.888,0,0.741,0 C0.638,0,0.552,0.066,0.5,0.16"></path>
                </clipPath>
            </svg>
        </div>
    );
}

export default App;
