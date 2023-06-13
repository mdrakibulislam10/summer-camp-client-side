import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="my-4">
            <img className="rounded mx-auto w-2/3 md:w-2/6" src="https://i.ibb.co/zbGv7Gb/oops-404-error-with-broken-robot-concept-illustration-114360-5529-removebg.png" alt="" />
            <div className="text-center">
                <p className="text-lg md:text-2xl font-semibold my-3">PAGE NOT FOUND <span className="text-red-600">404</span></p>

                <button onClick={() => navigate("/", { replace: true })} className="btn bg-sky-400 border-0 hover:bg-sky-500 font-semibold text-white md:text-md">
                    <FaArrowCircleLeft className="text-lg" />
                    BACK TO HOME
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;