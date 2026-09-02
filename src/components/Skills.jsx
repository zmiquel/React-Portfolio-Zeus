import { data } from "../collections/skills.jsx";

const Skills = () => {
  return (
    <section
      name="skills"
      id="skills"
      className="w-full bg-[#0f0f0f] py-24"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full">
        <div className="text-gray-300 pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Skills
          </p>
          <p className="py-4 text-gray-400">
            {"// These are the technologies I've explored and utilized"}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center py-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-lg bg-[#161616] border border-white/10
                         hover:border-green-600/60 hover:-translate-y-1.5
                         hover:shadow-lg hover:shadow-green-900/20
                         transition-all duration-300"
            >
              <img
                className="w-[4.5rem] h-[4.5rem] object-contain mx-auto
                           transition-transform duration-300 group-hover:scale-110"
                src={item.path}
                alt={`${item.name} logo`}
                loading="lazy"
              />
              <p className="mt-4 text-sm font-semibold tracking-wide text-gray-300 group-hover:text-green-400 transition-colors">
                {item.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
