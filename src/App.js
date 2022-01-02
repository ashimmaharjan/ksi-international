import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <ImageSlider></ImageSlider>
        <AboutUs></AboutUs>
      </header>
    </div>
  );
}

export default App;
