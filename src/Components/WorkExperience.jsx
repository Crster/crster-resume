import React from "react";

function WorkExperience() {
  const [experiences] = React.useState([
    {
      project: "Replen Dashboard",
      company: "Four13 Group - Minnesota, US (Remote)",
      date: "2021 - 2022",
      skills: ["React", "SP-API", "Express JS", "Mongodb"],
      description:
        "A tool used by Amazon sellers to manage inventories and recommend purchases.",
    },
    {
      project: "COI Tracker",
      company: "Four13 Group - Minnesota, US (Remote)",
      date: "2019 - 2020",
      skills: ["React", "AWS Lambda", "GraphQL", "OpenCV", "Java"],
      description:
        "Convert Certificate of Insurance scanned image to text then notify the user of expired or non-compliance certificates.",
    },
    {
      project: "OpenTask",
      company: "posBang - Davao City, PH",
      date: "2018 - 2019",
      skills: ["Java", "Spring Boot", "Electron JS", "MySQL"],
      description:
        "Maintain existing API server. Apply bug fixes to our android and desktop chat application.",
    },
    {
      project: "Claro ERP",
      company: "360 Logix - Manila, PH",
      date: "2016 - 2018",
      skills: ["C#", "Express JS", "Xaml", "MySQL"],
      description:
        "Create a multi-store consolidated report, the licensing admin page, and DataSync.",
    },
    {
      project: "KryptonPOS",
      company: "21POS - Davao City, PH",
      date: "2013 - 2018",
      skills: ["C#", "socket.io", "winform", "MySQL"],
      description:
        "Maintained desktop point of sale system for restaurants and shops. Conduct onsite customer training and remote troubleshooting.",
    },
    {
      project: "DCWC System",
      company: "Davao Central Warehouse Club - Davao City, PH",
      date: "2012 - 2013",
      skills: ["VB6", "Crystal Report", "Biometric Device", "MySQL"],
      description:
        "Maintaining company in-house management system. Create automated payroll reports and employee data logging software.",
    },
  ]);

  return (
    <div>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary">Work Experience</h2>
      {experiences.map((ii) => (
        <div className="flex flex-col my-3">
          <span>{ii.date}</span>
          <span className="text-lg font-bold text-primary">{ii.project}</span>
          <span>{ii.company}</span>
          <p className="mt-3">{ii.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
