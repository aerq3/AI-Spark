import React, { useContext, useState } from 'react'
import style from './OurServices.module.css'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function OurServices() {
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()
    async function yourPlan(values) {
        try {
            setIsLoading(true);
            let trackIdToSend = values.TrackId;
            // 👇 تعديل TrackId حسب الشروط
            if (values.TrackId === "1") {
                if (values.durationInMonths === "3") {
                    trackIdToSend = "1";
                } else if (values.durationInMonths === "6") {
                    trackIdToSend = "2";
                }
                else if(values.durationInMonths === "12") {
                    trackIdToSend = "3";
                }
            }
            if (values.TrackId === "2") {
                if (values.durationInMonths === "3") {
                    trackIdToSend = "4";
                } else if (values.durationInMonths === "6") {
                    trackIdToSend = "5";
                }
                else {
                    trackIdToSend = "6";
                }
            }
            if (values.TrackId === "3") {
                if (values.durationInMonths === "3") {
                    trackIdToSend = "7";
                } else if (values.durationInMonths === "6") {
                    trackIdToSend = "8";
                }
                else {
                    trackIdToSend = "9";
                }
            }
            if (values.TrackId === "4") {
                if (values.durationInMonths === "3") {
                    trackIdToSend = "10";
                } else if (values.durationInMonths === "6") {
                    trackIdToSend = "11";
                }
                else {
                    trackIdToSend = "12";
                }
            }
            const response = await axios.get(`http://trackguide.runasp.net/api/Track/plan`, {
                params: {
                    TrackId: trackIdToSend,
                    durationInMonths: values.durationInMonths
                }
            })
            localStorage.setItem('TrackId' , trackIdToSend)
            localStorage.setItem('durationInMonths' , values.durationInMonths)
            setIsLoading(false);
            toast.success("Start Your Plan.")
            navigate('/roadmap')
        } catch (error) {
            console.error('Error fetching track plan:', error);
            setIsLoading(false);
        }
    }
    const formik = useFormik({
        initialValues: {
            TrackId: null,
            durationInMonths: null,
        }, onSubmit: yourPlan,
        });
    return <>
        <div className='mt-21'>
            <section className="relative min-h-screen bg-gray-100 py-10 px-3 sm:px-6 text-center" 
                style={{
                    backgroundImage: `url('../src/assets/our S.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                        <div className="absolute inset-0 bg-[#00000080] bg-opacity-60 z-0"></div>
                        <div className="relative">
                <div className='max-w-full sm:max-w-[80%] lg:max-w-[50%] flex flex-col justify-start text-left  p-5 mt-5'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-[#e5e7eb]">
"At  <span className='text-[#D46A43]'>AI Spark</span> , we offer comprehensive digital learning services tailored specifically for Educational Technology students"
                    </h1>
                    <p className='text-[#9ca3af] font-medium w-full sm:w-3/4 mb-6'>
                   From interactive content design to training on AI tools in education.
                    </p>
                </div>

</div>
            </section>
            <div className='mt-6'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const { TrackId, durationInMonths } = formik.values;
                    if (!TrackId || TrackId === '0' || !durationInMonths || durationInMonths === '0') {
                        toast.error('Please select both Your Track and Duration Month!');
                        return;
                    }
                    formik.handleSubmit();}} className="max-w-[60%] mb-12 m-auto">
                    <select
                        id="TrackId"
                        name="TrackId"
                        className="bg-[#EFF4F8] border border-[#6CA6CD] text-black text-2xl rounded-lg block w-full p-5 font-normal focus-visible:outline-none cursor-pointer"
                        onChange={formik.handleChange}
                        value={formik.values.TrackId}
                    >
                        <option value="0">Your Track</option>
                        <option value="1">Full Stack Development</option>
                        <option value="2">Graphic Design</option>
                        <option value="4">Video Editing</option>
                        <option value="3">DataBase</option>
                    </select>
                    <select
                        id="durationInMonths"
                        name="durationInMonths"
                        className="bg-[#EFF4F8] cursor-pointer mt-12 border border-[#6CA6CD] text-black text-2xl rounded-lg block w-full p-5 font-normal focus-visible:outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.durationInMonths}
                    >
                        <option value="0">Duration Month</option>
                        <option value="3">3 Month</option>
                        <option value="6">6 Month</option>
                        <option value="12">12 Month</option>
                    </select>

                    {isLoading ? (
                        <button
                            type="submit"
                            className="mt-12 w-full bg-[#3055d1] hover:bg-blue-700 text-white text-2xl py-4 rounded-lg transition duration-300">
                            <i className="fas fa-spinner fa-spin"></i>
                        </button>
                    ) : (<button
                            type="submit"
                            className="mt-12 w-full cursor-pointer bg-[#3055d1] hover:bg-blue-700 text-white text-2xl py-4 rounded-lg transition duration-300">
                            Start Your Plan
                        </button>
                        )
                    }
                </form>
            </div>
        </div>
    </>


}
