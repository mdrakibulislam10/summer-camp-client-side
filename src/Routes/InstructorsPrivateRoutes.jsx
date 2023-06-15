import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const InstructorsPrivateRoutes = ({ children }) => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    if (user && userRole === "instructor") {
        return children;
    }

    return "";
};

export default InstructorsPrivateRoutes;
