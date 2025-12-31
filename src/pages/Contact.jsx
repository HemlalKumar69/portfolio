import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* LEFT SIDE – CONTACT FORM */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent border border-blue-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-transparent border border-blue-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 text-gray-400">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Feel free to type your message..."
                                className="w-full bg-transparent border border-blue-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full"
                        >
                            Send ✈️
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE – CONTACT DETAILS */}
                <div className="space-y-6 flex flex-col justify-center">

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-full">
                            <FaEnvelope />
                        </div>
                        <p>kumarhemlal71@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-full">
                            <FaPhoneAlt />
                        </div>
                        <p>+91 7320817939</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-blue-600 p-3 rounded-full">
                            <FaMapMarkerAlt />
                        </div>
                        <p>Indore MP, India</p>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/HemlalKumar69"
                            target="_blank"
                            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hemlal-kumar8969"
                            target="_blank"
                            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
