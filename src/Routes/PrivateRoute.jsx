import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (!user || loading) {
        return <p className="text-center"><span className="loading loading-dots loading-md"></span></p>
    }

    return children;
};

export default PrivateRoute;