import { useEffect, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiMysql } from "react-icons/si";
import profile from "../assets/profile.jpeg";

const roles = [
    "Software Developer",
    "Website Developer",
    "MERN Stack Developer",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 60 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing
                setDisplayText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                // deleting
                setDisplayText(currentRole.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                {/* LEFT */}
                <div>
                    <p className="text-blue-400 mb-2">Software Developer</p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hey! I'm <span className="text-blue-500">Hemlal</span>
                    </h1>

                    {/* 🔥 TYPING EFFECT */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 h-10">
                        A{" "}
                        <span className=" border-r-2  animate-pulse">
                            {displayText}
                        </span>
                    </h3>

                    <p className="text-gray-400 mb-6">
                        👋 Hi, I’m Hemlal Kumar, a passionate UI-focused Full Stack Web Developer with hands-on experience in building responsive and user-friendly web applications. <br />
                        🌐 I specialize in frontend and backend web development using modern technologies including HTML5, CSS3, JavaScript (ES6), React.js, Node.js, Express.js, Bootstrap, Tailwind CSS, and jQuery. <br />
                        🗄️ I have practical experience working with databases such as MongoDB and SQL, and I follow best practices using Git & GitHub for version control.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-400"
                        >
                            Check Project
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500 px-6 py-2 rounded hover:bg-blue-500"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center items-center">

                    {/* 🔵 OUTER GLOW RING */}
                    <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-30 blur-xl"></div>

                    {/* ⚫ DARK TECH CIRCLE */}
                    <div className="relative w-100 h-100 rounded-full flex items-center justify-center border border-blue-500">

                        {/* 🔵 ROTATING ICON CIRCLE */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-blue-500 animate-spin-slow">
                            <FaReact className="absolute -top-4 left-1/2 -translate-x-1/2 text-cyan-400 text-3xl" />
                            <SiJavascript className="absolute top-1/2 -right-4 -translate-y-1/2 text-yellow-400 text-3xl" />
                            <FaNodeJs className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-green-500 text-3xl" />
                            <SiMongodb className="absolute top-1/2 -left-4 -translate-y-1/2 text-green-600 text-3xl" />
                            <SiHtml5 className="absolute top-6 left-6 text-orange-500 text-2xl" />
                            <SiCss3 className="absolute bottom-6 right-6 text-blue-500 text-2xl" />
                            <SiTailwindcss className="absolute bottom-6 left-6 text-cyan-400 text-2xl" />
                            <SiMysql className="absolute top-6 right-6 text-blue-600 text-2xl" />
                        </div>

                        {/* 👤 PROFILE IMAGE */}
                        <img
                            src={profile}
                            alt="Hemlal Kumar"
                            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
