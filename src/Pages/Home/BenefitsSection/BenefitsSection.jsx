import benefitImg from "../../../assets/ben-over.gif";
import SectionTItle from "../../../components/SectionTItle/SectionTItle";

const benefits = [
    {
        title: "INCREASED CONFIDENCE",
        bodyText: "Increased confidence is something that martial artists of all ages enjoy. Whether it's for you or your child, martial arts can help you improve your confidence.",
    },
    {
        title: "FULL BODY WORKOUT",
        bodyText: "Martial arts truly provide a full body workout. The consistent practice has shown to increase overall mobility, improve your body's pressure response, and increase muscle.",
    },
    {
        title: "INCREASED FLEXIBILITY",
        bodyText: "Repetitive movements like high kicks, low stances, fancy footwork, and ground maneuvering improve flexibility and mobility which will benefit your overall health.",
    },
    {
        title: "BETTER COORDINATION",
        bodyText: "All martial arts require spacial awareness and coordinating movement with another person. Some martial arts even include the use of props and tools.",
    },
    {
        title: "SELF DEFENSE SKILLS",
        bodyText: "One obvious benefit to learning martial arts is an improved ability to perform self-defense maneuvers in situations where there is a real threat.",
    },
];

const BenefitsSection = () => {
    return (
        <section>
            <SectionTItle
                titleText={"Benefits of Martial Arts"}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 mx-1 md:mx-20 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-semibold md:w-3/4 text-center mb-5">Top 5 Reasons to Learn Martial Arts</h1>

                    <div>
                        {
                            benefits.map((benefit, index) =>
                                <div key={index}>
                                    <div className="mb-5" data-aos="fade-right" data-aos-duration="1000">
                                        <h3 className="text-xl font-semibold text-orange-600">{index + 1}. {benefit.title}</h3>
                                        <p>{benefit.bodyText}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div>
                    <img src={benefitImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;