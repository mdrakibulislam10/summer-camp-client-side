import { Navigate, createBrowserRouter } from "react-router-dom";
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
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            // admin routes
            {
                // path: "/dashboard/manage-classes"
                path: "manage-classes",
                element: <ManageClasses /> // TODO: admin verify;
            },
            {
                path: "manage-users",
                element: <ManageUsers />
            },
            // instructor routes
            {
                path: "add-class",
                element: <AddClass /> // TODO: inst verify;
            },
            {
                path: "my-classes",
                element: <MyClasses />
            },
        ]
    },
]);

export default router;