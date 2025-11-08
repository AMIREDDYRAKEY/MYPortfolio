import React, { useState } from 'react'
import Myeducation from './Myeducation'
import Worke from './Work'

const Aboutme = () => {
  const [Activetab, setActivetab] = useState("education")

  return (
    <div>
      <div className="mt-[20px] ">
        <div className='flex ml-[40px] items-center gap-3'>
          <h1 className='text-[#858d98] font-bold text-[40px]'>About Me</h1>
          <div className='w-[150px] mt-[6px] h-[2px] bg-[#ff014f]'></div>
        </div>

        {/* Tabs */}
        <div className='flex justify-center'>
          <div className='flex justify-center rounded-xl items-center gap-9 mt-[20px] bg-[#202226] h-[100px] w-[70%] shadow-md shadow-[#111]'>
            
            <div className={`border-[0.5px] border-[#858d98] px-4 py-2 text-[#ffff] font-semibold bg-[#1f2226] rounded-lg shadow-2xl shadow-[#212428] ${Activetab === 'education' ? "bg-[#ff014f] text-black":""}  `}>
              <button onClick={() => setActivetab('education')}>My Education</button>
            </div>
            
            <div className={`border-[0.5px] border-[#858d98] px-4 py-2 text-[#ffff] font-semibold bg-[#1f2226] rounded-lg shadow-2xl shadow-[#212428] ${Activetab === 'work' ? "bg-[#ff014f] text-black":""}  `}>
              <button onClick={() => setActivetab('work')}>Work Experience</button>
            </div>
            
            <div className={`border-[0.5px] border-[#858d98] px-4 py-2 text-[#ffff] font-semibold bg-[#212428] rounded-lg shadow-2xl shadow-[#212428] ${Activetab === 'certifi' ? "bg-[#ff014f] text-black":""}  `}>
              <button onClick={() => setActivetab('certifi')}>Certifications</button>
            </div>
            
            <div className={`border-[0.5px] border-[#858d98] px-4 py-2 text-[#ffff] font-semibold bg-[#212428] rounded-lg shadow-2xl shadow-[#212428] ${Activetab === 'strength' ? "bg-[#ff014f] text-black":""}  `}>
              <button onClick={() => setActivetab('strength')}>Strength Beyond Tech</button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {Activetab === 'education' && <Myeducation />}
          {Activetab === 'work' && <Worke />}
          {Activetab === 'certifi' && <p className={`text-white`}>ssss</p>}
          {Activetab === 'strength' && <p className={`text-white`}>mmmm</p>}
        </div>
      </div>
       
    </div>
  )
}

export default Aboutme
