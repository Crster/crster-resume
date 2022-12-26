import React from "react";

function Education() {
  const [educations] = React.useState([
    {
      school: "Digital Systems Institute",
      address: "Digos City, PH",
      date: "2010 - 2012",
      course: "Computer Programming NC IV",
    },
    {
      school: "Notre Dame University",
      address: "Cotabato City, PH",
      date: "2009 - 2010",
      course: "Computer Engineering (Undergraduate)",
    },
  ]);

  return (
    <div>
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary mb-3">
        Education
      </h2>
      {educations.map((ii) => (
        <div className="flex flex-col mb-6">
          <span>{ii.date}</span>
          <span className="text-lg font-bold text-primary">{ii.school}</span>
          <span>{ii.course}</span>
        </div>
      ))}
    </div>
  );
}

export default Education;
