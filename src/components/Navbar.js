import { IoMenu } from 'react-icons/io5';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <div className="flex justify-between text-white px-10 py-5 items-center" style={{ background: '#22d3ee' }}>
            <h1 className="text-2xl font-semibold">LOGO</h1>

            {/* Nav Links */}
            <div className="hidden lg:block">
                <ul className='menu space-x-6'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#" className='inline-flex items-center'>Products <RiArrowDownSLine className='ml-1 carret-arrow' /></a>
                        <ul className='submenu space-y-1'>
                            <li><a href="#" className='hover:bg-cyan-400'>Cylinders</a></li>
                            <li><a href="#" className='inline-flex items-center'>Masks <RiArrowRightSLine className='ml-1 carret-arrow' /></a>
                                <ul className='submenu2 space-y-1'>
                                    <li><a href="#">K9 Mask</a></li>
                                    <li><a href="#">K10 Mask</a></li>
                                    <li><a href="#">Normal Mask</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Medicines</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            {/* For Mobile Devices */}
            <div className="block lg:hidden">
                <IoMenu className='w-8 h-8'></IoMenu>
            </div>
        </div>
    );
}

export default Navbar;  