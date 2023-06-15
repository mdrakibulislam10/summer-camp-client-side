import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
// import axios from "axios";

const CheckoutForm = ({ price, selectClassForPay }) => {
    const { _id, availableSeats, classId, imgURL, instructorName, martialClassName, enrolled } = selectClassForPay;
    // console.log(selectClassForPay);

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    // console.log(price);
    const [axiosSecure] = useAxiosSecure();
    const [cardErr, setCardErr] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");

    // create payment intent
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        // console.log(card);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardErr(error.message);
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardErr("");
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "unknown",
                        name: user?.name || "anonymous",
                    },
                },
            }
        )

        if (confirmError) {
            // console.log(confirmError);
        }

        // console.log(paymentIntent);
        // console.log(selectClassForPay.enrolled);

        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);

            const newSeats = parseFloat(availableSeats) - 1;
            // console.log(newSeats);

            // Available seats for the particular Class will be reduced by 1 - classes collection
            axiosSecure.patch(`/class/seats/${classId}`, { newSeats })
                .then(res => {
                    if (res.data.modifiedCount) {
                        // console.log("updated");
                    }
                })

            // Available seats for the particular Class will be reduced by 1 - classes collection
            axiosSecure.patch(`/class/selected/seats/${classId}`, { newSeats })
                .then(res => {
                    if (res.data.modifiedCount) {
                        // console.log("updated selected");
                    }
                })

            // enrolled class increasing by 1
            const newEnrolled = parseFloat(enrolled) + 1;
            // console.log(newEnrolled);

            axiosSecure.patch(`/class/selected/enrolled/${classId}`, { newEnrolled })
                .then(res => {
                    if (res.data.modifiedCount) {
                        // console.log("updated enrolled");
                    }
                })

            // for post in class payment collection
            const paymentClass = {
                classId,
                email: user?.email,
                transactionId,
                price,
                date: new Date(),
                availableSeats: newSeats,
                imgURL,
                instructorName,
                martialClassName,
                enrolled: newEnrolled,
                status: "Service Pending",
            };

            // post payment class collection
            axiosSecure.post("/paymentsClass", paymentClass)
                .then(res => {
                    if (res.data.insertedId) {
                        // console.log("product added", res.data.insertedId);
                        swal("Payment successful. Your transactionId is:", transactionId);
                    }
                })

            // remove class from selected class
            axiosSecure.delete(`/class/selected/remove/${_id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        // console.log("deleted");
                    }
                })
        }

    };

    return (
        <div className="border p-3 rounded border-sky-500 md:w-3/4 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement className="border border-sky-500 rounded p-2"
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-md bg-sky-500 text-white mt-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;