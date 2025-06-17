import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export default function Layout() {
    const location = useLocation();

    const noLayoutRoutes = ['/verifycode', '/login', '/register', '/forgetPassword', '/resetPassword'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);
    
    return <>
        <ScrollToTop/>
        {!hideLayout && <Navbar />}
            <div >
                <Outlet/>
            </div>
        {!hideLayout && <Footer />}
    </>


}