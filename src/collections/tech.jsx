import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaPhp,
  FaNode,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Each group is one rotating column: [name, IconComponent, positionClass].
// The position classes are what LogoRotating cycles to animate the flip.
export const data = [
  [
    ["Bootstrap", FaBootstrap, "hide to-top"],
    ["CSS", FaCss3Alt, ""],
    ["Tailwind", SiTailwindcss, "hide to-bottom"],
  ],
  [
    ["Mysql", FaDatabase, "hide to-top"],
    ["PHP", FaPhp, ""],
    ["MongoDB", FaDatabase, "hide to-bottom"],
  ],
  [
    ["ExpressJS", FaNode, "hide to-top"],
    ["Javascript", FaJs, ""],
    ["ReactJs", FaReact, "hide to-bottom"],
  ],
];
