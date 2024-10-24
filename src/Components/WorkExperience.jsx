import React from "react";

function WorkExperience({ className }) {
  const [experiences] = React.useState([
    {
      project: "Metasimz Backend",
      company: "Metasimz - Quebec, CA (Remote)",
      link: "https://metasimz.com/",
      date: "2022 - 2024",
      skills: ["NextJS", "DynamoDb", "Gamelift", "Tailwind Css"],
      description:
        "Metasimz is an startup company specializing in developing innovative virtual reality and mobile gaming experience.",
    },
    {
      project: "Replen Dashboard",
      company: "Four13 Group - Minnesota, US (Remote)",
      link: "https://www.replendashboard.com/",
      date: "2021 - 2022",
      skills: ["React", "SP-API", "Express JS", "Mongodb"],
      description:
        "Replen Dashboard accurately tracks product movement and trends to help you with buying decisions and inventory projections.",
    },
    {
      project: "COI Tracker",
      company: "Four13 Group - Minnesota, US (Remote)",
      link: "https://coitracker.com/",
      date: "2019 - 2020",
      skills: ["React", "AWS Lambda", "GraphQL", "OpenCV", "Java"],
      description:
        "Powerful certificate tracking system that scans, reads, captures and organizes document automatically",
    },
    {
      project: "OpenTask",
      company: "posBang - Davao City, PH",
      link: "http://www.opentask.co.kr/",
      date: "2018 - 2019",
      skills: ["Java", "Spring Boot", "Electron JS", "MySQL"],
      description:
        "Opentask is a global collaborative service that enable business collaborations even when using different languages. Built-in project boards and work messenger for collaboration are basically provided.",
    },
    {
      project: "Claro ERP",
      company: "360 Logix - Manila, PH",
      link: "https://www.360logix.com/project/claropos",
      date: "2016 - 2018",
      skills: ["C#", "Express JS", "WPF", "MySQL"],
      description:
        "A multi-tenant POS system that allows multiple businesses to share the same infrastructure and resources for inventory management, sales reporting and more.",
    },
    {
      project: "KryptonPOS",
      company: "21POS - Davao City, PH",
      link: "https://www.posbang.com/product/krypton-pos/",
      date: "2013 - 2018",
      skills: ["C#", "WinForm", "Codeigniter", "MySQL"],
      description:
        "Maintained desktop point of sale system for restaurants and shops. Conduct onsite customer training and remote troubleshooting.",
    },
    {
      project: "DCWC System",
      company: "Davao Central Warehouse Club - Davao City, PH",
      link: "https://www.facebook.com/CentralWarehouseClubOfficial/",
      date: "2012 - 2013",
      skills: ["VB6", "Crystal Report", "Biometric Device", "MySQL"],
      description:
        "Maintaining company in-house management system. Create automated payroll reports and employee data logging software.",
    },
  ]);

  return (
    <div className={className}>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary mb-3">Work Experience</h2>
      {experiences.map((ii, key) => (
        <div key={key} className="flex flex-col mb-6">
          <span className="text-sm">{ii.date}</span>
          <div><a href={ii.link}><span className="text-lg font-bold text-primary">{ii.project}</span></a></div>
          <span>{ii.company}</span>
          <p className="mt-3 text-sm">{ii.description}</p>
          <div className="flex gap-1">
            {ii.skills.map((iii, key2) => (
              <span key={key2} className="bg-gray-200 text-gray-500 text-xs rounded px-1">{iii}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
