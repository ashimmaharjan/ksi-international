import { MdEmail, MdPhone } from "react-icons/md"
import { RiMapPinLine } from "react-icons/ri"

const MyFooter = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-10 md:px-20 bg-cyan-500 text-white py-5">
                <div className="col-span-1 p-3">
                    <h6 className="font-semibold text-lg md:text-xl uppercase">Useful Links</h6>
                    <div className="mt-1 flex flex-col">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Gallery</a>
                        <a href="">Contact Us</a>
                        <a href="">Privacy Policies</a>
                    </div>
                </div>

                <div className="col-span-1  p-3">
                    <h6 className="font-semibold text-lg md:text-xl uppercase"> Our Products</h6>
                    <div className="mt-1 flex flex-col">
                        <a href="">Product 1</a>
                        <a href="">Product 2</a>
                        <a href="">Product 3</a>
                        <a href="">Product 4</a>
                    </div>
                </div>

                <div className="col-span-1 p-3">
                    <h6 className="font-semibold text-lg md:text-xl uppercase"> Our Partners</h6>
                    <div className="mt-1 flex flex-col">
                        <a href="">Partner 1</a>
                        <a href="">Partner 1</a>
                        <a href="">Partner 2</a>
                        <a href="">Partner 3</a>
                    </div>
                </div>

                <div className="col-span-1 p-3">
                    <h6 className="font-semibold text-lg md:text-xl"> Get in Touch</h6>
                    <div className="mt-1 flex flex-col gap-1">
                        <a href="" className="inline-flex gap-1 items-center"><MdEmail className="w-5 h-5" /> companyemail@gmail.com </a>
                        <a href="" className="inline-flex gap-1 items-center"><MdPhone className="w-5 h-5" /> 9876512321, 9876523411 </a>
                        <a href="" className="inline-flex gap-1 items-center"><RiMapPinLine className="w-5 h-5" /> Chandragiri-12, Kathmandu </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MyFooter;