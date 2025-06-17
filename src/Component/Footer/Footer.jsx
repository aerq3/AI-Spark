import React from 'react'
import style from './Footer.module.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return <>
        <div className='pt-12 bg-[#E5EBFF] pb-6 px-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* قسم التقييم */}
                <div className="mb-6 mr-4">
                    <div className="flex items-center mb-4">
                    <span className="self-center text-xl font-bold whitespace-nowrap text-black">
                        AI <span className="text-[#3055D1]">Spark</span>
                    </span>
                    </div>
                    <p className="text-[#00052E]">
                  Our website offers detailed video tutorials, tools for AI platforms, and a chatbot that answers all your questions. 
                  We also guide students through educational technology tracks across different fields
                    </p>
                </div>

                {/* قسم الشركة */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 pb-2 text-[#00052E]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/'}>Home</NavLink>
                            </li>
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/aboutus'}>About Us</NavLink>
                            </li>
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/ourservices'}>Our Services</NavLink>
                            </li>
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/platforms'}>Platforms</NavLink>
                            </li>
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/laptops'}>Laptops</NavLink>
                            </li>
                            <li className="text-[#00052E]  ">
                                <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/contactus'}>Contact</NavLink>
                        </li>
                        </ul>
                </div>

                {/* قسم الدعم */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#00052E] pb-2">Support</h3>
                    <ul className="space-y-2">
                    <li className="text-[#00052E]">
                        <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/chatbot'}>ChatBot</NavLink>
                    </li>
                    <li className="text-[#00052E]">
                        <NavLink className={'hover:text-blue-600 transition-colors mb-2 block'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/help'}>Help Center</NavLink>
                    </li>
                    </ul>
                </div>

                {/* قسم معلومات الاتصال (Contact Info) */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#00052E] pb-2 ">Contact Info</h3>
                    <ul className="space-y-3 text-[#00052E]">
                    <li className="flex items-center">
                        <i className="fa-solid fa-phone mr-2 text-[#3055D1]"></i>
                        <span>+0201004565702</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fa-solid fa-envelope mr-2 text-[#3055D1]"></i>
                        <span>AiSpark2025@gmail.com</span>
                    </li>
                    <li className="flex items-center">
                        <i className="fa-solid fa-location-dot mr-2 text-[#3055D1]"></i>
                        <a href='https://maps.app.goo.gl/8m1aaRzN2T3Q56DC8' target='_blank'>location</a>
                    </li>
                    <li className="flex items-center">
                        <i className="fa-solid fa-city mr-2 text-[#3055D1]"></i>
                        <span>Faculty of Specific Education – Fayoum University</span>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="pt-6 text-center text-[#00052E]">
                <p>© 2025 Ai-Spark. All rights reserved</p>
            </div>
        </div>

    </>


}
