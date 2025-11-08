import React from 'react'

const Work = () => {
  return (
    <div className="flex justify-center items-center mt-[30px]">
      <div className="border-[1px] h-auto w-[80%] border-[#858d98] rounded-2xl p-6 text-white">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="space-y-6 mt-5">
          <div className="border-l-4 border-blue-400 pl-4">
            <div className="text-xl  font-bold ">Intern At Techbuggy</div>
             <p className="mt-1 font-semibold text-gray-400">
              JULY 19,2024 To Present (PartTime)
            </p>
            <p className="text-gray-400 font-semibold"><strong>Role:</strong> Frontend Developer</p>
            <p className="mt-1 font-semibold text-gray-400">
              Mode:Remote
            </p>
            <p className="text-gray-400 "><strong>TechStack:</strong>HTML,CSS,JAVASCRIPT,REACT JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work