import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const MyClasses = () => {
    const { user } = useAuth();

    const { data: MyClasses = [], refetch } = useQuery({
        queryKey: ["classes", user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes?email=${user?.email}`);
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
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Enrolled</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MyClasses.map((user, i) =>
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td><img className="w-7 h-7 rounded-full" src={user?.imgURL} alt="" /></td>
                                        <td>{user?.martialClassName}</td>
                                        <td>{user?.enrolled}</td>
                                        <td>{user?.status}</td>
                                        <td className="italic">{user?.feedback ? user.feedback : "no feedback"}</td>
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