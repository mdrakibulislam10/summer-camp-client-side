import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ inOrUp }) => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                swal("Welcome!", `Sign ${inOrUp} Successfully!`, "success");
                navigate("/", { replace: true });
                console.log(result.user);
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