import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });
    console.log(users);

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
                                        <button className="btn btn-xs bg-sky-400 text-white hover:text-black">Make Instructor</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-xs bg-sky-400 text-white hover:text-black">Make Admin</button>
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