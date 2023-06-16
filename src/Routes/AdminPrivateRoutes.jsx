import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const AdminPrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [userRole, , isUserLoading] = useUserRole();

    if (!user || loading || isUserLoading) {
        return <p className="text-center"><span className="loading loading-dots loading-md"></span></p>
    }
    if (user && userRole === "admin") {
        return children;
    }
};

export default AdminPrivateRoutes;
