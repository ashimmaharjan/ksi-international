import Equipment1 from '../images/equipment-1.png'
import Equipment2 from '../images/equipment-2.png'

const UpcomingProducts = () => {

    const upcomingProducts = [
        { productId: '1', photo: Equipment1 },
        { productId: '2', photo: Equipment2 },
    ]

    return (
        <section>
            <h1 className="text-center text-3xl font-semibold"> Upcoming Products </h1>

            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-5 px-3 md:px-10 lg:px-20">
                {upcomingProducts.map((upcomingProduct) => (
                    <div key={upcomingProduct.productId} className='col-span-1 rounded-2xl shadow-md overflow-hidden bg-cyan-300'>
                        <img src={upcomingProduct.photo} className='object-contain w-full h-40 md:h-80 lg:h-96'></img>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default UpcomingProducts;