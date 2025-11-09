import React from 'react';
import htmlLogo from '../assets/HTML5.png';
import cssLogo from '../assets/CSS3.png';
import jsLogo from '../assets/javaScript.png';
import tailwindLogo from '../assets/Tailwind.png';
import reactLogo from '../assets/React.png';
import Reduxlogo from "../assets/Redux.png"
const Skills = () => {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "Tailwind CSS", img: tailwindLogo },
    { name: "React JS", img: reactLogo },
    { name: "Redux", img: Reduxlogo },
  ];

  return (
    <div className="mt-12 px-6 sm:px-10 md:px-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">
          My Skills
        </h1>
        <div className="w-[120px] sm:w-[150px] h-[3px] bg-[#ff014f]" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10 justify-items-center">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-white font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
