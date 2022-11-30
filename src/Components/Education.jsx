import React from "react";

function Education() {
  const [educations] = React.useState([
    {
      school: "Digital Systems Institute",
      address: "Digos City, PH",
      date: "2010 - 2012",
      course: "Computer Programming NC 4",
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
      <h2 className="uppercase text-xl font-bold border-b-4 text-primary">
        Education
      </h2>
      {educations.map((ii) => (
        <div className="flex flex-col my-3">
          <span className="text-lg">{ii.date}</span>
          <span className="text-xl font-bold">{ii.school}</span>
          <span className="text-base">{ii.course}</span>
        </div>
      ))}
    </div>
  );
}

export default Education;
