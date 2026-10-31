import React from 'react'
import logo from "../assets/logo.jpg"

export default function Navbar() {
  return (
    <nav className=' fixed w-full px-4 py-4 bg-white text-black flex '>
      <div>
        <img className='w-10 h-10 rounded-4xl' src={logo} alt="Logo" />
      </div>



      <div className=' '>
        <ul className='pt-1 flex font-semibold text-lg'>
          <li className='mx-5 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><a href="/">Home</a></li>
          <li className='mx-5 cursor-pointer  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><a href="/about">About</a></li>
          <li className='mx-5 cursor-pointer  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'><a href=""></a>Course</li>

        </ul>
      </div>

      <button className="btn-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 ml-auto cursor-pointer">
        <a href="/login">Log in</a>
      </button>
    </nav>

  )
}

//  <div
//   className="bg-fixed bg-cover bg-center min-h-screen"
//   style={{ backgroundImage: `url(${homeImage})` }}
// >
//  <h1 className='flex justify-center text-5xl text-white'>Welcome To Our Courses</h1>
// </div>
