import React from "react";
import { BsDot } from "react-icons/bs";

function Skill() {
  const [skills] = React.useState([
    { name: "C#", level: "Proficient" },
    { name: "NodeJS", level: "Proficient" },
    { name: "React", level: "Proficient" },
    { name: "Java", level: "Novice" },
    { name: "Php", level: "Novice" },
    { name: "Express JS", level: "Proficient" },
    { name: "Mongodb", level: "Proficient" },
    { name: "MySQL", level: "Proficient" },
  ]);

  return (
    <div>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary">Skills</h2>
      <ul className="mt-3">
        {skills.map((ii) => (
          <li className="flex gap-2">
            <BsDot size={25} className="text-primary"/>
            <span>{ii.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skill;
