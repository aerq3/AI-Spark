import React, { useState } from 'react'
import style from './VerifyCode.module.css'
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function VerifyCode() {
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    let navigate = useNavigate()
    async function verifyCode(values) {
        try {
            setIsLoading(true);
            const response = await axios.post("http://spark1.runasp.net/api/auth/confirm-user", {
                email: values.email,
                code: String(values.code).trim()
            });
            setIsLoading(false);
            toast.success("Hey there! Register successful — let's start", {
                duration: 3000,
                });
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.data && error.response.data.errors) {
                toast.error(error.response.data.errors[0]);
            } else {
                toast.error("حدث خطأ غير متوقع");
            }
        }
    }
    let formik = useFormik({
        initialValues: {
            email: '',
            code: ''
        },onSubmit: verifyCode
    })
    return <>
        <motion.div
            className="min-h-screen bg-[linear-gradient(to_bottom,#E5EBFF_34%,#084FC757)] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-20 w-[50%] text-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={` flex flex-row-reverse bg-white rounded-overflow-hidden shadow-lg w-[100%] max-w-4xl `}>

                <form onSubmit={formik.handleSubmit} className={`flex-1 py-20 px-8 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out`}>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        id='email'
                        name='email'
                        placeholder="Email"
                        className="mb-4 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.email && formik.touched.email && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.email}
                    </div>}
                    <input
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='code'
                        name='code'
                        placeholder="Code"
                        className="mb-4 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.code && formik.touched.code && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.code}
                    </div>}
                    
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-4 mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-4 mt-2">Login</button>}
                </form>
            </div>
        </motion.div>
    </>


}