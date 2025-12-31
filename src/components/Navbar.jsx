const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/"><h1 className="text-3xl font-bold text-blue-500">Hemlal</h1></a>

                <ul className="hidden md:flex gap-8 text-lg text-bold">
                    <li><a href="#about" className="hover:text-blue-400">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    <li><a href="#whyhireme" className="hover:text-blue-400">Why Hire Me</a></li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
