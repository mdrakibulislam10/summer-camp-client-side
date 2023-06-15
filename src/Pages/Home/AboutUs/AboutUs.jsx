import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const AboutUs = () => {
    return (
        <section className="mb-12">
            <SectionTItle
                titleText={"About Us"}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-1 lg:ms-12 gap-2 items-center">
                <div>
                    <img className="border-sky-500 border-4 rounded-sm" src="https://i.ibb.co/4fqJCxH/taekwondo-students-karate-classes-martial-arts.jpg" alt="" />
                </div>

                <div className="bg-purple-200 py-10 px-6 rounded-sm shadow-lg h-full">
                    <h2 className="text-2xl md:text-4xl font-bold mb-3">BEST MARTIAL ARTS SUMMER CAMP IN THIS TIME</h2>
                    <p className="text-lg font-semibold">Discover the Power Within, Develop Skills, and Create Lasting Memories at our Martial Arts Summer Camp</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-white rounded-lg p-4">
                            <h3 className="flex items-center gap-1 text-lg text-pink-600"><svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.293-6.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L10 11.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> <span>Our Instructors</span></h3>
                            <p className="text-gray-800">We have a team of highly qualified and experienced instructors who are dedicated to providing quality training.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <h3 className="flex items-center gap-1 text-lg text-pink-600"><svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.293-6.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L10 11.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> <span>Quality Equipment</span></h3>
                            <p className="text-gray-800">We provide state-of-the-art equipment that is regularly maintained to ensure a smooth and effective learning experience.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <h3 className="flex items-center gap-1 text-lg text-pink-600"><svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.293-6.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L10 11.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> <span>Affordable Pricing</span></h3>
                            <p className="text-gray-800">We offer competitive and affordable pricing options to make our training accessible to a wide range of individuals.</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <h3 className="flex items-center gap-1 text-lg text-pink-600"><svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.293-6.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L10 11.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> <span>Convenient Locations</span></h3>
                            <p className="text-gray-800">We have multiple locations conveniently situated to serve our students, making it easy to attend classes.</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutUs;