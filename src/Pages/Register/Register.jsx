import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginGif from "../../assets/login-gif.gif";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
// console.log(img_hosting_token);

const Register = () => {
    const { signUp, userProfileUp } = useAuth();
    const [passHidden, setPassHidden] = useState(true);
    const [confirmPassHidden, setConfirmPassHidden] = useState(true);
    const [passDonTMatch, setPassDonTMatch] = useState("");
    const navigate = useNavigate();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { name, email, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            setPassDonTMatch("Password don't match. Please try again.");
            return;
        }
        setPassDonTMatch("");
        console.log(data);

        // get photo
        const formData = new FormData();
        formData.append("image", data.photo[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const userImage = imgResponse.data.display_url;
                    console.log(userImage);

                    // sign up
                    signUp(email, password)
                        .then(result => {
                            userProfileUp(name, userImage)
                                .then(() => {
                                    swal("Welcome!", "Sign Up Successfully!", "success");
                                    navigate("/", { replace: true });
                                    console.log(result.user);
                                    reset();
                                })
                                .catch(err => {
                                    swal("Something went wrong!", `${err?.message}`, "error");
                                })
                        })
                        .catch(err => {
                            swal("Something went wrong!", `${err?.message}`, "error");
                        })
                }
            })
    };

    return (
        <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 mx-1 md:mx-10 my-6">
            <div className="max-w-xs sm:w-1/2 mx-auto md:order-2">
                <h2 className="text-2xl text-center mb-4 font-semibold">Please Register!</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl rounded px-8 mb-4 border border-gray-300 py-12">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
                        {
                            errors.name?.type === 'required' && <p className="text-red-600 italic">Name is required.</p>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
                        {
                            errors.email?.type === 'required' && <p className="text-red-600 italic">Email is required.</p>
                        }
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex relative">
                            <input {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                            })}
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
                        {
                            errors.password?.type === "minLength" && <p className="text-red-600 italic">Password at least 6 characters long.</p>
                        }
                        {
                            errors.password?.type === "pattern" && <p className="text-red-600 italic">Passwords should have at least one capital letter and one special character.</p>
                        }
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <div className="flex relative">
                            <input {...register("confirmPassword", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type={confirmPassHidden ? "password" : "text"} placeholder="Re-Type Password" />
                            {
                                confirmPassHidden
                                    ? <FaRegEyeSlash onClick={() => setConfirmPassHidden(!confirmPassHidden)} className="absolute end-1 top-3 text-xl" />
                                    : <FaRegEye onClick={() => setConfirmPassHidden(!confirmPassHidden)} className="absolute end-1 top-3 text-xl" />
                            }
                        </div>

                        {
                            errors.confirmPassword?.type === 'required' && <p className="text-red-600 italic">Confirm Password is required.</p>
                        }
                        <p className="text-red-600 italic">{passDonTMatch}</p>
                    </div>

                    <div className="mb-7">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Upload Image
                        </label>
                        <input {...register("photo", { required: true })} className="mb-2 block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200" aria-describedby="file_input_help" id="file_input" type="file"></input>

                        {
                            errors.photo?.type === 'required' && <p className="text-red-600 italic">Photo is required.</p>
                        }
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                    </div>

                    <p>Have an account? <Link to={"/login"}><span className="text-blue-600 font-bold">Login.</span></Link></p>
                </form>
                <p className="text-center text-lg">
                    --- OR ---
                </p>
                <SocialLogin />
            </div>

            <div className="sm:w-1/2 md:order-1">
                <img className="rounded" src={loginGif} alt="" />
            </div>
        </section>
    );
};

export default Register;