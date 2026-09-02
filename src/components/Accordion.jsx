import { useState } from "react";

const Accordion = ({ title, content, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="mb-3 rounded-md overflow-hidden border border-white/10">
      <button
        type="button"
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center bg-[#1b1b1b] p-4 text-left
                   cursor-pointer hover:bg-[#222] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        <svg
          className={`w-5 h-5 text-green-500 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-4 text-gray-400 bg-[#141414] leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
