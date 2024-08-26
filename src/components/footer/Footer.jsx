import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import blog from '../navbar/blog.png'
import { BiLogoGmail } from "react-icons/bi";


function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src={blog} alt="logo"
                    />
                    {/* logo text  */}
                    <span className="ml-3 text-xl text-white">
                        ScribbleStart
                    </span>
                </div>

                {/* items  */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    
                    <a
                        href="https://twitter.com/knyttneve"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        
                    </a>
                </p>
                
                {/* Right item  */}
                
                <span className="inline-flex flex-col sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <div className="sm:ml-auto sm:mt-0 mt-4 flex items-center space-x-4">
                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <BiLogoGmail className="text-xl text-white" />
                        <h4 className="text-sm text-white">aman7549raj@gmail.com</h4>
                    </div>

                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" /> 

                    {/* Phone */}
                    <div className="flex items-center">
                        <p className="text-sm text-white">Phone: 9142277856</p>
                    </div>
                </div>
                </span>
                
            </div>
        </footer>

    )
}

export default Footer