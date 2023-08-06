import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import ClientsReview from "../ClientsReview/ClientsReview";
import ExtraInfoCard from "../ExtraInfoCard/ExtraInfoCard";
import PhotoBanner from "../PhotoBanner/PhotoBanner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import SingleImgBanner from "../SingleImgBanner/SingleImgBanner";

const Home = () => {
    return (
        <div>
            <Banner />

            <PhotoBanner />

            <SingleImgBanner />

            <PopularClasses />

            <PopularInstructors />

            <BenefitsSection />

            <AboutUs />

            <ClientsReview />

            <ExtraInfoCard />
        </div>
    );
};

export default Home;