
const InstructorsCard = ({ item, fieldConditional }) => {
    return (
        <div className="relative overflow-hidden">
            <div className="w-full rounded-sm h-64 bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-center" style={{ backgroundImage: `url(${item.photo})` }}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                <h3 className="text-white text-3xl font-extrabold mb-2 shadow-lg">{item.name}</h3>
                {
                    fieldConditional === "role" &&
                    <h5 className="text-white text-lg font-semibold">{item.role}</h5>
                }
                {
                    fieldConditional === "email" &&
                    <h5 className="text-white text-lg font-semibold">{item.email}</h5>
                }
            </div>
        </div>
    );
};

export default InstructorsCard;