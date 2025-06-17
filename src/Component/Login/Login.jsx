import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import style from './Login.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
// import { ActiveContext } from '../../Context/ActiveContext';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { UserToken } from '../../Context/TokenContext';

export default function Login() {

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)

    async function login(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(
            `http://spark1.runasp.net/api/auth/login`,
            values
            );
            setIsLoading(false);
            toast.success("Hey there! Login successful — let's start", {
            duration: 3000,
            });
            navigate("/");
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
            const data = error.response.data;
            // إذا فيه مصفوفة أخطاء
            if (Array.isArray(data.errors)) {
                data.errors.forEach((err) => toast.error(err));
            }
            // إذا فيه رسالة واحدة
            else if (data.message) {
                toast.error(data.message);
            }
            // إذا ما فيهش رسالة واضحة
            else {
                toast.error("An unknown error occurred from the server.");
            }
            } else if (error.request) {
                toast.error("No response from the server. Please check your internet connection.");
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
            // else if (!/^\d{14}$/.test(values.email)) {
            //     errors.email = 'الرقم القومي غير صحيح'
            // }
    
            if (!values.password) {
                errors.password = 'Password Required'
            }
            // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,15}$/.test(values.password)) {
            //     errors.password = 'كلمة المرور غير صحيحة '
            // }
    
            return errors
        }
    
        let formik = useFormik({
            initialValues: {
                email: '',
                password: '',
            }, validate: validateForm
            ,  onSubmit: login
        })
    return <>
        <motion.div
            className="min-h-screen bg-[linear-gradient(to_bottom,_#E5EBFF_34%,_#084FC757)] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-0 z-10 text-center p-3 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={`absolute flex flex-row-reverse bg-white rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg w-[100%] max-w-3xl `}>
                <div className={`w-[30%] absolute top-0 left-[0%] bottom-0 rounded-tr-[2.5rem] rounded-br-[2.5rem] bg-[#3055D1] z-0 transition-all duration-[3000ms] ease-in-out ${isActive ? "left-[100%] w-[400%]" : ""}`}></div>
                    <div
                        className={`text-white font-[Roboto] p-6 flex flex-col justify-center items-center text-center absolute top-0 bottom-0 left-3.5 transition-all duration-[1000ms] ease-in-out ${
                        isActive ? "left-[-100%]" : "left-0"}`}>
                        <h2 className="text-2xl font-bold mb-2 leading-snug">"Welcome Back <br /> to AI Spark! "</h2>
                        <p className="text-sm mb-4">Don't have an account yet?</p>
                        <button
                            onClick={() => {
                            setIsActive(true);
                            setTimeout(() => {
                                setIsActive(false);
                            }, 2950);
                            setTimeout(() => {
                                navigate("/register");
                            }, 3000);
                            }}
                            className="font-bold cursor-pointer border border-white py-2 px-6 rounded-[12px] transition-all duration-1000"
                            >
                            Register
                        </button>
                    </div>

                    <form
                        onSubmit={formik.handleSubmit}
                        className={`ml-[29%] flex-1 p-20 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out ${
                            isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                        }`}
                        >
                        {/* Email */}
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                        />
                        {formik.errors.email && formik.touched.email && (
                            <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                            {formik.errors.email}
                            </div>
                        )}

                        {/* Password */}
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            id="Password"
                            name="password"
                            placeholder="Password"
                            className="mt-4 mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                        />
                        {formik.errors.password && formik.touched.password && (
                            <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                            {formik.errors.password}
                            </div>
                        )}

                        {/* زر التحميل أو التسجيل */}
                        {isLoading ? (
                            <button
                            type="button"
                            className="text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-4 mt-2"
                            >
                            <i className="fas fa-spinner fa-spin"></i>
                            </button>
                        ) : (
                            <button
                            type="submit"
                            className="text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mb-6 mt-2"
                            >
                            Login
                            </button>
                        )}

                        {/* رابط نسيت كلمة المرور */}
                        <NavLink to="/forgetPassword" className="cursor-pointer text-sm text-[#3055D1] text-center">
                        Forgot your Passowrd?
                        </NavLink>
                        {/* <NavLink to="/forgetPassword" className="cursor-pointer text-xl text-[#3055D1] text-center flex items-center justify-center mt-6 border border-black p-2">
                        <i class="fa-brands fa-google mr-2"></i>Continue with Google
                        </NavLink> */}
                    </form>

            </div>
        </motion.div>
    </>
}
