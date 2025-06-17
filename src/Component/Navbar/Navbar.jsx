import React, { useState } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return <>
        <nav className="border-gray-200 bg-[#E5EBFF] fixed top-0 right-0 left-0 z-10 p-3">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl font-bold whitespace-nowrap text-black">
                        AI <span className="text-[#3055D1]">Spark</span>
                    </span>
                </NavLink>
                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={menuOpen}
                    >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                {/* Menu Items */}
                <div className={`${menuOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
                        {[
                        { to: "", label: "Home" },
                        { to: "/aboutus", label: "About Us" },
                        { to: "/ourservices", label: "Our Services" },
                        { to: "/platforms", label: "Platforms" },
                        { to: "/laptops", label: "Laptops" },
                        { to: "/contactus", label: "Contact" },
                        { to: "/chatbot", label: "ChatBot" },
                        ].map(({ to, label }) => (
                        <li key={label}>
                            <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `block text-xl py-2 px-3 rounded-sm md:p-0 duration-200 ${
                                isActive ? "text-blue-700" : "text-[#00052E] hover:text-blue-700"
                                }`
                            }
                            >
                            {label}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

    </>


}
