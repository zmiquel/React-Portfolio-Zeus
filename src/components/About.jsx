import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Accordion from "./Accordion";
import { social } from "../collections/social.jsx";

const follow = [
  { label: "Linkedin", href: social.linkedin, Icon: FaLinkedin },
  { label: "Github", href: social.github, Icon: FaGithub },
  { label: "Facebook", href: social.facebook, Icon: FaFacebook },
];

const About = () => {
  return (
    <section
      name="about"
      id="about"
      className="w-full bg-[#0f0f0f] text-gray-300 py-24"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            About
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div className="text-2xl sm:text-3xl font-bold leading-snug">
            <p>
              Hi. I&apos;m Zeus Miguel Orilla, nice to meet you. Please take a
              look around.
            </p>
          </div>
          <div>
            <p className="leading-relaxed text-gray-400">
              My journey involves crafting digital solutions, ranging from
              personal projects to collaborative efforts, with the aim of making
              a positive impact. I thrive on challenges, love turning ideas into
              reality, and I&apos;m eager to contribute my skills to diverse and
              exciting projects. Let&apos;s embark on this journey together!
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-gray-200 mb-4 mt-6 font-bold">
              What Sets Me Apart
            </h3>
            <Accordion
              title="Eager Learner"
              content="Passion fuels my journey. I'm diving headfirst into the world of CRUD applications and website cloning, eagerly absorbing every bit of knowledge to enhance my skills."
            />
            <Accordion
              title="Collaboration Fueled"
              content="During college, I collaborated on a dynamic system with enthusiastic peers. Our teamwork resulted in innovative solutions, sparking my passion for collaborative projects. Excited to bring this energy to new endeavors!"
            />
            <Accordion
              title="Adaptability"
              content="As a recent graduate, I bring adaptability and a fresh perspective. Every project is an opportunity to learn, innovate, and make a positive impact."
              open={true}
            />
          </div>

          <div>
            <h3 className="text-2xl text-gray-200 mb-4 mt-6 font-bold">
              My Vision
            </h3>
            <p className="leading-relaxed text-gray-400">
              Imagine having a dedicated and motivated developer ready to take
              on challenges, transform ideas into reality, and contribute to
              innovative projects. My commitment is to continuous improvement,
              ensuring I evolve alongside the dynamic field of web development.
            </p>

            <h3 className="text-2xl text-green-500 mb-4 mt-8 font-bold">
              Follow Me On
            </h3>
            <div className="flex flex-col gap-3">
              {follow.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center w-fit text-gray-300 hover:text-green-400
                             hover:translate-x-1 transition-all duration-300"
                >
                  <span className="mr-3">
                    <Icon size={26} />
                  </span>
                  <span className="font-bold">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
