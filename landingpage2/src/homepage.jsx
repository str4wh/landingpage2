import React, { useState } from 'react'
import Logo from './assets/logo.jpg'
import MicroPic from './assets/microfinance.jpg'
import MicroPic11 from './assets/microfinance11.jpg'
import { FaBars, FaTimes } from "react-icons/fa";


function Homepage() {

    const[isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav class="bg-blue-400 text-white">
            <div class="border-0 flex items-center justify-between px-4 py-2">
                <div class="w-full max-w-18">
                    <img class="h-10" src={Logo} alt="my logo" />
                </div>

                {/* Hamburger icon (visible on small screens only) */}
                <div className="md:hidden ml-auto">
                    <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop menu (hidden on small screens) */}
                <div>
                    <ul class="hidden md:flex space-x-6 mr-7">
                        <li><a class="hover:bg-blue-300 px-3 py-2 rounded transition duration-200" href="#">Home</a></li>
                        <li><a class="hover:bg-blue-300 px-3 py-2 rounded transition duration-200" href="#">Sales</a></li>
                        <li><a class="hover:bg-blue-300 px-3 py-2 rounded transition duration-200" href="#">Banking & Deposits</a></li>
                        <li><a class="hover:bg-blue-300 px-3 py-2 rounded transition duration-200" href="#">Mpesa & Chama</a></li>
                    </ul>
                </div>
            </div>

            {/* Mobile menu (visible only when isOpen is true) */}
            {isOpen && (
            <ul class="mt-4 text-center space-y-4 text-xl pb-2 md:hidden">
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded transition duration-200"href="#">Home</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded transition duration-200" href="#">Sales</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded transition duration-200" href="#">Banking & Deposits</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded transition duration-200" href="#">Mpesa & Chama</a></li>
            </ul>
            )}
        </nav>
        
        <div class="relative h-[calc(100vh-56px)]">
            <img class="h-full w-full object-cover" src={MicroPic11} alt="micro saving pic" />
            <div class="absolute top-0 left-0 w-full h-full   flex items-center justify-start p-4 sm:px-6">
                <div className="text-white max-w-xl text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500">
                        PesaPamoja
                    </h1>
                    <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
                        Helps small groups save, and grow through a simple, transparent platform that promotes trust, access, and empowerment.
                    </p>
                    <button class="border-0 bg-blue-400 hover:bg-blue-600 transition duration-200 text-white pl-2 pr-2 pt-2 pb-2 rounded-2xl mt-2">
                        Get started
                    </button>
                     <button class="border-0 bg-blue-400 hover:bg-blue-600 transition duration-200 text-white pl-2 pr-2 pt-2 pb-2 rounded-2xl mt-2 ml-2">
                        Learn more
                    </button>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Homepage