import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassesCard from "../../ClassesPage/ClassesCard";

const MyEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: enrolledClasses = [] } = useQuery({
        queryKey: ["selectedClasses", user?.email],
        enabled: !!localStorage.getItem("access-token") && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClasses?email=${user?.email}`);
            return res.data;
        },
    });
    // console.log(enrolledClasses);

    return (
        <section>
            <SectionTItle
                titleText={"My Enrolled Classes"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-1 md:mx-10 lg:mx-16">
                {enrolledClasses.map((martialClass) => (
                    <ClassesCard
                        key={martialClass._id}
                        martialClass={martialClass}
                        buttonConditional={"enrolledPage"}
                    />
                ))}
            </div>
        </section>
    );
};

export default MyEnrolledClasses;