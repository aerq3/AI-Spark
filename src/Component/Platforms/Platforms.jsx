import React, { useEffect, useRef, useState } from 'react'
import style from './Platforms.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

export default function Platforms() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        const offset = 100; // ارتفاع الـ Navbar مثلاً
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
    const [searchTerm, setSearchTerm] = useState('');

    const sectionsRefs = {
        email: useRef(null),
        audio: useRef(null),
        image: useRef(null),
        video: useRef(null),
        logo: useRef(null),
        prest: useRef(null),
        info: useRef(null),
    };

    const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const offset = 100;

    const scrollWithOffset = (ref) => {
        if (ref?.current) {
            const y = ref.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (term.includes('text')) {
        scrollWithOffset(sectionsRefs.text);
    } else if (term.includes('audio')) {
        scrollWithOffset(sectionsRefs.audio);
    } else if (term.includes('image') || term.includes('edit')) {
        scrollWithOffset(sectionsRefs.image);
    } else if (term.includes('video')) {
        scrollWithOffset(sectionsRefs.video);
    } else if (term.includes('slide') || term.includes('presentation')) {
        scrollWithOffset(sectionsRefs.slides);
    } else if (term.includes('ai') || term.includes('assistant')) {
        scrollWithOffset(sectionsRefs.ai);
    } else if (term.includes('learn') || term.includes('management')) {
        scrollWithOffset(sectionsRefs.learning);
    }
    setSearchTerm('');
    };
    
    
    const hasFetchedRef = useRef(false);
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function Tracks() {
            if (hasFetchedRef.current) return; // منع التكرار
                hasFetchedRef.current = true;
            try {
                setIsLoading(true);
                const response = await axios.get(`http://trackguide.runasp.net/api/Tool/with-tools`);
                setData(response.data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching track plan:', error);
                setIsLoading(false)
            }
        }
        Tracks()
    }, [])
    let navigate = useNavigate()

    const handleToolClick = async (toolId) => {
        const response = await axios.get(`http://trackguide.runasp.net/api/Tool/tool-details/${toolId}`);
        localStorage.setItem("toolId", toolId)
        navigate('/pDetails')
    };


    return <>
        <div className='mt-21'>
            <section className="relative min-h-screen bg-gray-100 py-10 px-3 sm:px-6 text-center" 
                style={{
                   backgroundImage: `url('../src/assets/about/plat.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                     <div className="absolute inset-0 bg-[#00000070] bg-opacity-60 z-0"></div>
            <div className="relative">
                <div className='max-w-full sm:max-w-[80%] lg:max-w-[50%] flex flex-col justify-start text-left p-5 mt-5'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
                    "Discover <span className='text-[#D46A43]'>AI Spark's</span>  exclusive selection of powerful AI platforms — clearly explained through step-by-step video tutorials tailored for Educational Technology students . "
                    </h1>
                    <p className='text-[#9ca3af] font-medium w-full sm:w-3/4 mb-6'>
                   Learn how to use each tool effectively and apply it in your educational projects.
                    </p>
                </div>

                {/* Search */}
                <div className="mt-8 sm:mt-6 flex flex-col sm:flex-row justify-center items-center bg-white p-4 sm:p-5 max-w-full sm:max-w-[70%] md:max-w-[55%] rounded-full ">
                    <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search for tools, platforms..."
                            className="px-4 py-2 mb-2 sm:mb-0 sm:me-4 rounded-full border border-gray-300 w-full sm:w-auto sm:flex-1 placeholder:text-black focus:outline-none"
                        />
                        <button
                            onClick={handleSearch}
                            className="cursor-pointer bg-[#3055D1] text-white px-6 py-2 rounded-full font-medium w-full sm:w-auto hover:scale-105 hover:shadow-lg transition duration-300"
                        >
                            Continue
                        </button>
                </div>
                </div>
            </section>
        </div>
        {isLoading ? <Loading /> : 
        <div className="p-6 bg-white text-gray-900">
            {/* Filter Buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
                <button
                    id={`${data[0]?.name}`}
                    onClick={() => handleScroll("Email-Creation")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#002EC5]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#002EC5]`}` : `bg-[#002EC5]`}`}
                    >
                    ✉️ {data[0]?.name} 
                </button>
                <button
                    id={`${data[1]?.name}`}
                    onClick={() => handleScroll("Presentation")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#1842CB]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#1842CB]`}` : `bg-[#1842CB]`}`}
                    >
                    📊 {data[1]?.name} 
                </button>
                <button
                    id={`${data[2]?.name}`}
                    onClick={() => handleScroll("Logo-Design")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#3055D1]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#3055D1]`}` : `bg-[#3055D1]`}`}
                    >
                    🎨 {data[2]?.name} 
                </button>
                <button
                    id={`${data[3]?.name}`}
                    onClick={() => handleScroll("image")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#0088FF]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#0088FF]`}` : `bg-[#0088FF]`}`}
                    >
                    🖼️ {data[3]?.name} 
                </button>
                <button
                    id={`${data[4]?.name}`}
                    onClick={() => handleScroll("audio")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#64C6FF]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#64C6FF]`}` : `bg-[#64C6FF]`}`}
                    >
                    🎧 {data[4]?.name} 
                </button>
                <button
                    id={`${data[5]?.name}`}
                    onClick={() => handleScroll("video")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#0073FF]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#0073FF]`}` : `bg-[#0073FF]`}`}
                    >
                    🎬 {data[5]?.name} 
                </button>
                <button
                    id={`${data[6]?.name}`}
                    onClick={() => handleScroll("infograph")}
                    className={`px-6 py-6 rounded-3xl text-white font-medium md:text-2xl sm:text-lg cursor-pointer transition hover:shadow-lg ${`bg-[#028BC6]`.includes('from-') ? `bg-gradient-to-r ${`bg-[#028BC6]`}` : `bg-[#028BC6]`}`}
                    >
                    📈 {data[6]?.name} 
                </button>
            </div>

            {/* Email Creation Section */}
            <div id="Email-Creation" ref={sectionsRefs.email} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{data[0]?.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[0]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Presentation Section */}
            <div id="Presentation" ref={sectionsRefs.prest} className="mb-16">
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{data[1]?.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[1]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*  Logo Design Tools Section */}
            <div id="Logo-Design" ref={sectionsRefs.logo} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{ data[2]?.name }</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[2]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*  Image Generation Tools Section */}
            <div id="image" ref={sectionsRefs.image} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{ data[3]?.name }</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[3]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*  Audio Tools Section */}
            <div id="audio" ref={sectionsRefs.audio} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{ data[4]?.name }</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[4]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*  Video Tool Section */}
            <div id="video" ref={sectionsRefs.video} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{ data[5]?.name }</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[5]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*  Infographic Section */}
            <div id="infograph" ref={sectionsRefs.info} className="mb-16">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6"> {data[6]?.name} </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {data[6]?.tools.map((tool) => (
                        <div
                            key={tool.id}
                            onClick={() => handleToolClick(tool.id)}
                            className="p-6 pt-3 border border-[#74A8CF] rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
                            >
                            <div className='flex gap-1.5'>
                                <img src={tool.imageUrl} alt={tool.name} width={48} height={48}/>
                                <p className='font-medium text-lg'>{ tool.name }</p>
                            </div>
                            <p dir="rtl" className=" text-black mt-2 font-normal text-sm">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        }
    </>


}
