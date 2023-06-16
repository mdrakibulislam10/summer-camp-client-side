import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                const saveUser = {
                    name: loggedInUser.displayName,
                    email: loggedInUser.email,
                    photo: loggedInUser.photoURL,
                    role: "student", // user;
                };
                axios.post("https://summer-camp-server-side-mu.vercel.app/users", saveUser)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log(res.data.insertedId);
                            swal("Welcome!", `Sign Up Successfully!`, "success");
                        }
                    })
                swal("Welcome!", `Sign In Successfully!`, "success");
                navigate("/", { replace: true });
            })
            .catch(err => {
                swal("Something went wrong!", `${err?.message}`, "error");
            })
    };

    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex flex-wrap items-center gap-1 text-md font-semibold border border-blue-600 rounded-2xl py-2 px-1 mb-4 w-3/4 mx-auto mt-3 justify-center hover:bg-blue-700 bg-blue-500 text-white"><FaGoogle /> Login With Google</button>
        </div>
    );
};

export default SocialLogin;