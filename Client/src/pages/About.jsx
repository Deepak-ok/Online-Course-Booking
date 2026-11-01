import React from 'react'
import tutor1 from '../assets/tutor1.jpg'
import tutor2 from '../assets/tutor2.jpg'
import tutor3 from '../assets/tutor3.jpg'

export default function About() {
    return (
        <>
            {/* About us start */}
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
                    About Us
                </h1>

                <h6 className="text-center
            text-base
            sm:text-lg
            md:text-xl
            mt-4
            text-gray-700
            px-2
          ">
                    Online Hub is an platform that automates learner interactions, enhancing engagement and <br /> streamlining growth processes effortlessly.
                </h6>

            </div>
            {/* About us end */}


            {/* Our Team start */}
            <div className='  m-10 grid grid-rows-2'>
                <h1 className=' flex justify-center font-semibold text-2xl text-blue-400 mb-5'>Our Team</h1>

                <h2 className='flex justify-center font-bold text-5xl text-black'>It’s All About The Learners</h2>
            </div>
            {/* our team end */}

            {/* poster and journey start */}
            <div className=' bg-blue-100 w-full  h-15px mx-auto p-[40px]' >
                    
                    {/* poster start */}
                <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">

                    <div className="rounded-xl p-8">
                        <img className=" w-full h-52 object-cover rounded-t-lg" src={tutor1} alt="tutor1" />
                        <h2 className=' bg-blue-200 text-lg p-2'>Marry Grin  </h2>
                        <h1 className='bg-white text-cover font-bold text-2xl p-2'>Head Of Courses</h1>
                        <h4 className='bg-white rounded-b-2xl px-2 '>Merry Grin focuses on learners satisfaction through exceptional support and success strategies </h4>
                    </div>

                    <div className="  rounded-xl p-8">
                        <img className=" w-full h-52 object-cover rounded-t-lg" src={tutor2} alt="tutor1" />
                        <h2 className=' bg-blue-200 text-lg p-2'>Marry Grin  </h2>
                        <h1 className='bg-white text-cover font-bold text-2xl p-2'>Head Of Courses</h1>
                        <h4 className='bg-white rounded-b-2xl px-2 '>Merry Grin focuses on learners satisfaction through exceptional support and success strategies </h4>
                    </div>

                    <div className="  rounded-xl p-8">
                        <img className=" w-full h-52 object-cover rounded-t-lg" src={tutor3} alt="tutor1" />
                        <h2 className=' bg-blue-200 text-lg p-2'>Marry Grin  </h2>
                        <h1 className='bg-white text-cover font-bold text-2xl p-2'>Head Of Courses</h1>
                        <h4 className='bg-white rounded-b-2xl px-2 '>Merry Grin focuses on learners satisfaction through exceptional support and success strategies </h4>
                    </div>
                </div>
                    {/* poster end */}

            </div>
            {/* poster and journey end */}


        </>
    )
}
