import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import blog from '../navbar/blog.png'

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center h-[120px] w-[40px}">
                                <img src={blog} alt="logo" />
                            </div>

                            {/* Text  */}
                            <h1
                            style={{ color: mode === 'dark' ? 'white' : 'yellow' }}
                             className=' text-2xl text-yellow-500 font-bold'>ScribbleStart</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Discover and share captivating stories—join our blog community today!
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection