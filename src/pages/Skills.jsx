import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
];

const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-14">
                Skills
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                {/* Frontend Skills */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Frontend
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                        {frontendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg hover:scale-105 transition"
                            >
                                <span className="text-3xl">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Backend
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                        {backendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg hover:scale-105 transition"
                            >
                                <span className="text-3xl">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
