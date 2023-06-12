import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginGif from "../../assets/login-gif.gif";

const Register = () => {
    const [passHidden, setPassHidden] = useState(true);
    const [confirmPassHidden, setConfirmPassHidden] = useState(true);

    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 mx-1 md:mx-10 my-6">
            <div className="max-w-xs sm:w-1/2 mx-auto">
                <h2 className="text-2xl text-center mb-4 font-semibold">Please Register!</h2>
                <form className="shadow-2xl rounded px-8 mb-4 border border-gray-300 py-12">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex relative">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={passHidden ? "password" : "text"} placeholder="Enter Password" />
                            {
                                passHidden
                                    ? <FaRegEyeSlash onClick={() => setPassHidden(!passHidden)} className="absolute end-1 top-3 text-xl" />
                                    : <FaRegEye onClick={() => setPassHidden(!passHidden)} className="absolute end-1 top-3 text-xl" />
                            }

                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <div className="flex relative">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={confirmPassHidden ? "password" : "text"} placeholder="Re-Type Password" />
                            {
                                confirmPassHidden
                                    ? <FaRegEyeSlash onClick={() => setConfirmPassHidden(!confirmPassHidden)} className="absolute end-1 top-3 text-xl" />
                                    : <FaRegEye onClick={() => setConfirmPassHidden(!confirmPassHidden)} className="absolute end-1 top-3 text-xl" />
                            }

                        </div>
                    </div>

                    <div className="mb-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Upload Image
                        </label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200" aria-describedby="file_input_help" id="file_input" type="file"></input>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>

                    <p>Have an account? <Link to={"/login"}><span className="text-blue-600 font-bold">Login.</span></Link></p>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    google
                </p>
            </div>

            <div className="sm:w-1/2">
                <img className="rounded" src={loginGif} alt="" />
            </div>
        </section>
    );
};

export default Register;