import singleImg from "../../../assets/single-img.jpg";
const SingleImgBanner = () => {
    return (
        <section className="lg:px-48 mt-20">
            <div className="hero min-h-screen bg-cover lg:rounded" style={{ backgroundImage: `url(${singleImg})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h2 className="mb-5 text-4xl md:text-5xl font-bold text-purple-600">Everyone needs to learn martial art for self-defense.</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleImgBanner;