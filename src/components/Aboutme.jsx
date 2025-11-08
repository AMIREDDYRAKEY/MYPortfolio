import React, { useState } from 'react'
import Myeducation from './Myeducation'
import Worke from './Work'
import Certifications from './Certifications'
const Aboutme = () => {
  const [Activetab, setActivetab] = useState("education")

  return (
    <div className="mt-10 px-4 sm:px-8 md:px-12">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-6 sm:mb-8">
        <h1 className="text-[#858d98] font-bold text-3xl sm:text-4xl">About Me</h1>
        <div className="w-[120px] sm:w-[150px] h-[3px] bg-[#ff014f] mt-2 sm:mt-0"></div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-[#202226] rounded-xl py-4 sm:py-5 px-4 sm:px-8 w-full sm:w-[90%] md:w-[75%] shadow-md shadow-[#111]">
          
          <button
            onClick={() => setActivetab('education')}
            className={`border border-[#858d98] px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              Activetab === 'education'
                ? 'bg-[#ff014f] text-black'
                : 'bg-[#1f2226] text-white hover:bg-[#ff014f] hover:text-black'
            }`}
          >
            My Education
          </button>

          <button
            onClick={() => setActivetab('work')}
            className={`border border-[#858d98] px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              Activetab === 'work'
                ? 'bg-[#ff014f] text-black'
                : 'bg-[#1f2226] text-white hover:bg-[#ff014f] hover:text-black'
            }`}
          >
            Work Experience
          </button>

          <button
            onClick={() => setActivetab('certifi')}
            className={`border border-[#858d98] px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              Activetab === 'certifi'
                ? 'bg-[#ff014f] text-black'
                : 'bg-[#1f2226] text-white hover:bg-[#ff014f] hover:text-black'
            }`}
          >
            Certifications
          </button>

          <button
            onClick={() => setActivetab('strength')}
            className={`border border-[#858d98] px-3 sm:px-5 py-2 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              Activetab === 'strength'
                ? 'bg-[#ff014f] text-black'
                : 'bg-[#1f2226] text-white hover:bg-[#ff014f] hover:text-black'
            }`}
          >
            Strength Beyond Tech
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8 sm:mt-10">
        {Activetab === 'education' && <Myeducation />}
        {Activetab === 'work' && <Worke />}
        {Activetab === 'certifi' && <Certifications/>}
        {Activetab === 'strength' && (
          <p className="text-white text-center text-sm sm:text-base">mmmm</p>
        )}
      </div>
    </div>
  )
}

export default Aboutme
