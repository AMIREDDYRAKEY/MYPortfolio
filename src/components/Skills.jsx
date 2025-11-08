import React from 'react'

const Skills = () => {
  return (
    <div className='mt-[50px]'>
         <div className='flex ml-[40px] items-center gap-3'>
          <h1 className='text-[#858d98] font-bold text-[40px]'>Best Skills On</h1>
          <div className='w-[150px] mt-[6px] h-[2px] bg-[#ff014f]'></div>
        </div>
        {/* Skills */}
        <div className='grid grid-cols-3'>
            {/* 1 */}
            <div className='mt-[50px] ml-[100px]'>
                <p className='text-3xl text-white font-bold'>HTML</p>
                <div className='border-[1px]  border-[#858d98] h-[16px] w-[300px] mt-4 rounded-2xl'>
                    <div className='bg-blue-800  h-[14px] w-[270px] rounded-2xl mt-[-px]'></div>
                </div>
            </div>
            {/* 2 */}
            <div className='mt-[50px] ml-[100px]'>
                <p className='text-3xl text-white font-bold'>CSS</p>
                <div className='border-[1px]  border-[#858d98] h-[16px] w-[300px] mt-4 rounded-2xl'>
                    <div className='bg-blue-800  h-[14px] w-[250px] rounded-2xl mt-[-px]'></div>
                </div>
            </div>
            {/* 3 */}
            <div className='mt-[50px] ml-[100px]'>
                <p className='text-3xl text-white font-bold'>Javascript</p>
                <div className='border-[1px]  border-[#858d98] h-[16px] w-[300px] mt-4 rounded-2xl'>
                    <div className='bg-blue-800  h-[14px] w-[180px] rounded-2xl mt-[-px]'></div>
                </div>
            </div>
            {/* 4 */}
            <div className='mt-[50px] ml-[100px]'>
                <p className='text-3xl text-white font-bold'>Tailwind Css</p>
                <div className='border-[1px]  border-[#858d98] h-[16px] w-[300px] mt-4 rounded-2xl'>
                    <div className='bg-blue-800  h-[14px] w-[280px] rounded-2xl mt-[-px]'></div>
                </div>
            </div>
            {/* 5 */}
            <div className='mt-[50px] ml-[100px]'>
                <p className='text-3xl text-white font-bold'>React Js</p>
                <div className='border-[1px]  border-[#858d98] h-[16px] w-[300px] mt-4 rounded-2xl'>
                    <div className='bg-blue-800  h-[14px] w-[240px] rounded-2xl mt-[-px]'></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills