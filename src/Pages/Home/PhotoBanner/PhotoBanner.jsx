import { Link } from "react-router-dom";
import photoBannerImg from "../../../assets/photo-banner-img.jpg";

const PhotoBanner = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${photoBannerImg})` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold text-orange-600">Explore our website and purchase a class</h1>
                        <Link to={"classes"}>
                            <button className="btn hover:text-black border-orange-600">All Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoBanner;