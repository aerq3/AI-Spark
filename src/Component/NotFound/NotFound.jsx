import React from 'react'
import style from './NotFound.module.css'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return <>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center text-center p-4 pt-22">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="Page not found"
                className="w-48 h-48 mb-6 animate-bounce"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                Page Not Found
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
                <i class="fa-solid fa-arrow-left text-xl"></i>
                Back to Home
            </Link>
        </div>
    </>


}
