import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <a href="/">
                    <h1 className="text-3xl font-bold text-blue-500">
                        Hemlal
                    </h1>
                </a>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex gap-8 text-lg font-medium">
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    <li><a href="#whyhireme" className="hover:text-blue-400">Why Hire Me</a></li>
                </ul>

                {/* HAMBURGER BUTTON (MOBILE) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur">
                    <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                        <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
                        <li><a onClick={() => setIsOpen(false)} href="#skills">Skills</a></li>
                        <li><a onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
                        <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
                        <li><a onClick={() => setIsOpen(false)} href="#whyhireme">Why Hire Me</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
