import React from 'react'

const Skills = () => {
  const skills = [
    { name: "HTML", width: "w-[270px]" },
    { name: "CSS", width: "w-[250px]" },
    { name: "JavaScript", width: "w-[180px]" },
    { name: "Tailwind CSS", width: "w-[280px]" },
    { name: "React JS", width: "w-[240px]" },
  ];

  return (
    <div className="mt-12 px-6 sm:px-10 md:px-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">
          Best Skills On
        </h1>
        <div className="w-[120px] sm:w-[150px] h-[3px] bg-[#ff014f]" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-start">
            <p className="text-xl sm:text-2xl text-white font-bold">{skill.name}</p>
            <div className="border border-[#858d98] h-4 w-full max-w-[300px] mt-3 rounded-2xl">
              <div
                className={`bg-blue-800 h-[14px] ${skill.width} rounded-2xl`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
