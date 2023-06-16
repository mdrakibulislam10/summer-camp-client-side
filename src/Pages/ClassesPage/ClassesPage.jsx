import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../components/SectionTItle/SectionTItle";
import ClassesCard from "./ClassesCard";

const ClassesPage = () => {
    const { data: approvedClasses = [] } = useQuery({
        queryKey: ["approvedClasses"],
        queryFn: async () => {
            const res = await axios.get("https://summer-camp-server-side-mu.vercel.app/classes/approved")
            return res.data;
        },
    });
    // console.log(approvedClasses);

    return (
        <section>
            <SectionTItle
                titleText={"All Classes"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-1 md:mx-10 lg:mx-16">
                {approvedClasses.map((martialClass) => (
                    <ClassesCard
                        key={martialClass._id}
                        martialClass={martialClass}
                        buttonConditional={"classesPage"}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClassesPage;