import Slider from 'react-slick';
import Equipment1 from '../images/equipment-1.png'
import Equipment2 from '../images/equipment-2.png'
import Equipment3 from '../images/equipment-3.png'
import Equipment4 from '../images/equipment-4.png'

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        accessibility: false,
    };

    const sliderImages = [
        { photo: Equipment1 },
        { photo: Equipment2 },
        { photo: Equipment3 },
        { photo: Equipment4 },
    ];
    return (
        <section className='bg-cyan-300'>
            <Slider {...settings}>
                {sliderImages.map((sliderImage) => (
                    <div>
                        <img src={sliderImage.photo} style={{ width: '100%', height: '87vh' }} className='object-contain' alt="" />
                    </div>
                ))}

            </Slider>
        </section>
    );
}

export default ImageSlider;