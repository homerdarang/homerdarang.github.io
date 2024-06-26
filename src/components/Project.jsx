import React from 'react';

import projectMedicImg from '../assets/images/project-image/project-medic-img.png';

import { GrShare } from "react-icons/gr";
import { GoFileCode } from "react-icons/go";

function Project() {
    return (
        <>
            <div className='text-teal-400 w-5/6 m-auto' id='project'>
                <div className='border-t-8 w-16 m-auto border-yellow-200 border-dotted my-8'></div>
                <div className='flex justify-center'>
                    <h2 className='lg:text-4xl md:text-2xl text-xl font-semibold my-8'>Current Project</h2>
                </div>
                <div className='px-12 py-16 backdrop-blur md:bg-black/25 lg:bg-white/10 bg-white/15 rounded-3xl text-teal-300 m-auto'>
                    <p className='text-yellow-200 w-2/3 md:m-auto font-medium text-balance md:text-lg'>
                        Tech used:
                        <span className='font-light'> React, Tailwindcss and Vercel. </span>
                    </p>
                    <div className='h-56 md:w-2/3 w-full m-auto overflow-hidden border border-yellow-200 rounded-xl bg-cover bg-center bg-no-repeat my-6' style={{ backgroundImage: `url(${projectMedicImg})` }} alt=''></div>
                    <div className='md:w-2/3 md:m-auto'>
                        <p className='font-light'>
                            Welcome to e-Konsulta &#8478;, your resource for free online consultations on baby health and wellness. Get expert advice and trustworthy information on infant care with the convenience of online booking. Schedule consultations with pediatric specialists and access resources on nutrition, sleep, and developmental milestones. We handle baby-related inquiries exclusively. Join us to nurture healthy, happy babies. Please note, this project is currently under development, and we are continually working to enhance our services and features. Join us to nurture healthy, happy babies.
                        </p>
                    </div>
                    <div className='flex flex-row gap-5 justify-center my-8'>
                        <a className='text-xs border border-teal-400 px-4 py-2 text-yellow-200 rounded-md hover:backdrop-blur outline-none hover:bg-white/5 transition-all ease-linear active:border-yellow-200 flex place-items-center' href="https://project-medic.vercel.app/" target="_blank" rel="noreferrer">
                            Go live
                            <span className='ms-2 text-xs'><GrShare /></span>
                        </a>
                        <a className='outline-none text-xs flex border border-teal-400 px-4 py-2 text-yellow-200 rounded-md hover:backdrop-blur hover:bg-white/5 transition-all ease-linear active:border-yellow-200 place-items-center' href="https://github.com/homerdarang/Project-Medic" target='_blank' rel='noreferrer'>
                            Source code
                            <span className='ms-2 text-xs'><GoFileCode /></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project