import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import OurPartners from './components/OurPartners';
import UpcomingProducts from './components/UpcomingProducts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurDetails from './components/OurDetails';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>

      <section id='content' className='space-y-14 pb-14'>
        <ImageSlider></ImageSlider>
        <AboutUs></AboutUs>
        <OurProducts></OurProducts>
        <OurPartners></OurPartners>
        <UpcomingProducts></UpcomingProducts>
        <OurDetails></OurDetails>
      </section>
    </div>
  );
}

export default App;
