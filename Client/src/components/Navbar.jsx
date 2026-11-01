
import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 sm:px-6 py-3 bg-white text-black shadow-md">

      <div className="flex items-center gap-5 sm:gap-8">

        {/* Logo */}
        <img className="w-10 h-10 rounded-full object-cover" src={logo} alt="Logo"
        />

        {/* Navigation Links */}
        <ul className="flex items-center gap-3 sm:gap-6 font-semibold text-sm sm:text-base md:text-lg">

          <li>
            <Link to="/" className="transition duration-300 hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="transition duration-300 hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/cour/courseses" className="transition duration-300 hover:text-blue-600">
              Course
            </Link>
          </li>

        </ul>

        {/* Login */}
        <Link
          to="/login"
          className="btn-primary ml-auto text-sm sm:text-base hover:bg-blue-700"
        >
          Log in
        </Link>

      </div>
    </nav>
  )
}
