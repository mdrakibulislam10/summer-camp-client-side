import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const StudentsPrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [userRole, , isUserLoading] = useUserRole();

    if (!user || loading || isUserLoading) {
        return <p className="text-center"><span className="loading loading-dots loading-md"></span></p>
    }
    if (user && userRole === "student") {
        return children;
    }
};

export default StudentsPrivateRoute;
