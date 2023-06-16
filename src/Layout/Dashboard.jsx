import { useState } from "react";
import { FaAddressBook, FaBars, FaBookMedical, FaBookOpen, FaCalendarCheck, FaCalendarPlus, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const [userRole, , isUserLoading] = useUserRole();
    const [isOpen, setIsOpen] = useState(true);
    const { user } = useAuth();
    // console.log(userRole);

    // const userRole = "admin";

    return (
        <section>
            <Navbar />

            <div className="bg-gray-200 sm:w-1/4 flex items-center justify-between p-3">
                <button onClick={() => setIsOpen(!isOpen)} >
                    <FaBars className="text-xl" />
                </button>

                {/* <p>
                    <Link to={"/"} className="text-xl font-bold text-sky-600 uppercase">Fight Club</Link>
                </p> */}
            </div>
            <div className="flex mb-12">
                {/* Sidebar */}
                <div className={`sm:w-1/4 bg-gray-200 h-screen ${isOpen ? "block" : "hidden"}`}>
                    {/* Sidebar menu */}
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                        <ul className="space-y-3 font-semibold">
                            {
                                !isUserLoading && user && userRole === "admin" &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/manage-classes"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaBookOpen /> Manage Classes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/manage-users"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaUsers /> Manage Users</span>
                                        </Link>
                                    </li>
                                </>
                            }
                            {
                                !isUserLoading && user && userRole === "instructor" &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/add-class"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaBookMedical /> Add a Class</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/my-classes"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaAddressBook /> My Classes</span>
                                        </Link>
                                    </li>
                                </>
                            }
                            {
                                !isUserLoading && user && userRole === "student" &&
                                <>
                                    <li>
                                        <Link to={"/dashboard/my-selected-classes"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaCalendarPlus /> My Selected Classes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/my-enrolled-classes"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaCalendarCheck /> My Enrolled Classes</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/dashboard/payment-history"} className="">
                                            <span className="flex items-center gap-1 hover:text-white hover:bg-gray-500 p-2 rounded"><FaMoneyCheckAlt /> Payment History</span>
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 overflow-auto">
                    <div className="p-4">

                        <Outlet />

                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Dashboard;