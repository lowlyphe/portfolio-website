import React from "react";
import Typical from "react-typical";

const Technologies = () => {
  return (
    <div className="text-2xl flex flex-col md:flex-row md:justify-start">
      <p className="text-white">I build applications with:&nbsp;</p>
      <Typical
        className="text-purple"
        loop={Infinity}
        steps={[
          "Javascript",
          1000,
          "Node",
          1000,
          "React",
          1000,
          "PostgreSql",
          1000,
          "Python",
          1000,
          "TailwindCSS",
          1000,
          "jQuery",
          1000,
          "Java",
          1000,
          "RESTful APIs",
          1000,
          "NoSQL",
          1000,
          "Responsive Layouts",
          1000,
          "You in mind",
          1000,
        ]}
      />
    </div>
  );
};

export default Technologies;
