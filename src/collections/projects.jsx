import LMS from "../assets/projects/LMS.png";
import TES from "../assets/projects/TES.png";
import EMS from "../assets/projects/EMS.png";

// One entry per real project. `github` / `live` are optional —
// the card only renders a button when the URL is present.
export const data = [
  {
    id: 1,
    name: "Library Management System",
    path: LMS,
    description:
      "Catalogue, borrowing and return tracking for a school library, with search by title, author and ISBN.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "",
    live: "",
  },
  {
    id: 2,
    name: "Teacher Evaluation System",
    path: TES,
    description:
      "Questionnaire builder and evaluation portal that aggregates student ratings into per-teacher reports.",
    tech: ["PHP", "MySQL", "Chart.js"],
    github: "",
    live: "",
  },
  {
    id: 3,
    name: "Employee Management System",
    path: EMS,
    description:
      "Dashboard for projects, attendance and appointments with role-based access for staff and admins.",
    tech: ["Python", "Django", "PostgreSQL"],
    github: "",
    live: "",
  },
];
