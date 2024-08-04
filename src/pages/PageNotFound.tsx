import React from 'react'
// libs
import { Link } from 'react-router-dom'
// assets
import Image404 from 'src/assets/images/NotFound404.jpg'

const PageNotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="p-6 bg-gray-800 text-center">
                <center><img src={Image404} className='w-full md:w-1/3' /></center>
                <Link to="/" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-blue-700 transition-all">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound