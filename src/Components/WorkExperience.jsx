import React from "react";

function WorkExperience() {
  const [experiences] = React.useState([
    {
      project: "Replen Dashboard",
      company: "Four13 Group",
      date: "2021 - 2022",
      skills: ["React"],
      description:
        "An amazon seller tools that provide buying decision based on user data.",
    },
    {
      project: "COI Tracker",
      company: "Four13 Group",
      date: "2021 - 2022",
      skills: ["React"],
      description:
        "An amazon seller tools that provide buying decision based on user data.",
    },
  ]);

  return (
    <div>
      <h2 className="uppercase font-bold border-b-4">Work Experience</h2>
      {experiences.map((ii) => (
        <div className="flex flex-col my-3">
          <span className="text-lg">{ii.date}</span>
          <span className="text-xl font-bold">{ii.project}</span>
          <span className="text-base">{ii.company}</span>
          <p className="mt-3">{ii.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
