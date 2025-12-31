import { useEffect, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiJavascript,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiMysql,
} from "react-icons/si";
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
        const speed = isDeleting ? 60 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setDisplayText(currentRole.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className="min-h-screen flex items-center pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-6">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <p className="text-blue-400 mb-2">Software Developer</p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Hey! I'm <span className="text-blue-500">Hemlal</span>
                    </h1>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 h-10">
                        A{" "}
                        <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
                            {displayText}
                        </span>
                    </h3>

                    <p className="text-gray-400 mb-6">
                        👋 Hi, I’m Hemlal Kumar, a UI-focused Full Stack Web Developer.
                        I build responsive, scalable, and user-friendly web applications
                        using modern technologies like React, Node.js, MongoDB, and SQL.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-400"
                        >
                            Check Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500 px-6 py-2 rounded hover:bg-blue-500"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center mt-12 md:mt-0">

                    {/* GLOW */}
                    <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]
            rounded-full via-cyan-400 to-blue-600 opacity-30 blur-xl">
                    </div>

                    {/* MAIN CIRCLE */}
                    <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]
            rounded-full flex items-center justify-center border border-blue-500">

                        {/* ROTATING ICONS */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-blue-500 animate-spin-slow">
                            <FaReact className="absolute -top-3 left-1/2 -translate-x-1/2 text-cyan-400 text-xl sm:text-2xl" />
                            <SiJavascript className="absolute top-1/2 -right-3 -translate-y-1/2 text-yellow-400 text-xl sm:text-2xl" />
                            <FaNodeJs className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-green-500 text-xl sm:text-2xl" />
                            <SiMongodb className="absolute top-1/2 -left-3 -translate-y-1/2 text-green-600 text-xl sm:text-2xl" />
                            <SiHtml5 className="absolute top-6 left-6 text-orange-500 text-lg" />
                            <SiCss3 className="absolute bottom-6 right-6 text-blue-500 text-lg" />
                            <SiTailwindcss className="absolute bottom-6 left-6 text-cyan-400 text-lg" />
                            <SiMysql className="absolute top-6 right-6 text-blue-600 text-lg" />
                        </div>

                        {/* PROFILE IMAGE */}
                        <img
                            src={profile}
                            alt="Hemlal Kumar"
                            className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px]
                rounded-full object-cover border-4 border-blue-500 shadow-2xl z-10"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
