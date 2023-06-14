import { useForm } from "react-hook-form";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import swal from "sweetalert";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        // console.log(data);
        const { martialClassName, instructorName, email, availableSeats, price } = data;

        // get photo
        const formData = new FormData();
        formData.append("image", data.classImage[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // console.log(imgURL);

                    const martialClass = {
                        martialClassName,
                        imgURL,
                        instructorName,
                        email,
                        availableSeats,
                        price,
                        status: "pending",
                        enrolled: 0,
                    };

                    // post class
                    axios.post("http://localhost:5000/classes", martialClass)
                        .then(res => {
                            // console.log(res.data.insertedId);
                            if (res.data.insertedId) {
                                reset();
                                swal("Good job!", "Class post Successfully!", "success");
                            }
                        })
                }
            });
    };

    return (
        <section>
            <SectionTItle
                titleText={"Add Class"}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-y border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                    Class name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("martialClassName", { required: true })}
                                        type="text"
                                        name="martialClassName"
                                        id=""
                                        autoComplete="given-name"
                                        className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        errors.martialClassName?.type === 'required' && <p className="text-red-600 italic">Please fill the field.</p>
                                    }
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                    Class Image
                                </label>
                                <div className="mt-2">
                                    <input name="classImage"
                                        {...register("classImage", { required: true })} type="file" className="file-input file-input-bordered w-full" />
                                    {
                                        errors.classImage?.type === 'required' && <p className="text-red-600 italic">Please upload a photo.</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                    Instructor name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("instructorName", { required: true })}
                                        type="text"
                                        name="instructorName"
                                        id="name"
                                        autoComplete="given-name"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Instructor email
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="family-name"
                                        readOnly
                                        defaultValue={user?.email}
                                        className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                    Available seats
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("availableSeats", { required: true })}
                                        type="number"
                                        name="availableSeats"
                                        id=""
                                        autoComplete="given-name"
                                        className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        errors.availableSeats?.type === 'required' && <p className="text-red-600 italic">Please fill the field.</p>
                                    }
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("price", { required: true })}
                                        type="number"
                                        name="price"
                                        id=""
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-1"
                                    />
                                    {
                                        errors.price?.type === 'required' && <p className="text-red-600 italic">Please fill the field.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">

                    <button
                        type="submit"
                        className="uppercase rounded-md bg-indigo-600 w-full md:w-1/2 mx-auto px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add Class
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddClass;