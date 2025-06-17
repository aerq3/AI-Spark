import React, { useRef, useState } from 'react'
import style from './AboutUs.module.css'

export default function AboutUs() {
    const [searchTerm, setSearchTerm] = useState('');
    const sectionsRefs = {
        Mission: useRef(null),
        Why_Choose_Us: useRef(null),
        team: useRef(null),
        members: useRef(null),
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

        if (term.includes('mission')) {
            scrollWithOffset(sectionsRefs.Mission);
        } else if (term.includes('why') || term.includes('choose')) {
            scrollWithOffset(sectionsRefs.Why_Choose_Us);
        } else if (term.includes('team')) {
            scrollWithOffset(sectionsRefs.team);
        } else if (term.includes('member') || term.includes('staff')) {
            scrollWithOffset(sectionsRefs.members);
        }
        setSearchTerm('');
    };


    return <>
        <div className='mt-21'>
            <section className="relative min-h-screen bg-gray-100 py-10 px-3 sm:px-6 text-center"
                style={{
                    backgroundImage: `url('../src/assets/about/aboutUs.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-[#00000070] bg-opacity-60 z-0"></div>
            <div className="relative">
                <div className='max-w-full sm:max-w-[80%] lg:max-w-[50%] flex flex-col justify-start text-left mt-5'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
                        " <span className='text-[#D46A43]'>AI Spark </span> – Smart Learning Made for EdTech Students"
                    </h1>
                    <p className='text-[#8A8A8A] font-medium w-full sm:w-3/4 mb-6'>
                        Your dream AI starts with a spark – and that spark is us</p>
                </div>

                {/* Search */}
                <div className="mt-3 sm:mt-8 flex flex-col sm:flex-row justify-center items-center bg-white p-4 sm:p-5 max-w-full sm:max-w-[70%] md:max-w-[55%] rounded-full ">
                    <input
                        type="text"
                        placeholder="Search for tools, platforms..."
                        className="px-4 py-2 mb-2 sm:mb-0 sm:me-4 rounded-full border border-gray-300 w-full sm:w-auto sm:flex-1 placeholder:text-black focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="cursor-pointer bg-[#3055D1] text-white px-6 py-2 rounded-full font-medium w-full sm:w-auto  hover:scale-105 hover:shadow-lg transition duration-300">
                        Continue
                    </button>
                </div>
                </div>
            </section>
            <div className='bg-[#E5EBFF] flex flex-col lg:flex-row justify-center items-center my-12 py-12 px-6 md:px-12 gap-8'>
                <div className='w-full xl:w-1/2 xl:max-w-md max-w-lg'>
                    <img src="../src/assets/about/about_1.png" alt="" className='w-full h-auto  object-contain' />
                </div>
                <div className='w-full xl:w-1/2'>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium w-full text-center md:text-left">
                        <span className='text-[#D46A43]'>Welcome to AI Spark! </span> <br /></h3>
                    <p className="text-lg mt-4" >
                        We are a passionate team committed to guiding students and learners through the exciting world of Artificial Intelligence and Educational Technology. From step-by-step video tutorials on top AI tools and platforms, to personalized study tracks and field guides — we’re here to help you build your future with clarity and confidence.
                        Need help choosing the right learning path or laptop? We’ve got your back with practical advice, smart comparisons, and expert insights tailored to your goals.
                    </p></div>
            </div>


            <div className="bg-white text-center font-sans">
                {/* Why Choose Us? */}
                <section ref={sectionsRefs.Why_Choose_Us}>
                    <div className='mb-12'>
                        <h2 className="text-4xl font-bold mb-2">Why Choose Us?</h2>
                        <p className="text-[#8A8A8A] text-xl">Gain the skills, confidence, and support you need to succeed in the world of AI and beyond.</p>
                    </div>
                    <div className='py-12 px-16'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-4 max-w-5xl mx-auto">
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-briefcase text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1]">Simple Tutorials for AI Tools</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">
                                        We offer easy-to-follow video lessons that walk you through the most powerful AI platforms and tools in a clear, hands-on way.</p>
                                </div>
                            </div>
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-user text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1] max-w-[90%]">Personalized Learning Tracks</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">
                                        Whether you're into data analysis, machine learning, smart design, or other AI fields — we help you choose the right track for your goals.</p>
                                </div>
                            </div>
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-user-pen text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1] max-w-[90%]">Smart Laptop Buying Guide</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">
                                        Get practical tips and comparisons to help you pick the perfect laptop for your studies, projects, and future career.</p>
                                </div>
                            </div>
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-user-pen text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1] max-w-[90%]"> Instant Answers with Smart Chatbot</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">Our intelligent chatbot is available 24/7 to answer your questions quickly and accurately — whenever you need support.</p>
                                </div>
                            </div>
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-briefcase text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1]">Tailored Suggestions Based on Your Interests</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">The chatbot doesn’t just answer — it also recommends learning paths and tools that match your goals and interests.</p>
                                </div>
                            </div>
                            <div className=" text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-lg border border-gray-300 rounded-xl p-6 bg-white">
                                <i class="fa-solid fa-user text-[#3055D1] text-5xl mb-1"></i>
                                <div className="text-center">
                                    <h4 className="font-semibold text-xl mb-1 text-[#3055D1] max-w-[90%]"> Interactive, Personalized Learning Experience</h4>
                                    <p className="text-[#262338] font-normal opacity-70 px-2">With our AI-powered chatbot, your journey becomes more dynamic and customized — like having a personal mentor at your side.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet The Team */}
                <section ref={sectionsRefs.team} className="py-8">
                    <div className='mb-12'>
                        <h2 className="text-4xl font-bold mb-2">Meet The Team</h2>
                        <p className="text-[#8A8A8A] font-medium">Behind every spark is a story — discover the people powering AI Spark with expertise, heart, and vision.</p>
                    </div>

                    {/* Leader Card */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-5xl mx-auto p-6 rounded-lg">
                        <img
                            src="../src/assets/about/dr-ayman.jpeg"
                            alt="Team Lead"
                            className="w-2/5 object-cover h-72 transition-transform duration-500 hover:scale-110 "
                        />
                        <div className="text-left bg-[#E5EBFF] px-12 py-6 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#14142B]">Dr. Ayman Gaber</h3><br />
                            <p className='font-semibold text-[#262338]'>Educational Technology Instructor</p>
                            <p className="text-[#4E4B66] font-normal mt-3">A dedicated lecturer in Educational Technology at the Faculty of Specific Education, Fayoum University. He holds a Ph.D. in Educational Technology and currently serves as the Deputy Director of the Center for Student Assessment Development. </p>
                            <p className='text-[#262338] font-semibold mt-4'>Industry Experience</p>
                            <p className='text-[#4E4B66] font-normal mt-1'>Beyond academia, Dr.Ayman Gaber has contributed to national and international scientific competitions and actively shares e-learning content through his YouTube channel, helping learners enhance their digital skills.</p>
                            <p className='text-[#262338] font-semibold mt-4'>Academic and Training Expertise</p>
                            <p className='text-[#4E4B66] font-normal mt-1'>Dr. Ayman Gaber specializes in designing educational software and digital learning environments. He is a certified trainer in several international programs, including ICDL, Microsoft, and A+ certifications.</p>
                            <div className="flex mt-2 gap-2">
                                <a href=' https://www.facebook.com/share/1BpLygwwv1/' target='-blank'> <span className="fa-brands fa-facebook text-blue-600 text-3xl rounded-full transition-transform duration-300 hover:scale-110  cursor-pointer"></span> </a>
                               <a href=' agm00@fayoum.edu.eg' target='-blank'> <span className="fa-solid fa-envelope mr-2 text-[#3055D1] text-blue-600 text-3xl rounded-full transition-transform duration-300 hover:scale-110  cursor-pointer"></span> </a>
                                <a href='https://youtube.com/@aymangabr?si=UglrtVXrD_OsAhw2' target='-blank'><span className="fa-brands fa-youtube text-red-600 text-3xl rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"></span>
                            </a>
                            </div>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div ref={sectionsRefs.members} className="mt-10 flex flex-wrap justify-center gap-6 px-4 container mx-auto bg-[#E5EBFF] py-4">
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Ebtsam.jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Ebtsam Saad</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Asmaa 2 .jpeg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm"> Asmaa Abo Zaid </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Asmaa 1 .jpeg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Asmaa AbdelZaher</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Alaa.jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Alaa Ashraf</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Elham.jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Elham Ebrahim</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/1.jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Amira Gamal</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Aya 2 .jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Aya Salah</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Donia .jpeg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Donia Fares</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Soha.jpeg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Soha Khaled</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/SHahd.jpeg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">SHahd Ramadan</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                src="../src/assets/Team/Fatma.jpg"
                                alt='Aya Salah photo'
                                className="w-44 h-44 rounded-full object-cover transition-transform duration-500 hover:scale-110 "
                            />
                            <p className="mt-2 font-medium text-sm">Fatma Ashry</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>


}
