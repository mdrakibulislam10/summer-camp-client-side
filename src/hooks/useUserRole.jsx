import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserRole = () => {
    const { user, loading } = useAuth();
    const email = user?.email;

    const { data: userRole = "", isLoading: isUserLoading, refetch } = useQuery({
        queryKey: ["userRole", email],
        enabled: !!localStorage.getItem("access-token") && !!user?.email,
        queryFn: async () => {
            // When we use axiosSecure we will be taken to the login page for the first time
            const res = await axios.get(`https://summer-camp-server-side-mu.vercel.app/userRole?email=${email}`);

            return res.data;
        }
    })
    return [userRole, refetch, isUserLoading];
};

export default useUserRole;