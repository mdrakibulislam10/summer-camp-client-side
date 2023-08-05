import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PhotoBanner from "../PhotoBanner/PhotoBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner />

            <PhotoBanner />

            <PopularClasses />

            <PopularInstructors />

            <AboutUs />
        </div>
    );
};

export default Home;