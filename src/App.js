import './App.css';
import FlipCard from './components/FlipCard';
import ImageSlider from "./components/ImageSliders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <ImageSlider />
        <div className="invitation-card-viewer">
            <FlipCard />
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
