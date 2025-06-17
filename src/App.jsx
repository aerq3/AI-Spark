import './App.css'
import Layout from './Component/Layout/Layout'
import Register from './Component/Register/Register'
import ForgetPassword from './Component/ForgetPassword/ForgetPassword'
import ResetPassword from './Component/ResetPassword/ResetPassword'
import Login from './Component/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Component/Home/Home'
import ContactUs from './Component/ContactUs/ContactUs'
import AboutUs from './Component/AboutUs/AboutUs'
import Platforms from './Component/Platforms/Platforms'
import OurServices from './Component/OurServices/OurServices'
import VerifyCode from './Component/VerifyCode/VerifyCode'
import ChatBot from './Component/ChatBot/ChatBot'
import { Toaster } from 'react-hot-toast'
import Laptops from './Component/Laptops/Laptops'
import Help from './Component/Help/Help'
import RoadMap from './Component/RoadMap/RoadMap'
import NotFound from './Component/NotFound/NotFound'
import PlatformDetails from './Component/PlatformDetails/PlatformDetails'


function App() {
  const routers = createBrowserRouter([{
  path: '',
  element: <Layout />,
    children: [
      { index: true, element: <Home /> },  
      { path: 'login', element: <Login /> },            
      { path: 'register', element: <Register /> },       
      { path: 'forgetPassword', element: <ForgetPassword /> },  
      { path: 'resetPassword', element: <ResetPassword /> },    
      { path: 'aboutus', element: <AboutUs /> },         
      { path: 'ourservices', element: <OurServices /> }, 
      { path: 'platforms', element: <Platforms /> },      
      { path: 'contactus', element: <ContactUs /> },      
      { path: 'verifycode', element: <VerifyCode /> },      
      { path: 'chatbot', element: <ChatBot /> },      
      { path: 'laptops', element: <Laptops/> },      
      { path: 'help', element: <Help /> },      
      { path: 'roadmap', element: <RoadMap /> },      
      { path: 'pDetails', element: <PlatformDetails /> },      
      { path: '*', element: <NotFound /> },
    ]
  }])

  return <>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    
  </>
}

export default App
