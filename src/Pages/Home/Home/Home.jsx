import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner />

            <PopularClasses />

            <PopularInstructors />

            <AboutUs />
        </div>
    );
};

export default Home;