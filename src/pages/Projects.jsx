import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "E-Commerce Web Application",
        description:
            "E-commerce platform with product listing, cart, checkout flow, and admin-level product management.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
        github: "https://github.com/HemlalKumar69/E-commerce-Webpage",
        live: "#",
    },
    {
        title: "Airbnb Clone (Full Stack)",
        description:
            "A full-stack Airbnb clone with user authentication, property listings, booking system, and responsive UI.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        github: "https://github.com/HemlalKumar69/airbnb-Clone",
        live: "#",
    },
    {
        title: "Personal Portfolio Website",
        description:
            "A modern and responsive personal portfolio showcasing skills, projects, and contact information.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/HemlalKumar69/portfolio",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
                    >
                        <h3 className="text-xl font-semibold mb-3">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="flex items-center gap-2 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                            >
                                <FaGithub /> Code
                            </a>

                            <a
                                href={project.live}
                                target="_blank"
                                className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
