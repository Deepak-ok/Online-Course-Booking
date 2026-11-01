
import React from 'react'
import javaImage from "../assets/javaImages.jpg";
import cp from "../assets/C++Images.jpg";
import pyImages from "../assets/pyImages.jpg"
import c from "../assets/Cimages.png"

export default function Home() {
  return (
    <>
      {/* Main Poster Section */}
      <div className="main-content w-full">
        <div className="
          flex flex-col justify-center items-center
          w-full min-h-[500px]
          px-4 py-12
          bg-blue-100
          text-center
        ">

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            text-black font-semibold
            shadow-blue-400 shadow-lg
            rounded-2xl
            px-3 py-2
            my-3
          ">
            Welcome To Our Courses
          </h1>

          <h6 className="
            text-base
            sm:text-lg
            md:text-xl
            mt-4
            text-gray-700
            px-2
          ">
            Experience The Great Learning Resources With Great
            <br className="hidden sm:block" />
            Skilled Faculty.
          </h6>

          {/* Buttons */}
          <div className="
            flex flex-col
            sm:flex-row
            justify-center items-center
            gap-4
            mt-8
          ">

            <button className="btn-primary w-full sm:w-auto hover:bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              Explore Courses
            </button>

            <button className="
              btn-primary
              bg-white text-black
              w-full sm:w-auto transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110
            ">
              <a href="#contact">Contact Us</a>
            </button>

          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="
        flex justify-center items-center
        text-center
        mt-10
        px-4
      ">
        <p className="
          text-lg
          sm:text-xl
          md:text-2xl
          font-semibold
        ">
          Trusted By Millions Of Students For Providing Resources
        </p>
      </div>

      {/* Company Logos Section */}
      {/* Company Logos Animation */}
      <div className="w-full overflow-hidden py-10">

        <div className="flex w-max animate-marquee">

          {/* First Logo Group */}
          <div className="flex items-center gap-12 px-6 shrink-0">

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df852748398873a7da408c_Logo%20-%20%233.svg" alt="Logo 1" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df85279677f67205c113f6_Logo%20-%20%231.svg" alt="Logo 2" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df85276576014baf65cdd7_Logo%20-%20%235.svg" alt="Logo 3" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527365cc00c22cd7d4b_Logo%20-%20%237.svg" alt="Logo 4" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527231c0cbb5806460d_Logo%20-%20%236.svg" alt="Logo 5" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527fc5768396b6efe0e_Logo%20-%20%232.svg" alt="Logo 6" />

          </div>

          {/* Duplicate Logo Group for Infinite Animation */}
          <div className="flex items-center gap-12 px-6 shrink-0" aria-hidden="true">

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df852748398873a7da408c_Logo%20-%20%233.svg" alt="" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df85279677f67205c113f6_Logo%20-%20%231.svg" alt="" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df85276576014baf65cdd7_Logo%20-%20%235.svg" alt="" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527365cc00c22cd7d4b_Logo%20-%20%237.svg" alt="" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527231c0cbb5806460d_Logo%20-%20%236.svg" alt="" />

            <img className="w-24 sm:w-32 h-16 object-contain" src="https://cdn.prod.website-files.com/69d8e61536d38964b95dd0e8/69df8527fc5768396b6efe0e_Logo%20-%20%232.svg" alt="" />

          </div>

        </div>
      </div>

      {/* Cards Section */}
      <div className=' bg-blue-100 
        w-full 
        mx-auto 
     '>
       <a href="/course">
         <h1 className='flex justify-center p-6 font-semibold text-4xl sm:text-md md:text-2xl'>
          <span className='cursor-pointer hover:underline hover:text-blue-400 transition delay-0 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
            Explore More Courses
          </span>
        </h1>
       </a>

        <div className=" px-15 py-10 pb-15
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      ">


          <div className="
          bg-white
           shadow-blue-100 shadow-lg 
          rounded-xl
          p-8
          text-center
        ">
            <img className="w-full h-40 object-contain" src={javaImage} alt="Java" />
          </div>

          <div className="
          bg-white
          shadow-2xl shadow-blue-100
          rounded-xl
          p-8
          text-center
        ">
            <img className="w-full h-40 object-contain" src={cp} alt="C++" />
          </div>

          <div className="
          bg-white
          shadow-2xl shadow-blue-100
          rounded-xl
          p-8
          text-center
        ">
            <img className="w-full h-40 object-contain" src={pyImages} alt="Py" />
          </div>

          <div className="
          bg-white
          shadow-2xl shadow-blue-100
          rounded-xl
          p-8
          text-center
        ">
            <img className="w-full h-40 object-contain" src={c} alt="C" />
          </div>

        </div>
      </div>
    </>
  )
}
