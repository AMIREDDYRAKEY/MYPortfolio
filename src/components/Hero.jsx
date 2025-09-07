import React from 'react'
import img from '../assets/RAKEY.jpeg'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className='' >
      <div className='md:flex md:flex-row md:justify-around flex flex-col  md:mt-[140px] mt-[130px] md:ml-0 ml-4'>
      <div className='flex md:gap-5 gap-3 flex-col md:mt-[40px] text-5xl '>
        <h1 className='text-white md:text-[50px] text-3xl  font-semibold'>Hi,I'm<span className='text-[#ff014f] '> Rakesh Reddy!</span></h1>
        <div className='text-white md:text-[40px] font-bold '>Fronted Developer</div>
        <div className="max-w-[500px] text-[#858d98] font-semibold">
          <p className="text-base leading-relaxed">
            "I'm an aspiring <span className="text-blue-400 font-semibold">Front-End Developer</span> with a strong foundation in web technologies and a passion for crafting responsive, user-friendly interfaces. Dedicated to turning ideas into interactive experiences, I continuously explore modern frameworks and design principles to build seamless digital solutions."
          </p>
        
        </div>
        {/* boxes */}
        <div className='md:flex md:flex-row flex flex-col gap-8  md:mt-0 mt-5 md:gap-7'>
           <div className='  border-[1.5px] border-[#858d98] h-[60px] w-[170px] flex items-center justify-center bg-[#ff014f] rounded-md gap-2 coursor-pointer' ><button className='text-[17px] text-white font-semibold'>Download Cv </button> <IoMdDownload className='text-[17px] text-white' /></div>
           <div className='  border-[1.5px] border-[#858d98] h-[60px] w-[170px] flex items-center justify-center  rounded-md gap-2 hover:bg-[#ff014f] coursor-pointer' ><button className='text-[17px] text-white font-bold'>Get In Touch </button></div>
        </div>
      </div>
      <div className="relative group md:w-[450px] md:h-[450px] md:ml-0 ml-[-3px] md:mt-0 mt-10 w-[300px] h-[300px] rounded-full overflow-hidden bg-[#212428] p-2 shadow-2xl shadow-[]">
        <img src={img} alt="Preview" className="w-full h-full object-cover rounded-full border-1 border-gray-200 " />
      </div>
      </div>
      <div className='lg:block hidden w-[88%] border-[0.5px] ml-[40px] mt-[40px] border-[#3f3f3f]'></div>
    </div>
  )
}

export default Hero