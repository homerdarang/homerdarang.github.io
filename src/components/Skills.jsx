import React from 'react';

import PenAndPaper from '../../public/icons/PenAndPaper';
import Photoshop from '../../public/icons/Photoshop';
import Canva from '../../public/icons/Canva';
import Tailwind from '../../public/icons/Tailwind';
import Terminal from '../../public/icons/Terminal';
import VsCode from '../../public/icons/VsCode';
import ReactJs from '../../public/icons/ReactJs';
import JavaScript from '../../public/icons/JavaScript';
import GitHub from '../../public/icons/GitHub';


function Skills() {
    return (
        <>
            <div className='grid place-content-center mt-20 mb-10 text-teal-400 w-5/6 m-auto'>
                <div className='border-t-8 w-16 m-auto border-yellow-200 border-dotted my-8'></div>
                <h2 className='lg:text-4xl md:text-2xl text-xl font-semibold  text-center my-8'>Skills</h2>
                <div className='grid md:grid-cols-12 xl:gap-28 lg:gap-20 gap-12 text-center my-8 backdrop-blur md:bg-black/25 lg:bg-white/10 bg-white/15 rounded-3xl md:px-5 py-10'>
                    <div className='mg:text-2xl text-xl font-medium lg:col-span-4 md:col-span-4 col-span-8'>
                        <h2 className='md:text-2xl text-lg'>Design</h2>
                        <h4 className='text-yellow-200 my-3 text-lg'>Design tools:</h4>
                        <ul className='grid place-content-center my-5 text-slate-300'>
                            <li className='text-base bg-white/10 w-44 ps-2 py-1 rounded-full flex place-items-center my-2'>
                                <PenAndPaper />
                                Pen & paper
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-3 py-1 rounded-full flex place-items-center my-2'>
                                <Photoshop />
                                Photoshop
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-7 py-1 rounded-full flex place-items-center my-2'>
                                <Canva />
                                Canva
                            </li>
                        </ul>
                        <p className='font-extralight text-base lg:px-14 text-pretty  md:px-1 px-10'>I prioritize straightforward content organization, elegant design patterns, and seamless interactions.</p>
                    </div>
                    <div className='mg:text-2xl text-xl font-medium lg:col-span-4 md:col-span-4 col-span-8'>
                        <h2 className='md:text-2xl text-lg'>Code</h2>
                        <h4 className='text-yellow-200 my-3 text-lg'>Dev tools:</h4>
                        <ul className='grid place-content-center my-5 text-slate-300'>
                            <li className='text-base bg-white/10 w-44 ps-2 py-2 rounded-full flex place-items-center my-2'>
                                <Tailwind />
                                Tailwindcss
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-5 py-1 rounded-full flex place-items-center my-2'>
                                <Terminal />
                                Terminal
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-7 py-1 rounded-full flex place-items-center my-2'>
                                <VsCode />
                                VsCode
                            </li>
                        </ul>
                        <p className='font-extralight text-base lg:px-14 text-pretty md:px-1 px-10'>I enjoy coding projects from the ground up, crafting each element, and bringing creative ideas to life.</p>
                    </div>
                    <div className='mg:text-2xl text-xl font-medium lg:col-span-4 md:col-span-4 col-span-8'>
                        <h2 className='md:text-2xl text-lg'>Others</h2>
                        <h4 className='text-yellow-200 my-3 text-lg'>Other tools:</h4>
                        <ul className='grid place-content-center my-5 text-slate-300'>
                            <li className='text-base bg-white/10 w-44 ps-5 py-1 rounded-full flex place-items-center my-2'>
                                <ReactJs />
                                ReactJs
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-3 py-1 rounded-full flex place-items-center my-2'>
                                <JavaScript />
                                JavaScript
                            </li>
                            <li className='text-base bg-white/10 w-44 ps-7 py-1 rounded-full flex place-items-center my-2'>
                                <GitHub />
                                GitHub
                            </li>
                        </ul>
                        <p className='font-extralight text-base lg:px-14 text-pretty md:px-1 px-10'>I enjoy brainstorming new ideas and working on various projects while savoring a relaxing cup of coffee.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills