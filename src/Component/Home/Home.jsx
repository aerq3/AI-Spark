import React, { useRef, useState } from 'react'
import style from './Home.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { linearGradient } from 'framer-motion/client';


export default function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // يمنع الريلود
        console.log('Email submitted:', email); // هنا تبعت الإيميل لو حابب
        setEmail(''); // يفضي الـ input بعد الإرسال
    }

    const [searchTerm, setSearchTerm] = useState('');
    // Refs for different sections
    const laptopsRef = useRef(null);
    const testimonialsRef = useRef(null);
    const tracksRef = useRef(null);

    const handleSearch = () => {
        const offset = 100;
        const term = searchTerm.toLowerCase();

        const scrollWithOffset = (ref) => {
            if (ref.current) {
                const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        };

        if (term.includes('laptop') || term.includes('labtop')) {
            scrollWithOffset(laptopsRef);
        } else if (term.includes('student') || term.includes('testimonials')) {
            scrollWithOffset(testimonialsRef);
        } else if (term.includes('track') || term.includes('education')) {
            scrollWithOffset(tracksRef);
        }
        setSearchTerm('');
    };


    const tracks = [
        {
            title: "Programming Track",
            description: "A learning path focused on programming languages and developing applications and websites",
            icon: <i className="text-xl text-[#3055d1] fa-solid fa-car"></i>
        },
        {
            title: "Graphic Design Track",
            description: "Aims to teach image and illustration design using software like Photoshop and Illustrator",
            icon: <i className="text-xl text-[#3055d1] fa-solid fa-car-side"></i>
        },
        {
            icon: <i className="text-xl text-[#3055d1] fa-solid fa-car"></i>,
            title: "Database Track",
            description: "Focuses on managing and storing data using database systems like MySQL and Oracle",
        },
        {
            icon: <i className="text-xl text-[#3055d1] fa-solid fa-car-side"></i>,
            title: "Video Editing Track",
            description: "A track for learning video editing and adding visual effects using software like Premiere Pro and After Effects",
        }
    ];
    return <>
        <div className=" text-gray-800 mt-21">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gray-100 py-10 px-3 sm:px-6 text-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1684369176170-463e84248b70?w=600&auto=format&fit=crop&q=60')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >            <div className="absolute inset-0 bg-[#0000001A] bg-opacity-60 z-0"></div>
                <div className="relative">

                    <div className='max-w-full sm:max-w-[80%] lg:max-w-[50%] flex flex-col justify-start text-left '>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 ">
                            "AI Spark – The Smart Learning Platform for Educational <span className='text-[#D46A43]'>Technology</span> Students"
                        </h1>
                        <p className=' text-white font-medium w-full sm:w-3/4 mb-6'>
                            We are the spark to your dream AI....
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mt-3 sm:mt-6 flex flex-col sm:flex-row justify-center items-center bg-white p-4 sm:p-5 max-w-full sm:max-w-[70%] md:max-w-[55%] rounded-full ">
                        <input
                            type="text"
                            placeholder="Search for Laptops, Student_say, Tracks"
                            className="px-4 py-2 mb-2 sm:mb-0 sm:me-4 rounded-full border border-gray-300 w-full sm:w-auto sm:flex-1 placeholder:text-black focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="bg-[#3055D1] text-white px-6 py-2 rounded-full font-medium w-full sm:w-auto cursor-pointer hover:bg-[#1e3fa4] hover:scale-105 hover:shadow-lg transition duration-300"
                            onClick={handleSearch}
                        >
                            Continue
                        </button>
                    </div>


                    {/* CTA buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center max-w-[50%] gap-4 ">
                        <button onClick={() => navigate('/login')} className="cursor-pointer bg-[#3055D1] text-white px-10 py-3 rounded-full text-lg sm:text-2xl hover:bg-[#1e3fa4] hover:scale-105 hover:shadow-lg transition duration-300">
                            Get started
                        </button>
                       
                    </div>

                    {/* Features Section */}
                    <section className="bg-[#3055D1] text-white py-12 px-4 sm:px-6 md:max-w-[90%] sm:max-w-[80%] lg:max-w-[95%]  mt-10 sm:mt-16 rounded-2xl shadow-lg mx-auto">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[#3055D1] gap-6 rounded-2xl p-6 shadow-lg flex items-start transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                                <div className='p-4 flex items-center justify-center bg-[#5977da] rounded-xl flex-shrink-0'>
                                    <img
                                        src="../src/assets/online-test 2.png"
                                        alt="Online Test Icon"
                                        width={54}
                                        height={54}
                                        className="object-contain"
                                    />
                                </div>
                                <div className='text-left'>
                                    <h3 className="text-xl font-bold text-white mb-3">Explore Career Tracks & Roadmaps</h3>
                                    <p className="text-sm text-white opacity-80 leading-relaxed">
                                        Contrary to popular belief, our platform provides structured tracks and roadmaps in tech and education fields to help you learn with purpose and clarity.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#3055D1] gap-6 rounded-2xl p-6 shadow-lg flex items-start transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                                <div className='p-4 flex items-center justify-center bg-[#5977da] rounded-xl flex-shrink-0'>
                                    <img
                                        src="../src/assets/online-test 3.png"
                                        alt="Online Test Icon"
                                        width={54}
                                        height={54}
                                        className="object-contain"
                                    />
                                </div>
                                <div className='text-left'>
                                    <h3 className="text-xl font-bold text-white mb-3">Master AI Tools with Guided Videos</h3>
                                    <p className="text-sm text-white opacity-80 leading-relaxed">
                                        It’s not just text—our site offers high-quality video tutorials that walk you through the most powerful AI platforms in a simple, practical way.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#3055D1] gap-6 rounded-2xl p-6 shadow-lg flex items-start transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                                <div className='p-4 flex items-center justify-center bg-[#5977da] rounded-xl flex-shrink-0'>
                                    <img
                                        src="../src/assets/online-test 1.png"
                                        alt="Online Test Icon"
                                        width={54}
                                        height={54}
                                        className="object-contain"
                                    />
                                </div>
                                <div className='text-left'>
                                    <h3 className="text-xl font-bold text-white mb-3">Get Smart Device Advice & Tips</h3>
                                    <p className="text-sm text-white opacity-80 leading-relaxed">
                                        Surprisingly useful—discover how to choose the right device, maintain it properly, and use it efficiently with our expert-backed tech advice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Laptop Section */}
            <section ref={laptopsRef} className="bg-white py-12 px-6 text-center mt-8">
                <h2 className="text-4xl font-semibold  mb-2 capitalize">the Best labtobs </h2>
                <p className="text-[#8A8A8A] font-medium mb-6">The devices were carefully selected based on the best features available.</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  overflow-hidden">
                    <div onClick={() => { setTimeout(() => { navigate('/laptops'); }, 200); }} className="cursor-pointer relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_4.png" alt="Laptop 4 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div onClick={() => { setTimeout(() => { navigate('/laptops'); }, 200); }} className="cursor-pointer relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_5.png" alt="Laptop 5 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div onClick={() => { setTimeout(() => { navigate('/laptops'); }, 200); }} className="cursor-pointer relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_6.png" alt="Laptop 6 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Learning Experience */}
            <section className="bg-[#E5EBFF] py-16 px-6">
                <div className="container mx-auto flex flex-col lg:flex-row  justify-center gap-10">
                    <img src="../src/assets/1.jpg" alt="Learning Illustration" className="max-w-xl" />
                    <div>
                        <h2 className="lg:text-7xl md:text-5xl text-4xl font-bold mb-4">
                            Premium <span className="text-[#3055D1]">Learning</span> Experience
                        </h2>
                        <ul className="space-y-4 mt-10">
                            <li className="flex items-center gap-4">
                                <div className="bg-[#4D2C5E] text-white p-3 rounded-xl"><img src="../src/assets/hearts 1.png" alt="" className='w-full' width={52} height={52} /></div>
                                <div>
                                    <p className="font-medium text-[#050C26] text-3xl">Easily Accessible</p>
                                    <p className="text-xl text-[#4269AC]">Learning Will feel Very Comfortable With AI spark.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-[#4D2C5E] text-white p-3 rounded-xl"><img src="../src/assets/jigsaw 1.png" alt="" className='w-full' width={52} height={52} /></div>
                                <div>
                                    <p className="font-medium text-[#050C26] text-3xl">Fun learning expe</p>
                                    <p className="text-xl text-[#4269AC]">Enjoy a Smooth and Relaxed Learning Journey with AI spark.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Educational Tracks Section */}
            <section ref={tracksRef} className="px-4 py-12 mx-4">
                {/* Main Heading */}
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Educational Tracks</h1>
                <div className='border bg-[#3055d1] w-16 text-center mx-auto h-1 mb-8'></div>
                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {tracks.map((track, index) => (
                        <div onClick={() => { setTimeout(() => { navigate('/ourservices'); }, 200); }} key={index} className="cursor-pointer bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-shadow duration-500">

                            {/* Track Title */}
                            <h2 className="text-4xl font-normal mb-3 text-gray-800">{track.title}</h2>

                            {/* Track Description */}
                            <p className="text-[#ACACAC] mb-4">{track.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="bg-[#3055D1] mb-12 py-12 px-6 text-white text-center max-w-[80%] mx-auto rounded-2xl">
                <h2 className="text-4xl font-semibold mb-2">Subscribe to our ai spark</h2>
                <p className="mb-6">Stay updated with the latest AI tools, tips, and learning resources — straight to your inbox.</p>
                <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2 max-w-md mx-auto bg-white p-2 rounded-full">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 py-2 rounded-full w-full text-gray-800 focus-visible:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-[#3055D1] text-white px-10 py-2 rounded-full font-semibold text-center hover:bg-[#1e3fa4] hover:scale-105 hover:shadow-lg transition duration-300"
                    >
                        Send
                    </button>
                </form>
            </section>
        </div>

    </>


}
