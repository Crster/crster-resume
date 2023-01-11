import React from "react";
import { BsDot } from "react-icons/bs";

function Skill({ className }) {
  const [skills] = React.useState([
    { name: "C#", level: "Proficient" },
    { name: "MAUI", level: "Novice" },
    { name: "NodeJS", level: "Proficient" },
    { name: "React", level: "Proficient" },
    { name: "VueJS", level: "Intermediate" },
    { name: "ExpressJS", level: "Proficient" },
    { name: "Mongodb", level: "Proficient" },
    { name: "MySQL", level: "Proficient" },
    { name: "Typescript", level: "Novice" },
    { name: "Java", level: "Novice" },
    { name: "Php", level: "Novice" }
  ]);

  const levelToColor = (level) => {
    switch (level) {
      case "Advanced": return "text-black";
      case "Proficient": return "text-gray-900";
      case "Intermediate": return "text-gray-500";
      default: return "text-gray-400";
    }
  }

  return (
    <div className={className}>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary">Skills</h2>
      <ul className="mt-3">
        {skills.map((ii, key) => (
          <li key={key} className="flex gap-2">
            <BsDot size={25} className="text-primary"/>
            <span className={levelToColor(ii.level)}>{ii.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
