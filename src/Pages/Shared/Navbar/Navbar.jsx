import { Link } from "react-router-dom";
import logo from "../../../../src/assets/fight-club-logo.png";
import { useState } from "react";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const [isHidden, setIsHidden] = useState(true);

    const navMenu = <>
        <Link to={"/"} className="text-white uppercase rounded-md px-3 py-2 font-bold text-2xl md:text-3xl" aria-current="page">Fight Club</Link>
        <Link to={"/"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Home</Link>
        <Link to={"/"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Instructors</Link>
        <Link to={"/"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Classes</Link>
        <Link to={"/"} className="hover:bg-gray-700 text-gray-100 rounded-md px-3 py-2 font-bold">Dashboard </Link>
    </>

    return (
        <div>
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
                                <Link to={"/"}><img className="block h-12 sm:h-16 bg-white w-auto rounded-full" src={logo} alt="Your Company" /></Link>
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
                                    <Link to={"/login"}><button className="btn btn-sm btn-active font-bold">Login <FaUser /> </button></Link>

                                    <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
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