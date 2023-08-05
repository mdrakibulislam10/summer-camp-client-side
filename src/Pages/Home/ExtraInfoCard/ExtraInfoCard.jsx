
const ExtraInfoCard = () => {
    return (
        <section className="bg-orange-600 text-white p-10 mb-10 font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mx-3 md:mx-10 rounded">
            <div>
                <h3 className="text-gray-200">CALL US 24/7</h3>
                <h2 className="text-2xl">+88 0176240000</h2>
            </div>
            <div>
                <h3 className="text-gray-200">OUR LOCATION</h3>
                <h2 className="text-2xl">Dhaka, Bangladesh</h2>
            </div>
            <div>
                <h3 className="text-gray-200">WORKING HOURS</h3>
                <h2 className="text-2xl">DAILY: 8AM - 6PM</h2>
            </div>
        </section>
    );
};

export default ExtraInfoCard;