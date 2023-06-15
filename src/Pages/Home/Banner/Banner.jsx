import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import "./Banner.css";

const bannerImg = [
    "https://i.ibb.co/bm6TbY6/photo-1555597673-b21d5c935865.jpg",
    "https://i.ibb.co/bX7vftg/photo-1516684991026-4c3032a2b4fd.jpg",
    "https://i.ibb.co/FJ20kvp/how-martial-arts-enhances-youth-athletes-sports-performance.jpg",
];

const Banner = () => {
    return (
        <div className="mt-1">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                className="mySwiper"
            >
                <>
                    {
                        bannerImg.map((img, i) =>
                            <SwiperSlide key={i}>
                                <div className="relative">
                                    <img className="w-full h-56 sm:h-72 custom-height" src={img} alt="" />
                                    <div className="absolute top-1/4 left-8 sm:left-12 lg:top-1/3 lg:left-16">
                                        <p className="lg:text-8xl text-3xl sm:text-5xl text-sky-600 font-semibold">Unleash Your <br /> Inner Warrior</p>
                                        <p className="text-orange-600 sm:text-xl lg:text-3xl mt-4">At our Martial Arts Summer Camp!</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </>
            </Swiper>
        </div>
    );
};

export default Banner;