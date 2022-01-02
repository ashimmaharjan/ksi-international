
import Slider from "react-slick";
import Equipment1 from '../images/equipment-1.png'
import Equipment2 from '../images/equipment-2.png'
import Equipment3 from '../images/equipment-3.png'
import Equipment4 from '../images/equipment-4.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#22d3ee", borderRadius: '10px' }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#22d3ee", borderRadius: '10px', }}
            onClick={onClick}
        />
    );
}

const ProductSlider = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    const products = [
        { productId: '1', photo: Equipment1 },
        { productId: '2', photo: Equipment2 },
        { productId: '3', photo: Equipment3 },
        { productId: '4', photo: Equipment4 },
        { productId: '5', photo: Equipment2 },
        { productId: '6', photo: Equipment1 },
        { productId: '7', photo: Equipment4 },
        { productId: '8', photo: Equipment3 },
    ];

    return (
        <div className="mt-6 px-3 md:px-10 lg:px-20">
            <Slider {...settings}>
                {
                    products.map((product) => (
                        <div key={product.productId} className="px-3">
                            <div className="w-full h-64 overflow-hidden shadow-md rounded-2xl" style={{ background: '#22d3ee' }}>
                                <img src={product.photo} className="object-contain w-full h-64" alt="" />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default ProductSlider;