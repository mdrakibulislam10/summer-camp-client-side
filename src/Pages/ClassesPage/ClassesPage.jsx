import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../components/SectionTItle/SectionTItle";
import ClassesCard from "./ClassesCard";

const ClassesPage = () => {
    const { data: approvedClasses = [], refetch } = useQuery({
        queryKey: ["approvedClasses"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/classes/approved")
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
                        buttonConditional={true}
                        refetch={refetch}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClassesPage;