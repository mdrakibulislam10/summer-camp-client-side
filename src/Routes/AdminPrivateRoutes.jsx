import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const AdminPrivateRoutes = ({ children }) => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    if (user && userRole === "admin") {
        return children;
    }

    return "";
};

export default AdminPrivateRoutes;
