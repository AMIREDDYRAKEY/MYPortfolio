import React, { useState } from 'react'
import img from '../assets/RAKEY.jpeg'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
    const [open, setopen] = useState(false)
    return (
        <nav className='bg-[#212428] shadow-xl h-[80px] w-full flex items-center fixed top-0 left-0 z-50 px-5" '>
            <div className='flex p-5 gap-2  '>
                <div className=''>
                    <img src={img} alt="" className='w-10 h-10 rounded-full border-2  border-[#858d98]' />
                </div>
                <div><h1 className='text-[#858d98] font-bold pt-[6px] text-xl'>Rakey</h1></div>

            </div>
            <div className='flex-1 flex justify-center '>
                <ul className='lg:flex md:flex hidden md:gap-[80px]'>
                    <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]  ' >  <button>Home</button></li>
                    <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'> <button>About Me</button></li>
                    <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Skills</button></li>
                    <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Projects</button></li>
                    <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Contact</button></li>
                </ul>
            </div>
            {/* bars */}
            <div className='md:hidden flex text-[#858d98] text-[30px] mr-[60px]'>
                <button onClick={() => setopen(!open)}><FaBars /></button>

            </div>
            {
                open && (
                    <div className='bg-[#212428] fixed top-[0px] right-3 h-screen w-screen  z-50'>
                        <div className="flex justify-end mt-[30px]">
                            <button onClick={() => setopen(!open)} className="text-[#858d98] text-3xl">
                                <IoCloseSharp />
                            </button>
                        </div>

                        <div className='flex items-center justify-start ml-[50px]  mt-[50px]'>
                            <ul className='flex flex-col gap-[60px] text-xl'>
                                <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]  ' >  <button>Home</button></li>
                                <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'> <button>About Me</button></li>
                                <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Skills</button></li>
                                <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Projects</button></li>
                                <li className='coursor-pointer text-[#858d98] font-semibold hover:text-[#ff014f]'>  <button>Contact</button></li>

                            </ul>

                        </div>

                    </div>
                )
            }
        </nav>

    )
}

export default Navbar