import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../src/assets/fight-club-logo.png";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import useUserRole from "../../../hooks/useUserRole";


const Navbar = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    const [userRole, refetch, isUserLoading] = useUserRole();
    const [isHidden, setIsHidden] = useState(true);
    const [userDetails, setUserDetails] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const navigate = useNavigate();

    // 1st time dashboard route not showing problem solved
    refetch();

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    };

    const handleLogOut = () => {
        setUserDetails(false);
        logOut()
            .then(() => {
                swal("Sign Out Successfully!");
                navigate("/", { replace: true });
            })
            .catch(err => {
                swal("Something went wrong!", `${err.message}`, "error");
            })
    };

    const navMenu = <>
        <Link to={"/"} className="text-white uppercase rounded-md px-3 py-2 font-bold text-2xl md:text-3xl" aria-current="page">Fight Club</Link>
        <Link to={"/"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Home</Link>
        <Link to={"/instructors"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Instructors</Link>
        <Link to={"/classes"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Classes</Link>
        {
            !isUserLoading && user && userRole === "admin" &&
            <Link to={"/dashboard/manage-classes"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Dashboard </Link>
        }
        {
            !isUserLoading && user && userRole === "instructor" &&
            <Link to={"/dashboard/add-class"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Dashboard </Link>
        }
        {
            !isUserLoading && user && userRole === "student" &&
            <Link to={"/dashboard/my-selected-classes"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Dashboard </Link>
        }
    </>

    const demoProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU";

    return (
        <div className="">
            <nav className="bg-orange-600">
                <div className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button type="button" onClick={() => setIsHidden(!isHidden)} className="block md:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to={"/"}><img className="block h-12 sm:h-16 bg-white w-auto rounded-full absolute left-16 top-2 sm:static" src={logo} alt="Your Company" /></Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 items-center">

                                    {navMenu}

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className="relative ml-3">
                                <div className="flex gap-2">
                                    {
                                        user ?
                                            <button onClick={() => setUserDetails(!userDetails)} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <img className="h-8 w-8 rounded-full" src={user?.photoURL ? user.photoURL : demoProfile && demoProfile} alt="" />
                                            </button>
                                            :
                                            <Link to={"/login"}><button className="btn btn-sm btn-active font-bold">Login <FaUser /> </button></Link>
                                    }
                                </div>

                                {
                                    user &&
                                    <div className={`absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${!userDetails ? "hidden" : "block"}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                        <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">{user?.displayName}</p>
                                        <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">{user?.email}</p>
                                        <button onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Logout</button>
                                    </div>
                                }
                            </div>

                            <div className="ml-3">
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input
                                        type="checkbox"
                                        onChange={handleToggle}
                                        checked={theme === "light" ? false : true}
                                    />

                                    {/* sun icon */}
                                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="" id="mobile-menu">
                    <div className={`space-y-1 px-2 pb-3 pt-2 flex flex-col md:hidden ${isHidden ? "hidden" : "block"}`}>

                        {navMenu}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;