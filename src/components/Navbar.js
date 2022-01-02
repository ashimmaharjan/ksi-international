import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className="flex justify-between text-white px-10 py-3 items-center" style={{ background: '#22d3ee' }}>
            <h1 className="text-2xl font-semibold">LOGO</h1>

            {/* Nav Links */}
            <div className="hidden lg:block space-x-8">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Gallery</a>
                <a href="">Products</a>
                <a href="">Contact Us</a>
            </div>

            {/* For Mobile Devices */}
            <div className="block lg:hidden">
                <IoMenu className='w-8 h-8'></IoMenu>
            </div>
        </div>
    );
}

export default Navbar;  