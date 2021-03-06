import Logo1 from '../images/logo1.png'

const OurPartners = () => {

    const partners = [
        { id: '1', logo: Logo1 },
        { id: '2', logo: Logo1 },
        { id: '3', logo: Logo1 },
        { id: '4', logo: Logo1 },
        { id: '5', logo: Logo1 },
        { id: '6', logo: Logo1 },
    ]

    return (
        <section>
            <h1 className="text-center text-3xl font-semibold"> Our Partners </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-5 px-3 md:px-10 lg:px-20">
                {
                    partners.map((partner) => (
                        <div key={partner.id} className="col-span-1 flex justify-center items-center h-24 md:h-32 
                        shadow rounded-xl overflow-hidden grayscale transform transition-all duration-300 hover:scale-105 ease-in-out cursor-pointer hover:grayscale-0 hover:shadow-lg">
                            <img src={partner.logo} className="object-cover w-full h-32" alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default OurPartners;