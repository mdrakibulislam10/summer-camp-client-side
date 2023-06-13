import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section>
            <div className="bg-gray-200 sm:w-1/4 flex items-center justify-between p-3">
                <button onClick={() => setIsOpen(!isOpen)} >
                    <FaBars className="text-xl" />
                </button>

                <p>
                    <Link to={"/"} className="text-xl font-bold text-orange-600 uppercase">Fight Club</Link>
                </p>
            </div>
            <div className="flex">
                {/* Sidebar */}
                <div className={`w-1/4 bg-gray-200 h-screen ${isOpen ? "block" : "hidden"}`}>
                    {/* Sidebar menu */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                        <ul className="space-y-3 font-semibold">
                            <li>
                                <Link to={"/dashboard/manage-classes"} className=" hover:text-white hover:bg-gray-500 p-2 rounded">
                                    Manage Classes
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/manage-users"} className=" hover:text-white hover:bg-gray-500 p-2 rounded">
                                    Manage Users
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    <div className="p-4">

                        <Outlet />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;