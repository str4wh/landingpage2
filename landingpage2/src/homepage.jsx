import React, { useState } from 'react'
import Logo from './assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";


function Homepage() {

    const[isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav class="bg-blue-700 text-white">
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
                <li><a lass="hover:bg-blue-300 px-4 py-2 rounded" href="#">Home</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded" href="#">Sales</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded" href="#">Banking & Deposits</a></li>
                <li><a class="hover:bg-blue-300 px-4 py-2 rounded" href="#">Mpesa & Chama</a></li>
            </ul>
            )}
        </nav>
    </div>
  )
}

export default Homepage