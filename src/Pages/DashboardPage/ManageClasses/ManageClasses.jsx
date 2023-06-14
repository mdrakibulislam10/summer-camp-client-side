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
                if (res.data.modifiedCount) {
                    refetch();
                }
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
                                    classes.map((martialClass, i) =>
                                        <tr key={martialClass._id}>
                                            <th>{i + 1}</th>
                                            <td><img className="w-7 h-7 rounded-full" src={martialClass?.imgURL} alt="" /></td>
                                            <td>{martialClass?.martialClassName}</td>
                                            <td>{martialClass?.instructorName}</td>
                                            <td>{martialClass?.email}</td>
                                            <td>{martialClass?.availableSeats}</td>
                                            <td>{martialClass?.price}</td>
                                            <td>{martialClass?.status}</td>
                                            <td>
                                                <button disabled={martialClass.status === "approved" || martialClass.status === "denied"}

                                                    onClick={() => handleStatusUp(martialClass._id, "approved")}
                                                    className="btn btn-xs bg-green-400 text-white hover:text-black hover:bg-gray-200">Approve</button>
                                            </td>
                                            <td>
                                                <button disabled={martialClass.status === "approved" || martialClass.status === "denied"}

                                                    onClick={() => handleStatusUp(martialClass._id, "denied")}
                                                    className="btn btn-xs bg-red-400 text-white hover:text-black hover:bg-gray-200">Deny</button>
                                            </td>
                                            <td>
                                                <button disabled={martialClass.role === "admin"} className="btn btn-xs bg-orange-500 text-white hover:text-black hover:bg-gray-200">Send Feedback</button>
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