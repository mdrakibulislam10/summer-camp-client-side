import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const StudentsPrivateRoute = ({ children }) => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    if (user && userRole === "student") {
        return children;
    }

    return "";
};

export default StudentsPrivateRoute;
