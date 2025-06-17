import React, { useContext, useEffect, useRef, useState } from 'react'
import style from './RoadMap.module.css'
import axios from 'axios';
import Loading from '../Loading/Loading';

export default function RoadMap() {
    // let { setPlan, plan, durationInMonths, setDurationInMonths, id, setId, description, setDescription } = useContext(PlanContext)
    const hasFetchedRef = useRef(false);
    const [plan, setPlan] = useState([]);
    const [id, setId] = useState(null);
    const [description, setDescription] = useState(null);
    const [durationInMonths, setDurationInMonths] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (hasFetchedRef.current) return; // منع التكرار
            hasFetchedRef.current = true;
        async function yourPlan() {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://trackguide.runasp.net/api/Track/plan`, {
                    params: {
                        TrackId: localStorage.getItem('TrackId'),
                        durationInMonths: localStorage.getItem('durationInMonths') 
                    }
                });
                setDescription(response.data.description)
                setId(response.data.id)
                setDurationInMonths(response.data.durationInMonths)
                setPlan(response.data.weeks)
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching track plan:', error);
                setIsLoading(false);
            }
        }

        yourPlan();
        // استدعاء الدالة عند تحميل المكون
    }, []);

    const arabicWeekOrder = (number) => {
        const ordinals = [
            'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس',
            'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر',
            'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر',
            'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون',
            'الحادي والعشرون', 'الثاني والعشرون', 'الثالث والعشرون', 'الرابع والعشرون', 'الخامس والعشرون',
            'السادس والعشرون', 'السابع والعشرون', 'الثامن والعشرون', 'التاسع والعشرون', 'الثلاثون',
            'الحادي والثلاثون', 'الثاني والثلاثون', 'الثالث والثلاثون', 'الرابع والثلاثون', 'الخامس والثلاثون',
            'السادس والثلاثون', 'السابع والثلاثون', 'الثامن والثلاثون', 'التاسع والثلاثون', 'الأربعون',
            'الحادي والأربعون', 'الثاني والأربعون', 'الثالث والأربعون', 'الرابع والأربعون', 'الخامس والأربعون',
            'السادس والأربعون', 'السابع والأربعون', 'الثامن والأربعون'
        ];
        return ordinals[number - 1] || number;
    };

    return <>
        {isLoading ? <Loading /> :
            <div className='mt-21 pb-8' dir="rtl">
                <div className='pt-8 px-8'>
                    <h2 className='font-semibold text-xl md:text-2xl lg:text-3xl'>{id}. {description}</h2>
                </div>
                <div className="overflow-x-auto px-8 py-4">
                    <table className="min-w-full border-collapse border border-gray-300 text-right">
                        <thead>
                            <tr className="bg-gray-100 text-center">
                                <th className="border border-gray-300 px-4 py-2 md:text-2xl text-xl">الأسابيع</th>
                                <th className="border border-gray-300 px-4 py-2 md:text-2xl text-xl">المهارات</th>
                                <th className="border border-gray-300 px-4 py-2 md:text-2xl text-xl">التفاصيل</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan?.map((item, index) => (
                                <tr key={index} className="border-t border-gray-300">
                                    <td className="border border-gray-300 px-4 py-2 align-top whitespace-nowrap text-black font-medium">
                                        الأسبوع {arabicWeekOrder(item.weekNumber)}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 align-top text-black">{item.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 align-top text-black">{item.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        }
    </>


}
