import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
// import profileImg from "../assets/profile.jpeg";  
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center">

        
        <div className="text-center md:text-left flex flex-col items-center md:items-start">

          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I’m <span className="text-white font-semibold">Hemlal Kumar</span>, a
            UI-focused <span className="text-blue-400">MERN Full Stack Web Developer</span>{" "}
            passionate about building responsive, scalable, and user-friendly web
            applications.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I work with modern technologies like React.js, Node.js, Express.js, and
            MongoDB to create real-world projects such as an Airbnb Clone and an
            E-commerce web application. I enjoy transforming ideas into clean,
            functional, and visually appealing digital experiences.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 w-full max-w-md">
            <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
              <FaReact className="text-cyan-400 text-3xl mx-auto mb-2" />
              <p className="text-sm">React.js</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
              <FaNodeJs className="text-green-400 text-3xl mx-auto mb-2" />
              <p className="text-sm">Node.js</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
              <FaDatabase className="text-yellow-400 text-3xl mx-auto mb-2" />
              <p className="text-sm">MongoDB</p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full mt-4"
          >
            View My Projects
          </a>
        </div>

        {/* <div className="flex justify-center">
          <img
            src={profileImg}   
            alt="Hemlal Kumar"
            className="w-80 h-80 object-cover rounded-full border-4 border-blue-600 shadow-lg"
          /> 
        </div> */}
      </div>
    </section>
  );
};

export default About;
