import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import OurPartners from './components/OurPartners';
import UpcomingProducts from './components/UpcomingProducts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurDetails from './components/OurDetails';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>

      <section id='content' className='space-y-14'>
        <ImageSlider />
        <AboutUs />
        <OurProducts />
        <OurPartners />
        <UpcomingProducts />
        <OurDetails />
        <MyFooter />
      </section>
    </div>
  );
}

export default App;
