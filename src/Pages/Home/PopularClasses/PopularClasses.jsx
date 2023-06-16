import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import axios from "axios";

const PopularClasses = () => {
    const { data: popularClasses = [] } = useQuery({
        queryKey: ["popularClasses"],
        queryFn: async () => {
            const res = await axios.get("https://summer-camp-client-side-d54ce.web.app/popularClasses?limit=6");
            return res.data;
        }
    });
    // console.log(popularClasses);

    return (
        <section>
            <SectionTItle
                titleText={"Popular Classes"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-1">
                {
                    popularClasses.map(item =>
                        <div key={item._id}>
                            <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                                <div
                                    style={{ backgroundImage: `url(${item.imgURL})` }}
                                    className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
                                ></div>
                                <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                                    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{item.martialClassName}</div>
                                    <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                                        <h1 className="text-gray-100 font-bold text-sm">Enrolled: {item.enrolled}</h1>
                                        <button className="bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Details</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default PopularClasses;