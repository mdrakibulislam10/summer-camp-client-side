import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../components/SectionTItle/SectionTItle";
import axios from "axios";
import InstructorsCard from "./InstructorsCard/InstructorsCard";

const InstructorsPage = () => {
    const { data: instructor = [] } = useQuery({
        queryKey: ["instructor"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/instructor");
            return res.data;
        }
    });
    console.log(instructor);

    return (
        <section className="mb-12">
            <SectionTItle
                titleText={"Our Instructors"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-1 md:mx-6 lg:mx-12">
                {
                    instructor.map(item =>
                        <InstructorsCard
                            key={item._id}
                            item={item}
                            fieldConditional={"email"}
                        />
                    )
                }
            </div>

        </section>
    );
};

export default InstructorsPage;