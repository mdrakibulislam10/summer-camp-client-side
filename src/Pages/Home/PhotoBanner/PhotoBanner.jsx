import { Link } from "react-router-dom";
import photoBannerImg from "../../../assets/photo-banner-img.jpg";

const PhotoBanner = () => {
    return (
        <section className="">
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${photoBannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Explore our website and purchase a course</h1>
                        <Link to={"classes"}>
                            <button className="btn bg-orange-600 hover:text-black text-white border-0">All Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoBanner;