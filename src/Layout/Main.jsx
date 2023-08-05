import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Main = () => {

    useEffect(() => {
        AOS.init();
    });

    return (
        <section>
            <Navbar />

            <Outlet />

            <Footer />
        </section>
    );
};

export default Main;