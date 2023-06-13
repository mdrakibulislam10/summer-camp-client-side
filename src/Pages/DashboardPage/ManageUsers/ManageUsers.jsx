import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const ManageUsers = () => {

    // load add users
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });
    // console.log(users);

    // update users data
    const handleRoleUpdate = (_id, userRole) => {
        axios.patch(`http://localhost:5000/users/${_id}`, { userRole })
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                }
            })
    };

    return (
        <div>
            <SectionTItle
                titleText={"Manage Users"}
            />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td><img className="w-7 rounded-full" src={user?.photo} alt="" /></td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        <button disabled={user.role === "instructor"} onClick={() => handleRoleUpdate(user._id, "instructor")} className="btn btn-xs bg-sky-400 text-white hover:text-black hover:bg-gray-200">Make Instructor</button>
                                    </td>
                                    <td>
                                        <button disabled={user.role === "admin"} onClick={() => handleRoleUpdate(user._id, "admin")} className="btn btn-xs bg-sky-400 text-white hover:text-black hover:bg-gray-200">Make Admin</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;