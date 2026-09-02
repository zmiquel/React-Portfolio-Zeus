import { data } from "../collections/projects.jsx";
import { FaCode } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";

const Project = () => {
  return (
    <section
      name="projects"
      id="projects"
      className="w-full text-gray-300 bg-[#0f0f0f] py-24"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">
            Projects
          </p>
          <p className="py-4 text-gray-400">
            {"// Check out some of my recent work"}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-lg overflow-hidden bg-[#161616] border border-white/10
                         shadow-lg shadow-black/40 transition-all duration-300
                         hover:-translate-y-1.5 hover:border-green-600/60 hover:shadow-green-900/20"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={item.path}
                  alt={`${item.name} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top opacity-80
                             transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-4">
                  {item.tech.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] uppercase tracking-wider px-2 py-1 rounded
                                 bg-green-900/30 text-green-400 border border-green-800/50"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Only render a button when there is somewhere to go */}
                <div className="flex items-center gap-5 mt-5 pt-4 border-t border-white/10">
                  {item.github ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors"
                    >
                      <FaCode /> Code
                    </a>
                  ) : null}
                  {item.live ? (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                    >
                      <SlGlobe /> Live
                    </a>
                  ) : null}
                  {!item.github && !item.live ? (
                    <span className="text-xs text-gray-500 italic">
                      Source available on request
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
