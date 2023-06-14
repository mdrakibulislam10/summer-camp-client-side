import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import { useNavigate } from "react-router-dom";

const ClassesCard = ({ martialClass }) => {
    const { user } = useAuth();
    const [userRole] = useUserRole();
    const navigate = useNavigate();

    const { imgURL, martialClassName, price, instructorName, availableSeats } = martialClass;
    // console.log(martialClass);

    const handleUserCheck = () => {
        !user &&
            swal({
                text: "Please log in before selecting the course",
                buttons: {
                    confirm: "Login",
                },
            })
                .then((value) => {
                    if (value) {
                        navigate("/login", { replace: true });
                    }
                });
        return;
    };

    return (
        <div className={`wrapper antialiased mb-5 ${parseInt(availableSeats) === 0 && "bg-red-600"} px-2 py-3 rounded`}>
            <div>
                <img src={imgURL} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md h-72" />

                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <div className="text-gray-600 uppercase text-sm font-semibold tracking-wider">
                                Instructor: {instructorName}
                            </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{martialClassName}</h4>

                        <div className="mt-1">
                            ${price}
                            <span className="text-gray-600 text-sm"></span>
                        </div>
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="">
                                Available: <span className="text-teal-600 text-md font-semibold">{availableSeats}</span>
                            </div>
                            <div className="">
                                <button onClick={handleUserCheck} disabled={(parseInt(availableSeats) === 0) || (userRole === "admin") || (userRole === "instructor")} className="btn btn-md font-bold bg-gray-300">Select</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassesCard;