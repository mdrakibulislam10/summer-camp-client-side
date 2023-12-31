import { useQuery } from "@tanstack/react-query";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ["paymentHistory", user?.email],
        enabled: !!localStorage.getItem("access-token") && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`);
            return res.data;
        },
    });
    // console.log(paymentHistory);

    return (
        <section>
            <SectionTItle
                titleText={"Payment History"}
            />

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class name</th>
                                <th>Price</th>
                                <th>User email</th>
                                <th>Transaction Id</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((martialClass, i) =>
                                    <tr key={martialClass._id}>
                                        <th>{i + 1}</th>
                                        <td>{martialClass?.martialClassName}</td>
                                        <td>{martialClass?.price}</td>
                                        <td>{martialClass?.email}</td>
                                        <td>{martialClass?.transactionId}</td>
                                        <td>{martialClass?.date.split("T").join(" -- ").split("Z").shift()}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default PaymentHistory;