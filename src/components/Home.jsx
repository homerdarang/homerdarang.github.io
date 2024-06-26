import React from 'react';
// import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';
import SocialMedia from './SocialMedia';
function Home() {
    return (
        <>
            <div className='hero-cover h-screen w-full relative'></div>
            <div className='absolute h-screen w-full top-0 backdrop-blur bg-black/10 overflow-y-scroll mb-3 scrollbox scroll-smooth'>
                <div className='absolute left-0 right-0 lg:top-48 md:top-40 sm:top-32 top-28'>
                    <div className='lg:flex lg:flex-row lg:gap-14 lg:justify-evenly w-5/6 m-auto text-yellow-200'>
                        <div className='w-full py-16'>
                            <div>
                                <h2 className='font-semibold text-teal-400 lg:text-4xl md:text-3xl text-2xl'>I'm Homer Darang</h2>
                                <div className='flex my-1 lg:text-3xl md:text-2xl text-xl'>
                                    <span className='me-2 text-teal-400 font-medium'>a</span>
                                    <Typewriter
                                        options={{
                                            strings: ['Frontend Developer', 'Web Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <SocialMedia />
                            </div>
                            <div className='grid text-center'>
                                <a className='text-yellow-200 border rounded-md md:px-8 md:py-3 px-3 py-2 hover:backdrop-blur md:hover:bg-white/15 hover:bg-black/20 active:scale-95 outline-none transition-all ease-linear mt-10 w-44' href="#project">My Project</a>

                                <a className='my-5 border rounded-md md:px-8 md:py-3 px-3 py-2 hover:backdrop-blur md:hover:bg-white/15 hover:bg-black/20 active:scale-95 outline-none transition-all ease-linear w-56 font-light md:text-base text-sm' href="../../../public/doc/Homer_Darang_Resume_FE.pdf" download='Homer_Darang_Resume_FE.pdf'>Download Resume</a>
                            </div>
                        </div>
                        <div>
                            <AboutMe />
                        </div>
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div>
                        <Project />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home