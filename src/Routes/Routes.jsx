import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../Pages/DashboardPage/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashboardPage/ManageUsers/ManageUsers";
import AddClass from "../Pages/DashboardPage/AddClass/AddClass";
import MyClasses from "../Pages/DashboardPage/MyClasses/MyClasses";
import MySelectedClasses from "../Pages/DashboardPage/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/DashboardPage/myEnrolledClasses/myEnrolledClasses";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import Payment from "../Pages/DashboardPage/Payment/Payment";
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory/PaymentHistory";
import InstructorsPage from "../Pages/InstructorsPage/InstructorsPage";
import StudentsPrivateRoute from "./StudentsPrivateRoute";
import InstructorsPrivateRoutes from "./InstructorsPrivateRoutes";
import AdminPrivateRoutes from "./AdminPrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "classes",
                element: <ClassesPage />
            },
            {
                path: "instructors",
                element: <InstructorsPage />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            // admin routes
            {
                // path: "/dashboard/manage-classes"
                path: "manage-classes",
                element: <AdminPrivateRoutes> <ManageClasses /> </AdminPrivateRoutes>
            },
            {
                path: "manage-users",
                element: <AdminPrivateRoutes> <ManageUsers /> </AdminPrivateRoutes>
            },
            // instructor routes
            {
                path: "add-class",
                element: <InstructorsPrivateRoutes> <AddClass /> </InstructorsPrivateRoutes>
            },
            {
                path: "my-classes",
                element: <InstructorsPrivateRoutes> <MyClasses /> </InstructorsPrivateRoutes>
            },
            // student routes
            {
                path: "my-selected-classes",
                element: <StudentsPrivateRoute> <MySelectedClasses /> </StudentsPrivateRoute>
            },
            {
                path: "my-enrolled-classes",
                element: <StudentsPrivateRoute>  <MyEnrolledClasses /> </StudentsPrivateRoute>
            },
            {
                path: "payment",
                element: <Payment />
            },
            {
                path: "payment-history",
                element: <StudentsPrivateRoute> <PaymentHistory /> </StudentsPrivateRoute>
            }
        ]
    },
]);

export default router;