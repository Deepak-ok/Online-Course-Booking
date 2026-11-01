
import React from 'react'
import logo from '../assets/logo.jpg'

export default function Footer() {
    return (
        <footer className="w-full bg-white text-black py-10 px-6 ">

            <div className="
        max-w-7xl mx-auto 
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        lg:gap-12
      ">

                {/*  Logo Section */}
                <div className='w-45 h-45'>
                    <img className='' src={logo} alt="logo" />
                </div>

                 {/* Follow */}
                <div className="cursor-pointer mt-7">
                    <h1 className="text-xl sm:text-2xl uppercase mb-3 font-semibold">
                        Follow
                    </h1>

                    <a href="#" className="block font-light hover:text-blue-400 transition-all">Facebook</a>
                    <a href="#" className="block font-light hover:text-blue-400 transition-all">Instagram</a>
                    <a href="#" className="block font-light hover:text-blue-400 transition-all">Twitter</a>
                    <a href="#" className="block font-light hover:text-blue-400 transition-all">LinkedIn</a>
                </div>


                {/* Explore */}
                <div className="cursor-pointer mt-7">
                    <h1 className="text-xl sm:text-2xl uppercase mb-3 font-semibold">
                        Explore
                    </h1>

                    <a href="/about" className="block font-light hover:text-blue-400 hover:translate-x-1 transition-all duration-300">
                        About
                    </a>

                    <a href="/course" className="block font-light hover:text-blue-400 hover:translate-x-1 transition-all duration-300">
                        Course
                    </a>
                </div>

                {/* Contact */}
                <div className="cursor-pointer mt-7" id='contact'>
                    <h1 className="text-xl sm:text-2xl uppercase mb-3 font-semibold">
                        Get In Touch
                    </h1>

                    <a href="tel:+911234567890" className="block font-light hover:text-blue-400 transition-all">
                        +91-1234567890
                    </a>

                    <a href="mailto:info@gmail.com" className="block font-light hover:text-blue-400 transition-all">
                        info@gmail.com
                    </a>
                </div>

               
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm text-gray-400">
                © 2026 My Website. All Rights Reserved.
            </div>

        </footer>
    )
}
