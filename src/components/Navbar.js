import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { RiArrowDownSLine, RiArrowRightSLine, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu;
    let menuMask;

    if (showMenu) {
        menu = <div className='fixed bg-white text-black top-0 left-0 w-4/5 h-full z-50'>
            <div className='flex justify-between items-center px-5 py-3 shadow border-b'>
                <h2 className='text-2xl font-semibold'>Menu</h2>
                <RiCloseLine className='w-8 h-8' onClick={() => setShowMenu(false)} />
            </div>

            <div className='px-5 py-3 text-xl'>
                <ul className='space-y-2'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Gallery</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Products</a></li>
                </ul>
            </div>
        </div>

        menuMask = <div
            onClick={() => setShowMenu(false)}
            className='fixed bg-gray-800 opacity-60 p-5 text-black top-0 left-0 w-full h-full z-50'>
            This is menu
        </div>
    }

    return (
        <div className="flex justify-between text-white px-4 md:px-10 py-5 items-center" style={{ background: '#22d3ee' }}>
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
                <IoMenu className='w-8 h-8' onClick={() => setShowMenu(!showMenu)}></IoMenu>
            </div>

            {menuMask}
            {menu}
        </div>
    );
}

export default Navbar;  