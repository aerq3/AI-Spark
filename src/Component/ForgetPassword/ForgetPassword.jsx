import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import style from './ForgetPassword.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ForgetPassword() {

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const navigate = useNavigate();


    async function forgetPassword(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(
                `http://spark1.runasp.net/api/auth/forgot-password`,
                values
            );
            setIsLoading(false);
            toast.success(response.data.message || "Password reset email sent!");
            navigate("/resetPassword");
        } catch (error) {
            setIsLoading(false);
          // إذا فيه استجابة من السيرفر
            if (error.response) {
            const data = error.response.data;
            // إذا كانت فيه مصفوفة أخطاء
            if (Array.isArray(data.errors)) {
                data.errors.forEach((err) => {
                toast.error(err);
            });
            setApiError(data.errors[0]);
            // إذا كانت فيه رسالة واحدة
            } else if (data.message) {
                toast.error(data.message);
            } else {
                toast.error("This email has not been registered before.");
            }
          // إذا كان فيه مشكلة في الاتصال بالسيرفر
            } else if (error.request) {
                toast.error("No response from the server. Please check your connection.");
          // أخطاء عامة
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        }
    }
    
        function validateForm(values) {
            let errors = {};
            if (!values.email) {
                errors.email = 'Email Required'
            }
    
            return errors
        }
    
        let formik = useFormik({
            initialValues: {
                email: '',
            }, validate: validateForm
            ,  onSubmit: forgetPassword
        })
    return <>
        
        <motion.div
            className="min-h-screen bg-[linear-gradient(to_bottom,_#E5EBFF_34%,_#084FC757)] flex items-center justify-center"
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
                    
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-4 mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-4 mt-2">Continue</button>}
                </form>
            </div>
        </motion.div>
    </>
}
