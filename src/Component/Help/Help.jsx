import React from 'react'
import style from './Help.module.css'

export default function Help() {
    return <>
        <div className='mt-32 mb-12'>
            <div className='bg-[#EFF4F8] py-10 '>
                <h2 className='font-bold text-3xl text-center font-[Almarai] px-2'>Anything</h2>
                <div className="flex justify-center px-6 pt-6">
                    <div className="relative w-full" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
                        <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/B7DZImMXm4k"
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
