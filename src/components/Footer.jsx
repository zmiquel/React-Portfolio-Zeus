import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { social } from "../collections/social.jsx";

const socials = [
  { label: "GitHub", href: social.github, Icon: FaGithub },
  { label: "LinkedIn", href: social.linkedin, Icon: FaLinkedin },
  { label: "Facebook", href: social.facebook, Icon: FaFacebook },
];

const Footer = () => (
  <footer className="w-full bg-black border-t border-white/10 text-gray-400 py-10">
    <div className="max-w-[1000px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-sm text-center sm:text-left">
        © {new Date().getFullYear()} Zeus Miguel Orilla. Built with React,
        Vite &amp; Tailwind.
      </p>

      <div className="flex items-center gap-5">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
        <a
          href={`mailto:${social.email}`}
          aria-label="Email"
          className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300"
        >
          <HiOutlineMail size={22} />
        </a>
      </div>

      <Link
        to="home"
        smooth={true}
        duration={600}
        className="text-sm cursor-pointer hover:text-green-400 transition-colors"
      >
        Back to top ↑
      </Link>
    </div>
  </footer>
);

export default Footer;
