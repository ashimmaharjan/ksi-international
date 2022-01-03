const OurDetails = () => {

    const details = [
        { detailOf: 'Clients', number: '1000' },
        { detailOf: 'Products', number: '200' },
        { detailOf: 'Services', number: '30' },
        { detailOf: 'Satisfied Customers', number: '2000' },
    ]

    return (
        <section className="px-3 md:px-10 w-11/12 mx-auto">
            <h1 className="text-center text-3xl font-semibold"> Our Details </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 mt-5 px-3">

                {details.map((detail) => (
                    <div key={detail.detailOf} className="col-span-1 text-center
                     bg-cyan-400 text-white rounded-3xl shadow-md flex flex-col 
                    justify-center items-center py-5 transform
                     transition-all duration-500 ease-in-out
                       cursor-pointer hover:bg-gray-900 hover:text-cyan-400">
                        <h1 className="text-xl md:text-3xl font-bold">{detail.number}+</h1>
                        <h6 className="mt-1 text-sm md:text-lg"> {detail.detailOf} </h6>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurDetails;