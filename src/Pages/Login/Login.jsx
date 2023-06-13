import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import loginGif from "../../assets/login-gif.gif";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const Login = () => {
    const { signIn } = useAuth();
    const [passHidden, setPassHidden] = useState(true);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then((result) => {
                swal("Welcome!", "Sign In Successfully!", "success");
                navigate("/", { replace: true });
                console.log(result.user);
            })
            .catch(err => {
                swal("Something went wrong!", `${err?.message}`, "error");
            })
    };

    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 mx-1 md:mx-10 my-6">
            <div className="max-w-xs sm:w-1/2 mx-auto">
                <h2 className="text-2xl text-center mb-4 font-semibold">Please Login!</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl rounded px-8 mb-4 border border-gray-300 py-12">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input {...register("email", { required: true })} className="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
                        {
                            errors.email?.type === 'required' && <p className="text-red-600 italic">Email is required.</p>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex relative">
                            <input {...register("password", { required: true })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={passHidden ? "password" : "text"} placeholder="Enter Password" />
                            {
                                passHidden
                                    ? <FaRegEyeSlash onClick={() => setPassHidden(!passHidden)} className="absolute end-1 top-3 text-xl" />
                                    : <FaRegEye onClick={() => setPassHidden(!passHidden)} className="absolute end-1 top-3 text-xl" />
                            }
                        </div>
                        {
                            errors.password?.type === 'required' && <p className="text-red-600 italic">Password is required.</p>
                        }
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>

                    <p>Don't have an account? <Link to={"/register"}><span className="text-blue-600 font-bold">Register.</span></Link></p>
                </form>
                <p className="text-center text-lg">
                    --- OR ---
                </p>
                <SocialLogin inOrUp={"In"} />
            </div>

            <div className="sm:w-1/2">
                <img className="rounded" src={loginGif} alt="" />
            </div>
        </section>
    );
};

export default Login;