import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import loginGif from "../../assets/login-gif.gif";
import { useState } from "react";

const Login = () => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 mx-1 md:mx-10 my-6">
            <div className="max-w-xs sm:w-1/2 mx-auto">
                <h2 className="text-2xl text-center mb-4 font-semibold">Please Login!</h2>
                <form className="shadow-2xl rounded px-8 mb-4 border border-gray-300 py-12">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex relative">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={isHidden ? "password" : "text"} placeholder="Enter Password" />
                            {
                                isHidden
                                    ? <FaRegEyeSlash onClick={() => setIsHidden(!isHidden)} className="absolute end-1 top-3 text-xl" />
                                    : <FaRegEye onClick={() => setIsHidden(!isHidden)} className="absolute end-1 top-3 text-xl" />
                            }

                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>
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

export default Login;