import hireVideo from "../assets/Intro.mp4";


const WhyHireMe = () => {
    return (
        <section id="whyhireme" className="py-20 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold text-center mb-6">
                Why Should You Hire Me?
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
                This short video explains my Intro, education,
                and why I am a good fit for your company.
            </p>

            <div className="flex justify-center px-2">
                <video
                    src={hireVideo}
                    controls
                    className="w-full max-w-sm rounded-lg border border-blue-500 shadow-lg "
                />

            </div>
        </section>
    );
};

export default WhyHireMe;
