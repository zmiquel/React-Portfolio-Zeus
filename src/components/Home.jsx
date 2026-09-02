import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { social } from "../collections/social.jsx";

const Home = () => {
  return (
    <section
      name="home"
      id="home"
      className="relative w-full min-h-screen bg-[#000000]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)),url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center min-h-screen">
        <p className="text-green-400 tracking-widest text-sm uppercase">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#d0f6cc] mt-2">
          MIGUEL ORILLA
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8fb088] mt-1">
          I&apos;m a Web Developer.
        </h2>
        <p className="text-gray-400 py-6 max-w-[640px] leading-relaxed">
          I&apos;m your down-to-earth full-stack web developer. No flashy
          landing pages, just a few modest projects I&apos;ve worked on.
          Picture me cloning websites and putting together some CRUD apps from
          scratch — just keeping it real.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="projects" smooth={true} duration={800} offset={-80}>
            <button
              className="text-white group px-6 py-3 flex items-center bg-green-600 border border-green-600
                         rounded hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/40 transition-all duration-300"
            >
              See my Projects
              <span className="group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={800} offset={-80}>
            <button
              className="text-gray-200 group px-6 py-3 flex items-center rounded border border-gray-600
                         hover:border-green-500 hover:text-green-400 transition-all duration-300"
            >
              Get in touch
              <span className="group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-6 mt-10 text-gray-400">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
          >
            <HiOutlineMail size={26} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        to="about"
        smooth={true}
        duration={600}
        offset={-80}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center
                   text-gray-500 hover:text-green-400 cursor-pointer transition-colors"
        aria-label="Scroll to About"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <span className="w-[1px] h-10 bg-current animate-pulse" />
      </Link>
    </section>
  );
};

export default Home;
