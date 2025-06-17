import React, { useEffect, useRef, useState } from 'react'
import style from './PlatformDetails.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { div } from 'framer-motion/client';
import { useLocation } from 'react-router-dom';

export default function PlatformDetails() {
    const hasFetchedRef = useRef(false);
    const [isLoading, setIsLoading] = useState(false)
    const [url, setUrl] = useState(false)
    const [name, setName] = useState(false)
    const [desc, setDesc] = useState(false)
    const [steps, setSteps] = useState([])
    useEffect(() => {
        if (hasFetchedRef.current) return; // منع التكرار
                hasFetchedRef.current = true;
        const handleToolClick = async () => {
            setIsLoading(true)
            const response = await axios.get(`http://trackguide.runasp.net/api/Tool/tool-details/${localStorage.getItem('toolId')}`);
            setSteps(response.data.steps)
            setUrl(response.data.videoURLs)
            setDesc(response.data.description)
            setName(response.data.name)
            setIsLoading(false)
            console.log(response.data);
            
        };
        handleToolClick();
    }, [])
    const formatStepDescription = (description) => {
        // Regex لرصد الروابط
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return description.replace(
            urlRegex,
            (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${url}</a>`
        );
    };
    return <>
        {isLoading ? <Loading /> :
            <div className='mt-28 mb-12'>
                <div className='bg-[#EFF4F8] py-10 '>
                    <h2 className='font-bold text-3xl text-center font-[Almarai] px-2'>{name}</h2>
                    <p dir="rtl" className='text-center mb-2'>{desc}</p>
                    <div className="flex justify-center px-6 pt-6">
                        <div className="relative w-full" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
                            <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className='mt-8 px-12' dir="rtl">
                        <h3 className='text-2xl font-semibold mb-4'>الخطوات:</h3>
                        <div className="space-y-3">
                            {steps.map((step, index) => (
                            <div key={index} className=" leading-relaxed font-bold text-black">
                                <span className="text-xl  text-[#3055d1] ">خطوة {step.stepNumber} :</span>{' '}
                                <span dangerouslySetInnerHTML={{ __html: formatStepDescription(step.description) }} />
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        }
    </>


}
