import { GiPill } from 'react-icons/gi'

const AboutUs = () => {
    return (
        <section className="px-10">
            <div className="mt-10">
                <div className='flex items-center justify-center space-x-5'>
                    <GiPill className='w-7 h-7' style={{ color: "#22d3ee" }} />
                    <h1 className="text-center text-3xl font-semibold"> About Us</h1>
                    <GiPill className='w-7 h-7' style={{ color: "#22d3ee" }} />
                </div>

                <h2 className="text-center text-2xl font-semibold mt-3 uppercase">KSI Internationals</h2>

                <p className="mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae deleniti itaque culpa, architecto temporibus odio blanditiis vel, nobis dolore harum vero delectus ipsa quasi numquam magni repudiandae quia recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed amet, dolores, perferendis mollitia dolor adipisci fugiat eos ea rerum expedita. Alias quasi aliquam iure voluptatum corrupti illo reprehenderit molestiae!</p>
            </div>
        </section >
    );
}

export default AboutUs;