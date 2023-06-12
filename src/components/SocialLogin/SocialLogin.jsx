import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <button className="flex flex-wrap items-center gap-1 text-md font-semibold border border-blue-600 rounded-2xl py-2 px-1 mb-4 w-3/4 mx-auto mt-3 justify-center hover:bg-blue-700 bg-blue-500 text-white"><FaGoogle /> Login With Google</button>
        </div>
    );
};

export default SocialLogin;