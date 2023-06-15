import { Elements } from "@stripe/react-stripe-js";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
    const location = useLocation();
    const selectClassForPay = location.state;
    // console.log(selectClassForPay.price);
    const price = parseFloat(selectClassForPay?.price);

    return (
        <section>
            <SectionTItle
                titleText={"Complete Your Purchase"}
            />

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        price={price}
                        selectClassForPay={selectClassForPay}
                    />
                </Elements>
            </div>
        </section>
    );
};

export default Payment;