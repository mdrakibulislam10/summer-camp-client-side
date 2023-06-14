import { Elements } from "@stripe/react-stripe-js";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    const location = useLocation();
    const price = parseFloat(location.state);
    // console.log(price);

    return (
        <section>
            <SectionTItle
                titleText={"Complete Your Purchase"}
            />

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        price={price}
                    />
                </Elements>
            </div>
        </section>
    );
};

export default Payment;