import React from "react";

const Myeducation = () => {
  return (
    <div className="flex justify-center items-center mt-[30px]">
      <div className="border-[1px] h-auto w-[94%] border-[#858d98] rounded-2xl p-6 text-white">
        <h2 className="text-xl font-semibold">My  Education</h2>
        <div className="space-y-6 mt-5">
          <div className="border-l-4 border-blue-400 pl-4">
            <div className="text-xl  "><strong>Currently Studying:</strong> Btech 3rd year Cse</div>
            <p className="text-gray-400">Annamacharya Institute of Technology And Sciences | 2024 - 2027</p>
            <p className="mt-1 font-semibold">
              CGPA:8.7/10
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4">
            <h2 className="text-xl font-semibold">Higher Secondary Education</h2>
            <p className="text-gray-400">Priyadarshini Institute Of Technology And Sciences | 2021 - 2024</p>
            <p className="mt-1 font-semibold text-[#fff]">
              Diploma in Electronic And Communication Engineering(ECE)<br/>
              Percentage:90
            </p>
          </div>

          <div className="border-l-4 border-yellow-400 pl-4">
            <h2 className="text-xl font-semibold">Secondary School</h2>
            <p className="text-gray-400">Sri Shiridi Sai High School | 2020 - 2021</p>
            <p className="mt-1 font-semibold">
               CGPA:10/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myeducation;
