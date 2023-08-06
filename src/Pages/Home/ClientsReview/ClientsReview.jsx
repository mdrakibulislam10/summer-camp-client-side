import { FaAws, FaQuoteLeft } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useRef } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import swal from 'sweetalert';
import { useQuery } from '@tanstack/react-query';
import Marquee from "react-fast-marquee";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ClientsReview = () => {
    const { user } = useAuth();
    const reviewRef = useRef();
    const [axiosSecure] = useAxiosSecure();
    // console.log(user);

    // get review
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axios.get("https://summer-camp-server-side-mu.vercel.app/reviews");
            return res.data;
        }
    })

    // console.log(reviews);

    // post review
    const handleReviewSub = () => {
        // console.log(reviewRef.current.value);
        const reviewerInfo = {
            email: user?.email,
            reviewerImg: user?.photoURL,
            reviewerName: user?.displayName,
            reviewText: reviewRef.current.value,
        }

        console.log(reviewerInfo);
        axiosSecure.post("/reviews", reviewerInfo)
            .then(res => {
                if (res.data.insertedId) {
                    refetch();
                    swal("Reviews added successfully!", "success");
                }
            })
    };

    return (
        <section className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-semibold  inline-block">WHAT CLIENTS SAY</h1>
            <div className="border-b-4 border-blue-600 w-24 mx-auto mt-3"></div>

            <div>
                <Marquee pauseOnHover>
                    {
                        reviews.map(review =>
                            <div key={review._id}>
                                <div className='border-2 px-2 py-4 rounded bg-white shadow-xl w-60 md:w-64 h-80 mx-1 my-10'>
                                    <img className='rounded-full mx-auto' src={review?.reviewerImg} alt="" />
                                    <h2 className='text-xl font-bold mt-2 mb-4'>{review?.reviewerName}</h2>
                                    {
                                        review?.reviewText.length < 95
                                            ?
                                            <p>{review?.reviewText}</p>
                                            :
                                            <p title={review?.reviewText}>{review?.reviewText.slice(0, 92)}.....</p>
                                    }
                                    <p className="text-4xl my-5">
                                        <FaQuoteLeft className='mx-auto' />
                                    </p>
                                </div>
                            </div>

                        )
                    }
                </Marquee>
            </div>

            {/* Modal */}
            {
                user?.email
                    ?
                    <button className="btn bg-purple-500 text-white hover:text-black"
                        onClick={
                            () => window.my_modal_5.showModal()
                        }
                    >
                        Write a review
                    </button>
                    :
                    <Link to={"/login"}>
                        <button className="btn bg-sky-600 text-white">Login to add a review</button>
                    </Link>
            }

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">

                    <img className='rounded-full mx-auto' src={user?.photoURL} alt="" />
                    <h3 className="font-bold text-lg mb-5 mt-1">{user?.displayName}</h3>
                    <textarea
                        ref={reviewRef}
                        placeholder="Write here..." className="textarea textarea-bordered textarea-md w-full max-w-xs"
                    ></textarea>

                    <div className='flex justify-end gap-2'>
                        <div className="modal-action">
                            <button className="btn bg-sky-600 text-white" onClick={handleReviewSub}>Submit</button>
                        </div>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-black text-white">Close</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </section>
    );
};

export default ClientsReview;