import './App.css';
import FlipCard from './components/FlipCard';
import ImageSlider from "./components/ImageSliders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <ImageSlider />
        <div className="invitation-card">
            <FlipCard />
        </div>
    </div>
  );
}

export default App;
