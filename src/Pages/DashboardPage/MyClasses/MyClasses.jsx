import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import useAuth from "../../../hooks/useAuth";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: MyClasses = [] } = useQuery({
        queryKey: ["classes", user?.email],
        enabled: !!localStorage.getItem("access-token") && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?email=${user?.email}`);
            return res.data;
        },
    });
    // console.log(MyClasses);

    return (
        <section>
            <SectionTItle
                titleText={"My Classes"}
            />

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Enrolled</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MyClasses.map((martialClass, i) =>
                                    <tr key={martialClass._id}>
                                        <th>{i + 1}</th>
                                        <td><img className="w-7 h-7 rounded-full" src={martialClass?.imgURL} alt="" /></td>
                                        <td>{martialClass?.martialClassName}</td>
                                        <td>{martialClass?.enrolled}</td>
                                        <td>{martialClass?.status}</td>
                                        <td className="italic">{martialClass?.feedback ? martialClass.feedback : "no feedback"}</td>
                                        <td>
                                            <button className="btn btn-xs bg-sky-400 text-white hover:text-black hover:bg-gray-200">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default MyClasses;