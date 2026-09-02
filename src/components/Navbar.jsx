import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { social } from "../collections/social.jsx";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);

  // Solidify the bar once the user leaves the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Never leave the page locked behind an open mobile menu
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  return (
    <header
      className={`fixed top-0 w-full h-[80px] flex justify-between items-center px-4 sm:px-8 text-gray-300 z-50 transition-colors duration-300 ${
        scrolled || nav
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <img
          src={Logo}
          alt="Zeus Miguel Orilla logo"
          className="w-[150px] sm:w-[200px]"
        />
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {links.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-green-400"
                className="cursor-pointer py-2 transition-colors hover:text-green-400"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pl-6">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-green-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        onClick={handleClick}
        aria-label={nav ? "Close menu" : "Open menu"}
        aria-expanded={nav}
        className="md:hidden z-50 text-gray-200 p-2 -mr-2"
      >
        {!nav ? <FaBars size={26} /> : <FaTimes size={26} />}
      </button>

      {/* Mobile menu */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } md:hidden absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex-col justify-center items-center`}
      >
        {links.map(({ id, label }) => (
          <li key={id} className="py-6 text-4xl">
            <Link
              onClick={closeNav}
              to={id}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-green-400 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="flex gap-8 pt-8">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a href={`mailto:${social.email}`} aria-label="Email">
            <HiOutlineMail size={28} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
