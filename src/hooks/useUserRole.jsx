import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUserRole = () => {
    const { user } = useAuth();
    const email = user?.email;

    const { data: userRole = "", refetch } = useQuery({
        queryKey: ["userRole", email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/userRole?email=${email}`);
            return res.data;
        }
    })
    return [userRole, refetch];
};

export default useUserRole;