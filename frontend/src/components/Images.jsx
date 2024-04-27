import React from "react";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import psql from "../assets/psql.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import jquery from "../assets/jquery.png";
import mongodb from "../assets/mongodb.svg";
import rest from "../assets/rest.svg";
import phone from "../assets/phone.svg";

const Images = () => {
  const urls = [
    javascript,
    node,
    react,
    psql,
    python,
    tailwind,
    jquery,
    mongodb,
    rest,
    phone,
  ];

  return (
    <div className="flex absolute top-0 rotated">
      {urls.map((pic) => (
        <img src={pic} className="w-10" />
      ))}
    </div>
  );
};

export default Images;
