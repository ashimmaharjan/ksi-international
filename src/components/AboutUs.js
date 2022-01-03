import { GiPill } from 'react-icons/gi'

const AboutUs = () => {
    return (
        <section className="px-3 md:px-10 lg:px-20">
            <div>
                <div className='flex items-center justify-center space-x-5'>
                    <GiPill className='w-7 h-7' style={{ color: "#22d3ee" }} />
                    <h1 className="text-center text-3xl font-semibold"> About Us</h1>
                    <GiPill className='w-7 h-7' style={{ color: "#22d3ee" }} />
                </div>

                <h2 className="text-center text-2xl font-semibold mt-3 uppercase">KSI Internationals</h2>

                <p className="mt-2 text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae deleniti itaque culpa, architecto temporibus odio blanditiis vel, nobis dolore harum vero delectus ipsa quasi numquam magni repudiandae quia recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed amet, dolores, perferendis mollitia dolor adipisci fugiat eos ea rerum expedita. Alias quasi aliquam iure voluptatum corrupti illo reprehenderit molestiae!</p>

                <div className='flex flex-col-reverse md:flex-row bg-cyan-400 mt-5 md:gap-5 rounded-3xl shadow-sm overflow-hidden'>
                    <div className='w-full md:w-1/2 p-5 lg:p-10'>
                        <h1 className='text-center text-2xl lg:text-3xl font-bold'> Our Opening <span className='text-white'>Hours</span> </h1>
                        <p className='mt-1 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam cum facilis quibusdam eos officiis quae nulla, illo id, quo qui amet tenetur non?
                            Possimus iusto optio quae ullam repellendus nisi.
                            Ipsam cum facilis quibusdam eos officiis quae nulla, illo id, quo qui amet tenetur non?
                            Possimus iusto optio quae ullam repellendus nisi.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src="https://www.treehugger.com/thmb/xj_9qOuYynP1v20l8ideYbHnxMw=/2121x1414/filters:fill(auto,1)/GettyImages-1150022389-d0c345f95f1e407caaba4cfee139eb2b.jpg"
                            className='w-full h-64 md:h-80 lg:h-96 object-cover'
                            alt="" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default AboutUs;