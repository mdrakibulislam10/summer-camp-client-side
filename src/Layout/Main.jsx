import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <section>
            <Navbar />

            <Outlet />
        </section>
    );
};

export default Main;