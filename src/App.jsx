import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhyHireMe from "./pages/WhyHireMe";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WhyHireMe /> 
      <Contact />
      <ChatBot />  
    </div>
  );
}

export default App;
