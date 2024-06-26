import React from 'react';

import SocialMedia from './SocialMedia';

import ReactJs from '../../public/icons/ReactJs';

function Footer() {
    return (
        <>
            <div className='lg:flex lg:flex-row lg:justify-between gap-10 lg:w-full w-5/6 m-auto'>
                <div className='mt-8 backdrop-blur md:bg-black/25 lg:bg-white/10 bg-white/15 text-teal-400 lg:border-t-2 lg:border-dashed rounded-md w-full lg:rounded-tr-3xl'>
                    <div className='grid place-content-center text-pretty place-items-center lg:px-16 md:px-12 lg:py-20 md:py-16 px-10 py-12'>
                        <p className='md:text-lg mt-2 text-yellow-200'>Learning, Living, Dreaming, </p>
                        <p className='md:text-lg text-yellow-200'>Leveling up one day at a time.</p>
                        <div>
                            <SocialMedia />
                        </div>
                    </div>
                </div>

                <div className='mt-8 backdrop-blur md:bg-black/25 lg:bg-white/10 bg-white/15 text-teal-400 lg:border-t-2 lg:border-dashed rounded-md w-full lg:rounded-tl-3xl'>
                    <div className='grid place-content-center place-items-center lg:px-16 md:px-12 lg:py-20 md:py-16 px-10 py-12'>
                        <div className='font-extralight text-pretty grid place-content-center place-items-center'>
                            <h3 className='lg:text-2xl text-lg font-semibold'>Homer Darang</h3>
                            <p className='md:text-xl text-lg'>HandcraftedByMe</p>
                            <p>TwentyTwentyFour &copy;</p>
                        </div>
                        <small className='flex place-items-center mt-3'>Made with <ReactJs /></small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer