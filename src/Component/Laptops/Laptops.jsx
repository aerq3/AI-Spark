import React from 'react'
import style from './Laptops.module.css'
import Loading from '../Loading/Loading'

export default function Laptops() {
    return <>
        <div className='mt-21'>
            <section className="relative min-h-screen bg-gray-100 py-10 px-3 sm:px-6 text-center"
                style={{
                    backgroundImage: `url('../src/assets/laptops/lap.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >  
             <div className="absolute inset-0 bg-[#00000070] bg-opacity-60 z-0"></div>
            <div className="relative">
                <div className='max-w-full sm:max-w-[80%] lg:max-w-[50%] flex flex-col justify-start text-left p-5 mt-5'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
                        " <span className='text-[#D46A43]'>AI Spark </span> – Helping EdTech Students Make the Right Laptop Choice and Protect Their Tech"
                    </h1>
                    <p className='text-white font-medium w-full sm:w-3/4 mb-6'>
                        "Explore expert-backed tips on laptop selection, maintenance, and performance – all tailored for Educational Technology students.                    </p>
                </div>
                </div>
            </section>
            


            <section className="bg-white py-12 px-6 text-center">
                <h2 className="text-4xl font-semibold mb-2 capitalize">the Best labtobs For designers</h2>
                <p className="text-[#8A8A8A] font-medium mb-6">
                    "Each device has been handpicked for its specs and display quality — making it a perfect fit for design and creative work.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_1.png" alt="Laptop 1 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_2.png" alt="Laptop 2 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_3.png" alt="Laptop 3 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12 px-6 text-center">
                <h2 className="text-4xl font-semibold  mb-2 capitalize">the Best labtobs For programming</h2>
                <p className="text-[#8A8A8A] font-medium mb-6">
                    Each device has been handpicked for its specs and reliability — making it a perfect fit for programming and development tasks</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto overflow-hidden">
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_4.png" alt="Laptop 4 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_5.png" alt="Laptop 5 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="../src/assets/laptops/Laptop_6.png" alt="Laptop 6 photo" className="object-cover w-full h-full" width={500} height={500} />
                        <div className="absolute inset-0 bg-[#00000080] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-center text-xl">
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-300">HP 120 PX</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-700">2500 PRICE</p>
                            <p className="text-white opacity-0 group-hover:opacity-100 transition delay-1000">520 SSD</p>
                        </div>
                    </div>

                </div>
            </section>
            <div className="bg-white flex flex-col items-center py-10 px-12">
                <div className="w-full">
                    <h1 className="text-2xl sm:text-5xl font-bold text-black flex items-center mb-12">
                        <span role="img" aria-label="shield">🛡️</span>
                        Tips To Maintain And Protect Your Devices
                    </h1>

                    <ul className="space-y-6  text-black">
                        <li className='border-l-4 border-opacity-50 border-[#ACACAC] pl-2 mb-12'>
                            <p className="font-semibold text-3xl">1. Keep Your Software Updated</p>
                            <p className="text-xl font-normal mt-1">
                                Always install the latest updates for your operating system and software to ensure your device stays secure and performs at its best.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">2. Use Reliable Antivirus Software</p>
                            <p className="text-xl font-normal mt-1">
                                Protect your device from viruses, malware, and online threats by installing trusted antivirus and security programs.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">3. Clean Your Device Regularly</p>
                            <p className="text-xl font-normal mt-1">
                                Physically clean your device to prevent dust buildup, which can cause overheating and hardware damage.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">4. Avoid Overheating</p>
                            <p className="text-xl font-normal mt-1">
                                Ensure proper ventilation, avoid using devices on soft surfaces like beds, and consider using a cooling pad if necessary.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">5. Handle With Care</p>
                            <p className="text-xl font-normal mt-1">
                                Always transport your devices using protective cases and avoid dropping or putting excessive pressure on them.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">6. Backup Your Data Frequently</p>
                            <p className="text-xl font-normal mt-1">
                                Use external drives or cloud services to back up your important files regularly to avoid data loss in case of device failure.
                            </p>
                        </li>

                        <li className='border-l-4 border-opacity-50 border-[#ACACAC]  pl-2 mb-12'>
                            <p className="font-semibold text-3xl">7. Optimize Storage</p>
                            <p className="text-xl font-normal mt-1">
                                Regularly delete unnecessary files and applications to keep your device running smoothly and efficiently.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-[#EFF4F8] py-10 mb-8'>
                <h2 className='font-bold text-3xl text-center font-[Almarai] px-2'>"Your Guide to Choosing and Caring for the Right Device"</h2>
                <div className="flex justify-center px-6 pt-6">
                    <div className="relative w-full" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/videoseries?si=UNnDpmHRBrQZh0py&amp;list=PLPOeAmHFpUJunSA0asVG_UNCUC__cyGDk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>
            </div>
        </div>
    </>


}
