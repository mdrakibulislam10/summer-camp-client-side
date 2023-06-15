import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const PopularInstructors = () => {
    const { data: popularInstructor = [] } = useQuery({
        queryKey: ["popularInstructor"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/popularInstructor?limit=6");
            return res.data;
        }
    });
    console.log(popularInstructor);

    return (
        <section>
            <SectionTItle
                titleText={"Popular Instructors"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-1 md:mx-6 lg:mx-12 mb-20">
                {
                    popularInstructor.map(item =>
                        <div key={item._id}>
                            <div className="relative overflow-hidden">
                                <div className="w-full h-64 bg-gradient-to-r from-purple-500 to-pink-500 bg-cover bg-center" style={{ backgroundImage: `url(${item.photo})` }}></div>
                                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                                    <h3 className="text-white text-3xl font-extrabold mb-2 shadow-lg">{item.name}</h3>
                                    <h5 className="text-white text-lg font-semibold">{item.role}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default PopularInstructors;