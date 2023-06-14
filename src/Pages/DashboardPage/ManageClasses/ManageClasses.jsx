import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

// load all classes
const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/allClasses");
            return res.data;
        },
    });
    // console.log(classes);

    // update status
    const handleStatusUp = (_id, setStatus) => {
        axios.patch(`http://localhost:5000/classes/${_id}`, { setStatus })
            .then(res => {
                console.log(res.data);
                refetch();
            })
    };

    return (
        <div>
            <section>
                <SectionTItle
                    titleText={"Manage Classes"}
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
                                    <th>Instructor name</th>
                                    <th>Instructor email</th>
                                    <th>Available seats</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Approved</th>
                                    <th>Deny</th>
                                    <th>Send feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classes.map((user, i) =>
                                        <tr key={user._id}>
                                            <th>{i + 1}</th>
                                            <td><img className="w-7 h-7 rounded-full" src={user?.imgURL} alt="" /></td>
                                            <td>{user?.martialClassName}</td>
                                            <td>{user?.instructorName}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.availableSeats}</td>
                                            <td>{user?.price}</td>
                                            <td>{user?.status}</td>
                                            <td>
                                                <button disabled={user.status === "approved" || "denied"}
                                                    onClick={() => handleStatusUp(user._id, "approved")}
                                                    className="btn btn-xs bg-green-400 text-white hover:text-black hover:bg-gray-200">Approve</button>
                                            </td>
                                            <td>
                                                <button disabled={user.status === "approved" || "denied"}
                                                    onClick={() => handleStatusUp(user._id, "denied")}
                                                    className="btn btn-xs bg-red-400 text-white hover:text-black hover:bg-gray-200">Deny</button>
                                            </td>
                                            <td>
                                                <button disabled={user.role === "admin"} className="btn btn-xs bg-orange-500 text-white hover:text-black hover:bg-gray-200">Send Feedback</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageClasses;