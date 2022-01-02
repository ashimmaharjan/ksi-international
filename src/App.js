import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>

      <section id='content' className='space-y-14'>
        <ImageSlider></ImageSlider>
        <AboutUs></AboutUs>
        <OurProducts></OurProducts>
      </section>
    </div>
  );
}

export default App;
