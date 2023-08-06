import { FaQuoteLeft } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import { useRef } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ClientsReview = () => {
    const { user } = useAuth();
    const reviewRef = useRef();
    const [axiosSecure] = useAxiosSecure();
    // console.log(user);

    const handleReviewSub = () => {
        // console.log(reviewRef.current.value);
        const reviewerInfo = {
            email: user?.email,
            reviewerImg: user?.photoURL,
            reviewerName: user?.displayName,
            reviewText: reviewRef.current.value,
        }

        console.log(reviewerInfo);


    };

    return (
        <section className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl font-semibold  inline-block">WHAT CLIENTS SAY</h1>
            <div className="border-b-4 border-blue-600 w-24 mx-auto mt-3"></div>

            <img src="" alt="" />
            <h2>name</h2>
            <p>dfdfjdkf</p>
            <p className="text-4xl my-5">
                <FaQuoteLeft className='mx-auto' />
            </p>
            <button className="btn bg-purple-500 text-white hover:text-black"
                onClick={
                    () => window.my_modal_5.showModal()
                }
            >Write a review</button>

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
                            {/* if there is a button in form, it will close the modal */}
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