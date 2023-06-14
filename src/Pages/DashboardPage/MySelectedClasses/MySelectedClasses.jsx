import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import ClassesCard from "../../ClassesPage/ClassesCard";

const MySelectedClasses = () => {
    const { user } = useAuth();

    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ["selectedClasses", user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/selectedClasses?email=${user?.email}`);
            return res.data;
        },
    });
    // console.log(selectedClasses);

    return (
        <section>
            <SectionTItle
                titleText={"All Classes"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-1 md:mx-10 lg:mx-16">
                {selectedClasses.map((martialClass) => (
                    <ClassesCard
                        key={martialClass._id}
                        martialClass={martialClass}
                        buttonConditional={false}
                        refetch={refetch}
                    />
                ))}
            </div>
        </section>
    );
};

export default MySelectedClasses;