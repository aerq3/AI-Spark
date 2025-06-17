
import style from './Register.module.css'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { useContext, useState} from 'react'
import toast from 'react-hot-toast';

export default function Register() {

    const [apiError, setApiError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)

    async function register(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(
            "http://spark1.runasp.net/api/auth/pre-register-User",
            values
        );
            setIsLoading(false);
            toast.success(response.data.message || "Registration successful!");
            navigate("/verifycode");
        } catch (error) {
            setIsLoading(false);
            if (error.response) {
            const data = error.response.data;
            // إذا فيه مصفوفة أخطاء
                if (Array.isArray(data.errors)) {
                    data.errors.forEach((err) => toast.error(err));
                }
                // إذا فيه رسالة واحدة فقط
                else if (data.message) {
                    toast.error(data.message);
                }
                // حالة غير متوقعة داخل response
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
        if (!values.name) {
            errors.name = 'Name Required'
        }
        else if (!/^[\p{L} ]{10,50}$/u.test(values.name)) {
            errors.name = 'Invalid name. Enter a name that is at least 10 characters long and does not exceed 50 characters.'
        }

        if (!values.email) {
            errors.email = 'Email Required'
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Please enter the email correctly ex(Taha12@gmail.com)'
        }

        if (!values.password) {
            errors.password = 'Password Required' 
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%*?@&])[A-Za-z\d$!%*?@&]{8,15}$/.test(values.password)) {
            errors.password = 'Invalid password. Enter password. It contains uppercase and lowercase letters, special characters($!%*?@&) only, and numbers.'
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Confirm Password Required';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'The confirm Password do not match Password';
        }

        return errors
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }, validate: validateForm
        ,  onSubmit: register
    })

    return <>
        <motion.div
            className="min-h-screen bg-[linear-gradient(to_bottom,_#E5EBFF_34%,_#084FC757)] flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-0 z-10 text-center p-3 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={`absolute flex flex-row-reverse bg-white rounded-tl-[3rem]  rounded-bl-[3rem] overflow-hidden shadow-lg w-[90%] max-w-3xl `}>
                <form onSubmit={formik.handleSubmit}  className={`mr-[29%] flex-1 p-10 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out ${ isActive ? "opacity-0 translate-x-100" : "opacity-100 translate-x-0"}`}>
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='name'
                        name='name'
                        placeholder="name"
                        className="mb-6 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.name && formik.touched.name && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.name}
                    </div>}
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        id='email'
                        name='email'
                        placeholder="Email"
                        className="mb-6 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.email && formik.touched.email && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.email}
                    </div>}
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id='Password'
                        name='password'
                        placeholder="Password"
                        className="mb-6 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.password && formik.touched.password && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.password}
                    </div>}
                    <input
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id='confirmPassword'
                        name='confirmPassword'
                        placeholder="confirm Password"
                        className="mb-6 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.confirmPassword}
                    </div>}
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded  mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#3055D1] text-white py-2 rounded mt-2">Register</button>}
                </form>

                <div className={`w-[30%] absolute top-0 right-[0%] bottom-0 rounded-tl-[2.5rem] rounded-bl-[2.5rem] bg-[#3055D1] z-0 transition-all duration-[3000ms] ease-in-out ${isActive ? "right-[100%] w-[400%]" : ""}`}></div>
                    <div
                        className={`text-white font-[Roboto] p-6 flex flex-col justify-center items-center text-center absolute top-0 bottom-0 right-3.5 transition-all duration-[1000ms] ease-in-out ${
                        isActive ? "right-[-100%]" : "right-0"}`}>
                        <h2 className="text-2xl font-bold mb-2 leading-snug">"Welcome to AI <br/> Spark! "</h2>
                        <p className="text-sm mb-4 capitalize">alearly have an account?</p>
                    <button 
                        onClick={() => {
                            setIsActive(true); 
                            setTimeout(() => {
                            setIsActive(false);
                            }, 2950); 
                            setTimeout(() => {
                                navigate('/login');
                            }, 3000);
                        }} className="font-bold border cursor-pointer border-white py-3 px-8 rounded-[12px] transition-all duration-1000">
                        Login
                    </button>
                    </div>
                    

                
            </div>
        </motion.div>
    </>


}
