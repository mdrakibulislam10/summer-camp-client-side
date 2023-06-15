import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import InstructorsCard from "../../InstructorsPage/InstructorsCard/InstructorsCard";

const PopularInstructors = () => {
    const { data: popularInstructor = [] } = useQuery({
        queryKey: ["popularInstructor"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/popularInstructor?limit=6");
            return res.data;
        }
    });
    // console.log(popularInstructor);

    return (
        <section>
            <SectionTItle
                titleText={"Popular Instructors"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-1 md:mx-6 lg:mx-12">
                {
                    popularInstructor.map(item =>
                        <InstructorsCard
                            key={item._id}
                            item={item}
                            fieldConditional={"role"}
                        />
                    )
                }
            </div>

        </section>
    );
};

export default PopularInstructors;