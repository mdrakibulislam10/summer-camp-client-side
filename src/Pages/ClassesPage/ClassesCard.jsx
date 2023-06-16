import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassesCard = ({ martialClass, buttonConditional, handleDeleteClass }) => {
    const { user } = useAuth();
    const [userRole] = useUserRole();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const { imgURL, martialClassName, price, instructorName, availableSeats, _id, enrolled } = martialClass;
    // console.log(martialClass);

    // post selected class
    const handleSelectClass = () => {
        if (!user) {
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
        }

        const selectedClass = {
            classId: _id,
            imgURL,
            martialClassName,
            price,
            instructorName,
            availableSeats,
            email: user?.email,
            enrolled,
        };
        axiosSecure.post("/selectedClasses", selectedClass)
            .then(res => {
                if (res.data.insertedId) {
                    toast("Class selected successfully");
                }
            })
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
                            {
                                buttonConditional === "classesPage" &&
                                <div className="">
                                    <button onClick={handleSelectClass} disabled={(parseInt(availableSeats) === 0) || (userRole === "admin") || (userRole === "instructor")} className="btn btn-md font-bold bg-gray-300">Select</button>
                                </div>
                            }
                            {
                                buttonConditional === "mySelectedPage" &&
                                <div className="">
                                    <Link to={"/dashboard/payment"} state={martialClass}><button className="btn btn-md font-bold bg-green-400">Pay</button></Link>

                                    <button onClick={() => handleDeleteClass(_id)} className="btn btn-md font-bold ms-1 bg-red-400">Delete</button>
                                </div>
                            }
                            {
                                buttonConditional === "enrolledPage" &&
                                <button className="btn btn-md font-bold ms-1 bg-gray-200">Continue</button>
                            }
                        </div>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassesCard;